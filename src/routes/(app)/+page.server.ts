import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

const DEBUG_MODE = env.PUBLIC_DEBUG_MODE === 'true';

const COOKIE_NAME = 'ory_kratos_session';

export const load = async ({ cookies, fetch }) => {
  if (DEBUG_MODE) {
    return {
      email: anonymizeEmail('mymail@novamail.com'),
      name: {
        first: 'Debug',
        last: anonymizeName('User')
      },
      verified: true,
      lastLogin: formatDate('2025-07-06T21:03:00Z')
    };
  }

  const sessionCookie = cookies.get(COOKIE_NAME);

  const res = await fetch(`${env.PUBLIC_BASE_URL}/sessions/whoami`, {
    headers: {
      Cookie: `${COOKIE_NAME}=${sessionCookie}`
    },
    credentials: 'include'
  });

  if (!res.ok) {
    redirect(303, '/login');
  }

  const session = await res.json();

  return {
    email: anonymizeEmail(session.identity.traits.email),
    name: {
      first: session.identity.traits.name.first,
      last: anonymizeName(session.identity.traits.name.last)
    },
    verified: session.identity.verifiable_addresses?.[0]?.verified ?? false,
    lastLogin: formatDate(session.authenticated_at)
  };
};

function anonymizeEmail(email: string): string {
  const [localPart, domain] = email.split('@');
  const firstLetter = localPart.charAt(0);
  return `${firstLetter}${'*'.repeat(localPart.length - 1)}@${domain}`;
}

function anonymizeName(name: string): string {
  const firstLetter = name.charAt(0);
  return `${firstLetter}${'*'.repeat(name.length - 1)}`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  }).format(date);
}
