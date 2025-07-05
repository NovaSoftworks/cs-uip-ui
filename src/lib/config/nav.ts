import type { Component } from 'svelte';

import OverviewIcon from '$lib/assets/icons/pages/overview.svelte';
import DetailsIcon from '$lib/assets/icons/pages/details.svelte';
import SecurityIcon from '$lib/assets/icons/pages/security.svelte';
import AppsIcon from '$lib/assets/icons/pages/apps.svelte';
import NovaHubIcon from '$lib/assets/icons/pages/novahub.svelte';

export interface NavLink {
  name: string;
  href: string;
  icon: Component;
}

export const navLinks: NavLink[] = [
  { name: 'Overview', href: '/', icon: OverviewIcon },
  { name: 'Details', href: '/details', icon: DetailsIcon },
  { name: 'Security', href: '/security', icon: SecurityIcon },
  { name: 'Apps', href: '/apps', icon: AppsIcon },
  { name: 'NovaHub', href: '/novahub', icon: NovaHubIcon }
];
