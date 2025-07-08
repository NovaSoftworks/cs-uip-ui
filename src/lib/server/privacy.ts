import crypto from 'crypto';
import { HMAC_SALT } from './config';

/**
 * Hashes the provided data using HMAC with SHA-256 and a predefined salt.
 * Relies on the `HMAC_SALT` from the configuration for security.
 *
 * @param data - The input string to hash.
 * @returns The resulting hexadecimal hash string.
 */
export function hash(data: string): string {
  return crypto.createHmac('sha256', HMAC_SALT).update(data).digest('hex');
}

/**
 * Anonymizes a string by keeping the first character and replacing the rest with asterisks.
 *
 * @param value - The string to anonymize.
 * @returns The anonymized string with only the first character visible.
 */
export function anonymize(value: string): string {
  const firstLetter = value.charAt(0);
  return `${firstLetter}${'*'.repeat(value.length - 1)}`;
}

/**
 * Anonymizes an email address by anonymizing the user part and keeping the domain intact.
 *
 * @param email - The email address to anonymize.
 * @returns The anonymized email address.
 */
export function anonymizeEmail(email: string): string {
  const [user, domain] = email.split('@');
  return `${anonymize(user)}@${domain}`;
}
