<script lang="ts">
  import Sidebar from '$lib/components/sidebar.svelte';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';

  import '../../../../app.css';

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

<div class="bg-light text-darker grid min-h-screen grid-rows-[auto_1fr_auto] lg:grid-cols-[auto_1fr]">
  <Sidebar {sidebarOpen} {closeSidebar} />

  <header class="row-start-1 p-7 lg:col-start-2">
    <Header {toggleSidebar} />
  </header>

  <main class="row-start-2 p-7 lg:col-start-2 lg:px-14">
    {@render children()}
  </main>

  <footer class="row-start-3 pb-7 lg:col-start-2">
    <Footer />
  </footer>
</div>
