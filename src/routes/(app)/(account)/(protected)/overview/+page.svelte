<script lang="ts">
  const { data } = $props();
  const { locale, firstName, verified, lastLogin } = data;

  import { formatDate } from '$lib/formatting';

  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('pages.overview.title')} | Nova Softworks</title>
</svelte:head>

<h1 class="page-title">{$t('pages.overview.heading', { name: firstName } as any)}</h1>
<h2 class="page-subtitle mb-7">{$t('pages.overview.heading_2')}</h2>

<div class="grid grid-cols-1 gap-x-14 gap-y-7 lg:grid-cols-2 lg:gap-y-14">
  <div class="bg-lighter rounded-sm p-7 shadow-sm">
    <div class="mb-7 flex items-center gap-3">
      <h2 class="text-medium text-2xl font-semibold">{$t('pages.overview.summary.title')}</h2>
    </div>

    <div class="text-darker space-y-3.5 text-sm">
      <div class="flex justify-between">
        <span class="text-medium">{$t('pages.overview.summary.status')}</span>
        <span class="text-darker"
          >{verified
            ? $t('pages.overview.summary.status.verified')
            : $t('pages.overview.summary.status.unverified')}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-medium">{$t('pages.overview.summary.last_login')}</span>
        <span>{formatDate(lastLogin, locale)}</span>
      </div>
    </div>
  </div>
</div>
