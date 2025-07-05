<script lang="ts">
    import "../app.css";

    import { page } from "$app/state";
</script>

<div class="min-h-screen bg-light flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-9xl font-bold text-medium">{page.status}</h1>

        <p class="mt-3.5 text-3xl font-semibold text-medium">
            Yikes! {page.error?.message ?? "Something went awry."}
        </p>

        <p class="mt-3.5 text-m text-softened">
            Please keep your seatbelt fastened while we guide you back to
            safety.
        </p>

        <a
            href="/"
            class="inline-block mt-7 px-8 py-3 bg-medium text-lighter font-medium rounded-sm shadow hover:bg-softened transition"
        >
            Go Back Home
        </a>
    </div>
</div>
