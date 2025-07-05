<script lang="ts">
    import Footer from "$lib/components/footer.svelte";

    import "../../app.css";

    let { children } = $props();
</script>

<div
    class="min-h-screen flex flex-col bg-light text-darker"
>

    <main class="flex-grow flex items-center justify-center py-7 px-3.5 md:px-7">
        {@render children()}
    </main>

    <footer class="pb-7">
        <Footer />
    </footer>
</div>
