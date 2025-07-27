import type { Component } from 'svelte';

import OverviewIcon from '$lib/assets/icons/circle.svelte';
import DetailsIcon from '$lib/assets/icons/user.svelte';

export interface NavLink {
  key: string;
  href: string;
  icon: Component;
}

export const navLinks: NavLink[] = [
  { key: 'layout.sidebar.overview', href: '/overview', icon: OverviewIcon },
  { key: 'layout.sidebar.details', href: '/details', icon: DetailsIcon }
];
