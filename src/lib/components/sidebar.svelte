<script lang="ts">
  import NavLink from '$lib/components/navlink.svelte';

  import { navLinks } from '$lib/config/nav';

  import NSLogo from '$lib/assets/logo-single-line.svelte';
  import SettingsIcon from '$lib/assets/icons/pages/settings.svelte';
  import LogoutIcon from '$lib/assets/icons/logout.svelte';

  import { page } from '$app/state';

  import { t } from '$lib/translations';

  let props = $props();
</script>

<!-- MOBILE SIDEBAR OVERLAY -->
{#if props.sidebarOpen}
  <button
    type="button"
    aria-label="close_sidebar"
    onclick={props.closeSidebar}
    tabindex="0"
    class="fixed inset-0 z-9 bg-black opacity-30 lg:hidden">
  </button>
{/if}

<!-- SIDEBAR -->
<aside
  class="
    bg-darker text-lighter fixed inset-y-0 left-0 z-10
    w-84 max-w-[80%] transform pt-7
    transition-transform lg:static
    lg:row-span-3 lg:max-w-none lg:translate-x-0 lg:border-0
"
  class:-translate-x-full={!props.sidebarOpen}
  class:translate-x-0={props.sidebarOpen}>
  <!-- Logo -->
  <div class="flex items-center justify-center">
    <a href="/" onclick={props.closeSidebar}>
      <NSLogo class="fill-lighter h-4" />
    </a>
  </div>

  <nav class="mt-7 flex-1 lg:mt-14" aria-label="main_navigation">
    {#each navLinks as { key, href, icon }}
      {@const active = page.url.pathname.startsWith(href)}
      <NavLink {href} {icon} name={$t(key)} {active} closeSidebar={props.closeSidebar} />
    {/each}
  </nav>

  <div class="flex-1">
    <hr class="border-medium mx-14 my-3.5 border-t" />
    <NavLink
      href="/settings"
      icon={SettingsIcon}
      name={$t('layout.sidebar.settings')}
      active={page.url.pathname === '/settings'}
      closeSidebar={props.closeSidebar} />
    <a href="/logout" class="hover:bg-dark flex h-14 w-[100%] cursor-pointer items-center space-x-3 px-14">
      <LogoutIcon class="h-5 w-5 fill-current" />
      <span>{$t('actions.logout')}</span>
    </a>
  </div>
</aside>
