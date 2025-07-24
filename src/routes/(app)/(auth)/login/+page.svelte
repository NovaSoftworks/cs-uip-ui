<!-- todo: fully automate form generation based on Kratos login flow -->

<script lang="ts">
  import NSLogo from '$lib/assets/logo-single-line.svelte';
  import KratosInput from '$lib/components/auth/kratos-input.svelte';
  import KratosPassword from '$lib/components/auth/kratos-password.svelte';

  import { t } from '$lib/translations';

  let { data } = $props();
  const { flow, isReAuth } = data;
  const uiMessages = flow.ui.messages || [];
</script>

<svelte:head>
  <title>{isReAuth ? $t('pages.login.title_reauth') : $t('pages.login.title')} | Nova Softworks</title>
</svelte:head>

<div class="w-full max-w-100 space-y-7">
  <h1 class="text-medium text-center text-2xl">
    {isReAuth ? $t('pages.login.heading_reauth') : $t('pages.login.heading')}
  </h1>

  <div class="bg-lighter rounded-sm px-3.5 py-7 shadow-sm md:px-7">
    <!-- LOGO -->
    <div class="flex justify-center">
      <NSLogo class="fill-medium  md:h-6" />
    </div>

    <form class="mt-14 space-y-7" method={flow.ui.method} action={flow.ui.action}>
      {#if uiMessages && uiMessages.length}
        {#each uiMessages as { id, type }}
          <div class="{type === 'error' ? 'bg-ko/10 text-ko' : 'bg-accent/10 text-accent'} rounded-sm px-3.5 py-2.5">
            {$t(`kratos.${id}`)}
          </div>
        {/each}
      {/if}
      <input type="hidden" name="flow" value={flow.id} />

      {#each flow.ui.nodes as { attributes, messages }}
        {#if attributes.type === 'hidden'}
          <input type="hidden" name={attributes.name} value={attributes.value} />
        {/if}

        {#if attributes.name === 'identifier'}
          <KratosInput
            {attributes}
            {messages}
            inputmode="email"
            autocomplete="email"
            placeholder={$t('identity.traits.email')} />
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
        {$t('actions.login')}
      </button>
    </form>

    {#if !isReAuth}
      <div class="text-s text-accent mt-3.5 space-y-3.5 text-center font-semibold">
        <a href="/creation" class="block hover:underline">{$t('pages.login.create_account_link')}</a>
        <a href="/recovery" class="block hover:underline">{$t('pages.login.cant_login_link')}</a>
      </div>
    {/if}
  </div>
</div>
