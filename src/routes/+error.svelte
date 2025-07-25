<script lang="ts">
  import '../app.css';

  import { page } from '$app/state';
</script>

<div class="bg-light flex min-h-screen items-center justify-center px-3.5 py-7 lg:px-7">
  <div class="text-center">
    <h1 class="text-medium text-9xl font-bold">{page.status}</h1>

    <p class="text-medium mt-3.5 text-3xl font-semibold">
      Yikes! {page.error?.message ?? 'Something went awry.'}
    </p>

    <p class="text-m text-softened mt-3.5">Please keep your seatbelt fastened while we guide you back to safety.</p>

    <a
      href="/"
      class="bg-medium text-lighter hover:bg-softened mt-7 inline-block rounded-sm px-8 py-3 font-semibold shadow transition">
      Go back home
    </a>
  </div>
</div>
