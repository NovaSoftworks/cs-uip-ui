<script lang="ts">
  import Footer from '$lib/components/footer.svelte';

  import '../../../app.css';

  let { children } = $props();
</script>

<div class="bg-light text-darker flex min-h-screen flex-col">
  <main class="flex flex-grow items-center justify-center px-3.5 py-7 lg:px-7">
    {@render children()}
  </main>

  <footer class="pb-7">
    <Footer />
  </footer>
</div>
