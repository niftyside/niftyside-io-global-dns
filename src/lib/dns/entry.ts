import { dnsConfig } from '../configuration';
import { createRecord } from '../gcp/dns/record';

/**
 * Create the DNS entries.
 */
export const createDNSEntries = async (): Promise<void> => {
  Object.entries(dnsConfig.entry).map(([name, entry]) => {
    const domainEntries = entry.domains.flatMap((data) =>
      data.names.map((domain) => [domain, data.zone])
    );
    domainEntries.map(([domain, zoneId]) =>
      createRecord(
        name + '-' + domain.replace(/\\W+/gi, '-'),
        domain,
        zoneId,
        entry.type,
        entry.values.map((value) => splitByLength(value, entry.type)),
        {
          ttl: entry.ttl,
        }
      )
    );
    return name;
  });
};

/**
 * Splits the value by the allowed maximum length.
 *
 * @param {string} value the value
 * @param {string} type the entry type
 * @returns
 */
const splitByLength = (value: string, type: string) => {
  const split = value.split(/(.{200})/).filter((x) => x.length > 0);

  return split.length > 1 || type == 'TXT'
    ? `"${split.join('" "')}"`
    : split.join();
};
