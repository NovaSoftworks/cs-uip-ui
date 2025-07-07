<!-- todo: fully automate form generation based on Kratos login flow -->

<script lang="ts">
  import NSLogo from '$lib/assets/logo-single-line.svelte';
  import KratosInput from '$lib/components/auth/kratos-input.svelte';
  import KratosPassword from '$lib/components/auth/kratos-password.svelte';

  let { data } = $props();
  const flow = data.flow;
  const uiMessages = flow.ui.messages || [];
  console.log(flow);
  console.log(uiMessages);
</script>

<div class="w-full max-w-100 space-y-7">
  <h1 class="text-medium text-center text-2xl">Welcome back to Nova</h1>

  <div class="bg-lighter rounded-sm px-3.5 py-7 shadow-sm md:px-7">
    <!-- LOGO -->
    <div class="flex justify-center">
      <NSLogo class="fill-medium  md:h-6" />
    </div>

    <form class="mt-14 space-y-7" method="post" action={flow.ui.action}>
      {#if uiMessages && uiMessages.length}
        {#each uiMessages as { text }}
          {#if text.length}
            <div class="bg-ko/10 text-ko mb-3.5 rounded-sm px-3.5 py-2.5">{text}</div>
          {/if}
        {/each}
      {/if}
      <input type="hidden" name="flow" value={flow.id} />

      {#each flow.ui.nodes as { attributes, messages }}
        {#if attributes.type === 'hidden'}
          <input type="hidden" name={attributes.name} value={attributes.value} />
        {/if}

        {#if attributes.name === 'identifier'}
          <KratosInput {attributes} {messages} inputmode="email" autocomplete="email" placeholder="Email" />
        {/if}

        {#if attributes.name === 'password'}
          <KratosPassword {attributes} {messages} />
        {/if}
      {/each}

      <button
        type="submit"
        name="method"
        value="password"
        class="bg-accent text-lighter hover:bg-accent/10 hover:text-accent w-full cursor-pointer rounded-sm py-2.5 font-semibold transition">
        Log in
      </button>
    </form>

    <div class="text-s text-accent mt-3.5 space-y-3.5 text-center font-semibold">
      <a href="/creation" class="block hover:underline"> Create your Nova account </a>
      <a href="/recovery" class="block hover:underline"> Can't log in? </a>
    </div>
  </div>
</div>
