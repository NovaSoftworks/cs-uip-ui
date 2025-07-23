<script lang="ts">
  import NSLogo from '$lib/assets/logo-single-line.svelte';
  import MenuIcon from '$lib/assets/icons/menu.svelte';
  import LogoutIcon from '$lib/assets/icons/logout.svelte';

  import { t } from '$lib/translations';
  import LanguageSwitcher from './language-switcher.svelte';

  let { toggleSidebar } = $props();
</script>

<!-- MOBILE HEADER -->
<div class="flex items-start justify-between md:hidden">
  <a class="text-lg font-bold text-gray-800" href="/">
    <NSLogo class="fill-darker h-4" />
  </a>
  <button aria-label="toggle_sidebar" onclick={toggleSidebar} class="h-3.5 text-2xl">
    <MenuIcon class="fill-darker h-3.5" />
  </button>
</div>

<!-- DESKTOP HEADER -->
<div class="hidden items-center justify-end space-x-6 text-sm md:flex">
  <LanguageSwitcher />
  <a href="/logout" class="hover:text-softened flex cursor-pointer items-center space-x-1">
    <LogoutIcon class="h-5 w-5 fill-current" />
    <span>{$t('actions.logout')}</span>
  </a>
</div>
