<script lang="ts">
  import NSLogo from '$lib/assets/logo-single-line.svelte';

  import { t } from '$lib/translations';

  let { data } = $props();
  const { isVerified, flowUi } = data;

  console.log('Verification page data:', data);
</script>

<svelte:head>
  <title>{isVerified ? $t('verification.title_verified') : $t('verification.title_pending')} | Nova Softworks</title>
</svelte:head>

<div class="bg-light flex items-center justify-center px-3.5 py-7 md:px-7">
  <div class="max-w-xl space-y-7 text-center">
    <!-- Logo -->
    <div class="flex justify-center">
      <NSLogo class="fill-medium h-6" />
    </div>

    {#if isVerified}
      <h1 class="text-medium text-3xl font-semibold">{$t('verification.heading_verified')}</h1>
      <p class="text-m text-softened">{$t('verification.subtext_verified')}</p>
      <a
        href="/login"
        class="bg-accent text-lighter hover:bg-accent/10 hover:text-accent inline-block rounded-sm px-8 py-3 font-semibold shadow transition">
        {$t('verification.back_to_login')}
      </a>
    {:else}
      <h1 class="text-medium text-3xl font-semibold">{$t('verification.heading_pending')}</h1>
      <p class="text-m text-medium">
        {$t('verification.email_sent')}
      </p>
      <p class="text-m text-medium">{$t('verification.check_spam')}</p>
      <!-- TODO: add resend verification link feature -->
    {/if}
  </div>
</div>
