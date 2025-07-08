import { env as privateEnv } from '$env/dynamic/private';

// PRIVATE ENVIRONMENT VARIABLES // These are only available server-side
export const HMAC_SALT = privateEnv.PRIVATE_HMAC_SALT || 'dev-default-salt';
