import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const load = async ({ cookies, fetch }) => {
  const res = await fetch(`${env.PUBLIC_BASE_URL}/self-service/logout/browser`, {
    headers: {
      Cookie: cookies
        .getAll()
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ')
    },
    credentials: 'include'
  });

  if (!res.ok) {
    console.error('Logout failed:', res.status, res.statusText);
    throw redirect(303, '/');
  }

  const data = await res.json();
  throw redirect(303, data.logout_url);
};
