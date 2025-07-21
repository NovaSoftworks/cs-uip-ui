<script lang="ts">
  import NSLogo from '$lib/assets/logo-single-line.svelte';

  import { t } from '$lib/translations';

  let { data } = $props();
  const flow = data.flow;
  const uiMessages = flow.ui.messages || [];
  const email = flow?.ui?.nodes?.find((n: any) => n.attributes?.name === 'email')?.attributes?.value;
</script>

<svelte:head>
  <title>{$t('verification.title')} | Nova Softworks</title>
</svelte:head>

<div class="w-full max-w-100 space-y-7">
  <h1 class="text-medium text-center text-2xl">{$t('verification.prompt')}</h1>

  <div class="bg-lighter rounded-sm px-3.5 py-7 shadow-sm md:px-7">
    <div class="text-center">
      <p>
        {$t('verification.email_sent_message')}
        <span class="font-semibold">{email || '[email_placeholder]'}</span>
      </p>

      <p class="text-muted mt-7 max-w-md">
        {$t('verification.link_instructions')}
      </p>

      <div class="text-s mt-7 space-y-3.5 text-center">
        {$t('verification.resend_question')}

        <a
          href="/verification"
          class="bg-accent text-lighter hover:bg-accent/10 hover:text-accent mt-7 block w-full cursor-pointer rounded-sm py-2.5 font-semibold transition">
          {$t('verification.resend_button')}
        </a>
      </div>
    </div>
  </div>
</div>
