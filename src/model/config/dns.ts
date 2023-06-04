import { StringMap } from '../map';

/**
 * Defines DNS data.
 */
export type DnsData = {
  readonly entry: StringMap<EntryData>;
  readonly redirect: StringMap<RedirectData>;
};

/**
 * Defines entry data.
 */
export type EntryData = {
  readonly type: string;
  readonly ttl?: number;
  readonly values: readonly string[];
  readonly domains: readonly DomainData[];
};

/**
 * Defines redirect data.
 */
export type RedirectData = {
  readonly url: string;
  readonly domains: readonly DomainData[];
};

/**
 * Defines domain data.
 */
export type DomainData = {
  readonly names: readonly string[];
  readonly zone: string;
};
