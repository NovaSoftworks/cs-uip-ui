<script lang="ts">
  import NSLogo from '$lib/assets/logo-single-line.svelte';
  import KratosInput from '$lib/components/auth/kratos-input.svelte';
  import KratosPassword from '$lib/components/auth/kratos-password.svelte';

  import { t } from '$lib/translations';

  let { data } = $props();
  const flow = data.flow;
  const uiMessages = flow.ui.messages || [];

  console.log('Flow data:', flow);
</script>

<svelte:head>
  <title>{$t('pages.creation.title')} | Nova Softworks</title>
</svelte:head>

<div class="w-full max-w-100 space-y-7">
  <h1 class="text-medium text-center text-2xl">{$t('pages.creation.heading')}</h1>

  <div class="bg-lighter rounded-sm px-3.5 py-7 shadow-sm md:px-7">
    <!-- LOGO -->
    <div class="flex justify-center">
      <NSLogo class="fill-medium  md:h-6" />
    </div>

    <form class="mt-14 space-y-7" method={flow.ui.method} action={flow.ui.action}>
      {#if uiMessages.length}
        {#each uiMessages as { id }}
          <div class="bg-ko/10 text-ko rounded-sm px-3.5 py-2.5">{$t(`kratos.${id}`)}</div>
        {/each}
      {/if}
      <input type="hidden" name="flow" value={flow.id} />

      {#each flow.ui.nodes as { attributes, messages }}
        {#if attributes.type === 'hidden'}
          <input type="hidden" name={attributes.name} value={attributes.value} />
        {:else if attributes.name === 'traits.email'}
          <KratosInput
            {attributes}
            {messages}
            inputmode="email"
            autocomplete="email"
            placeholder={$t('identity.placeholders.email')} />
        {:else if attributes.name === 'traits.name.first'}
          <KratosInput
            {attributes}
            {messages}
            autocomplete="given-name"
            placeholder={$t('identity.placeholders.first_name')} />
        {:else if attributes.name === 'traits.name.last'}
          <KratosInput
            {attributes}
            {messages}
            autocomplete="family-name"
            placeholder={$t('identity.placeholders.last_name')} />
        {:else if attributes.name === 'password'}
          <KratosPassword {attributes} {messages} />
        {:else if attributes.type === 'submit'}
          <button
            type="submit"
            name={attributes.name}
            value={attributes.value}
            class="bg-accent text-lighter hover:bg-accent/10 hover:text-accent w-full cursor-pointer rounded-sm py-2.5 font-semibold transition">
            {$t('actions.signup')}
          </button>
        {/if}
      {/each}
    </form>

    <div class="text-s mt-3.5 space-y-3.5 text-center">
      {$t('pages.creation.already_have_account_prompt')}
      <a href="/login" class="text-accent font-semibold hover:underline">{$t('actions.login')}</a>
    </div>
  </div>
</div>
