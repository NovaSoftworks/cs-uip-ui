<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('pages.details.title')} | Nova Softworks</title>
</svelte:head>

<h1 class="page-title mb-7">{$t('pages.details.heading')}</h1>

<div class="bg-lighter rounded-sm p-7 shadow-sm">
  <div class="mb-7 flex flex-col gap-7">
    <input
      type="text"
      placeholder={$t('identity.placeholders.first_name')}
      class="text-medium placeholder-softened focus:ring-accent bg-light focus:outline-nonebg-light w-full rounded-sm px-3.5 py-2.5 focus:ring-2" />
    <input
      type="text"
      placeholder={$t('identity.placeholders.last_name')}
      class="text-medium placeholder-softened focus:ring-accent bg-light focus:outline-nonebg-light w-full rounded-sm px-3.5 py-2.5 focus:ring-2" />

    <button
      type="submit"
      class="bg-accent text-lighter hover:bg-accent/10 hover:text-accent w-full cursor-pointer rounded-sm py-2.5 font-semibold transition">
      {$t('actions.save')}
    </button>
  </div>
</div>
