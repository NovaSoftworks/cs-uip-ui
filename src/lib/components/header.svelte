<script lang="ts">
    import NSLogo from "$lib/assets/logo-single-line.svelte";
    import MenuIcon from "$lib/assets/icons/menu.svelte";
    import LanguageIcon from "$lib/assets/icons/language.svelte";
    import LogoutIcon from "$lib/assets/icons/logout.svelte";

    let props = $props();
</script>

<!-- MOBILE HEADER -->
<div class="flex items-start justify-between md:hidden">
    <a class="font-bold text-lg text-gray-800" href="/">
        <NSLogo class="h-4 fill-darker" />
    </a>
    <button
        aria-label="toggle_sidebar"
        onclick={props.toggleSidebar}
        class="text-2xl h-3.5"
    >
        <MenuIcon class="h-3.5 fill-darker" />
    </button>
</div>

<!-- DESKTOP HEADER -->
<div class="hidden md:flex items-center justify-end space-x-6 text-sm">
    <div class="flex items-center space-x-1 text-softened cursor-not-allowed">
        <LanguageIcon class="h-5 w-5 fill-current" />
        <span>English</span>
    </div>
    <button
        class="flex items-center space-x-1 cursor-pointer hover:text-softened"
    >
        <LogoutIcon class="h-5 w-5 fill-current" />
        <span>Log out</span>
    </button>
</div>
