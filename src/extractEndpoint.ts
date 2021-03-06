import { isDevelopmentAddress } from './isDevelopmentAddress';

export function extractEndpoint(url: string, subdomain: string): string {
  const parts = url.split('.');
  const domain =
    !isDevelopmentAddress(url) && isDomainName(parts)
      ? buildEndpoint(parts)
      : 'staging-boclips.com';

  return `https://${subdomain}.${domain}`;
}

function buildEndpoint(parts: ReadonlyArray<string>): string {
  return [parts[parts.length - 2], parts[parts.length - 1]].join('.');
}

function isDomainName(parts: ReadonlyArray<string>): boolean {
  return parts.length > 1;
}
