import * as gcp from '@pulumi/gcp';
import { Output } from '@pulumi/pulumi';

/**
 * Defines data for a DNS record.
 */
export type DNSRecordData = {
  readonly resource: gcp.dns.RecordSet;
  readonly name: string;
  readonly fqdn: Output<string>;
};
