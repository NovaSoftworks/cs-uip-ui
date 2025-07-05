<script lang="ts">
    import Sidebar from "$lib/components/sidebar.svelte";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";

    import "../../app.css";

    let { children } = $props();

    // SIDEBAR
    let sidebarOpen = $state(false);

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
    }

    function closeSidebar() {
        sidebarOpen = false;
    }
</script>

<div
    class="min-h-screen grid grid-rows-[auto_1fr_auto] md:grid-cols-[auto_1fr] bg-light text-darker"
>
    <Sidebar {sidebarOpen} {closeSidebar} />

    <header class="row-start-1 md:col-start-2 p-7">
        <Header {toggleSidebar} />
    </header>

    <main class="row-start-2 md:col-start-2 p-7">
        {@render children()}
    </main>

    <footer class="row-start-3 md:col-start-2 pb-7">
        <Footer />
    </footer>
</div>
