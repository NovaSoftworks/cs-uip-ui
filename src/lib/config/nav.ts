import type { Component } from 'svelte';

import OverviewIcon from '$lib/assets/icons/pages/overview.svelte';
import DetailsIcon from '$lib/assets/icons/pages/details.svelte';
import SecurityIcon from '$lib/assets/icons/pages/security.svelte';
import AppsIcon from '$lib/assets/icons/pages/apps.svelte';
import NovaHubIcon from '$lib/assets/icons/pages/novahub.svelte';

export interface NavLink {
  key: string;
  href: string;
  icon: Component;
}

export const navLinks: NavLink[] = [
  { key: 'layout.sidebar.overview', href: '/', icon: OverviewIcon },
  { key: 'layout.sidebar.details', href: '/details', icon: DetailsIcon }
  //{ key: 'sidebar.apps', href: '/apps', icon: AppsIcon },
  //{ key: 'sidebar.novahub', href: '/novahub', icon: NovaHubIcon }
];
