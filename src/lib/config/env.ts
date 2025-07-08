import { env as publicEnv } from '$env/dynamic/public';

// PUBLIC ENVIRONMENT VARIABLES // These are available to the client-side code
export const ENVIRONMENT = publicEnv.PUBLIC_ENVIRONMENT?.toLowerCase() ?? 'development';
export const BASE_URL = publicEnv.PUBLIC_BASE_URL;
export const LOG_LEVEL = publicEnv.PUBLIC_LOG_LEVEL?.toLowerCase() ?? 'info';

// COMPUTED PUBLIC ENVIRONMENT VARIABLES // These are derived from the public environment variables
export const IS_OFFLINE = ENVIRONMENT === 'offline';
