import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
  redirect(303, '/overview');
};
