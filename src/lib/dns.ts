import { createDNSEntries } from './dns/entry';

/**
 * Create the DNS records.
 */
export const createDNS = async (): Promise<void> => {
  await createDNSEntries();
};
