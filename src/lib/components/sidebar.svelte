<script lang="ts">
    import NavLink from "$lib/components/navlink.svelte";

    import { navLinks } from "$lib/config/nav";

    import NSLogo from "$lib/assets/logo-single-line.svelte";
    import SettingsIcon from "$lib/assets/icons/pages/settings.svelte";
    import LogoutIcon from "$lib/assets/icons/logout.svelte";

    import { page } from "$app/stores";

    let props = $props();
</script>

<!-- MOBILE SIDEBAR OVERLAY -->
{#if props.sidebarOpen}
    <button
        type="button"
        aria-label="close_sidebar"
        onclick={props.closeSidebar}
        tabindex="0"
        class="fixed inset-0 bg-black opacity-30 z-9 md:hidden"
    >
    </button>
{/if}

<!-- SIDEBAR -->
<aside
    class="
    fixed inset-y-0 left-0 pt-7 w-84 max-w-[80%] z-10
    bg-darker text-lighter
    transform transition-transform
    md:static md:translate-x-0 md:row-span-3 md:border-0
"
    class:-translate-x-full={!props.sidebarOpen}
    class:translate-x-0={props.sidebarOpen}
>
    <!-- Logo -->
    <div class="flex items-center justify-center">
        <a href="/" onclick={props.closeSidebar}>
            <NSLogo class="h-4 fill-lighter" />
        </a>
    </div>

    <nav class="flex-1 mt-7 md:mt-14" aria-label="main_navigation">
        {#each navLinks as { name, href, icon }}
            {@const active = $page.url.pathname === href}
            <NavLink
                {href}
                {icon}
                {name}
                {active}
                closeSidebar={props.closeSidebar}
            />
        {/each}
    </nav>

    <div class="flex-1">
        <hr class="border-t border-medium mx-14 my-3.5" />
        <NavLink
            href="/settings"
            icon={SettingsIcon}
            name="Settings"
            active={$page.url.pathname === "/settings"}
            closeSidebar={props.closeSidebar}
        />
        <button
            class="flex items-center h-14 px-14 space-x-3 w-[100%] cursor-pointer hover:bg-dark"
        >
            <LogoutIcon class="h-5 w-5 fill-current" />
            <span>Log out</span>
        </button>
    </div>
</aside>
