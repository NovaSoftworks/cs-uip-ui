<script lang="ts">
  import NavLink from '$lib/components/navlink.svelte';

  import { navLinks } from '$lib/config/nav';

  import NSLogo from '$lib/assets/logo-single-line.svelte';
  import SettingsIcon from '$lib/assets/icons/pages/settings.svelte';
  import LogoutIcon from '$lib/assets/icons/logout.svelte';

  import { page } from '$app/stores';

  let props = $props();
</script>

<!-- MOBILE SIDEBAR OVERLAY -->
{#if props.sidebarOpen}
  <button
    type="button"
    aria-label="close_sidebar"
    onclick={props.closeSidebar}
    tabindex="0"
    class="fixed inset-0 z-9 bg-black opacity-30 md:hidden">
  </button>
{/if}

<!-- SIDEBAR -->
<aside
  class="
    bg-darker text-lighter fixed inset-y-0 left-0 z-10 w-84
    max-w-[80%] transform
    pt-7 transition-transform
    md:static md:row-span-3 md:translate-x-0 md:border-0
"
  class:-translate-x-full={!props.sidebarOpen}
  class:translate-x-0={props.sidebarOpen}>
  <!-- Logo -->
  <div class="flex items-center justify-center">
    <a href="/" onclick={props.closeSidebar}>
      <NSLogo class="fill-lighter h-4" />
    </a>
  </div>

  <nav class="mt-7 flex-1 md:mt-14" aria-label="main_navigation">
    {#each navLinks as { name, href, icon }}
      {@const active = $page.url.pathname === href}
      <NavLink {href} {icon} {name} {active} closeSidebar={props.closeSidebar} />
    {/each}
  </nav>

  <div class="flex-1">
    <hr class="border-medium mx-14 my-3.5 border-t" />
    <NavLink
      href="/settings"
      icon={SettingsIcon}
      name="Settings"
      active={$page.url.pathname === '/settings'}
      closeSidebar={props.closeSidebar} />
    <button class="hover:bg-dark flex h-14 w-[100%] cursor-pointer items-center space-x-3 px-14">
      <LogoutIcon class="h-5 w-5 fill-current" />
      <span>Log out</span>
    </button>
  </div>
</aside>
