import { env as privateEnv } from '$env/dynamic/private';

// PRIVATE ENVIRONMENT VARIABLES // These are only available server-side
export const HMAC_SALT = privateEnv.PRIVATE_HMAC_SALT || 'dev-default-salt';
export const ADMIN_API_BASE_URL = privateEnv.PRIVATE_ADMIN_API_BASE_URL || 'http://localhost:4434';
