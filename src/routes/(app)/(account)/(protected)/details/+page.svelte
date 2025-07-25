<script lang="ts">
  import { t } from '$lib/translations';
  import FormValue from '$lib/components/account/form-value.svelte';
  import PencilIcon from '$lib/assets/icons/pencil.svelte';
  import { render } from 'svelte/server';

  let { data } = $props();
  const { user } = data;
</script>

<svelte:head>
  <title>{$t('pages.details.title')} | Nova Softworks</title>
</svelte:head>

{#snippet updateLink()}
  <a href="/details/edit" class=" text-accent flex items-center space-x-1 font-semibold hover:underline">
    <span class="hidden sm:inline">{$t('actions.update')}</span>
    <PencilIcon class="fill-accent h-5 w-5 " />
  </a>
{/snippet}

<h1 class="page-title mb-7">{$t('pages.details.heading')}</h1>
<div class="bg-lighter mb-14 rounded-sm p-7 shadow-sm">
  <div class="flex flex-col gap-7">
    <div class="flex justify-between">
      <h2 class="text-medium border-b-accent border-b-3 pb-1.75 text-2xl font-semibold">
        {$t(`pages.details.groups.profile`)}
      </h2>
      {@render updateLink()}
    </div>

    {#each user.traits as trait}
      <FormValue label={$t(`identity.${trait.name}`)} value={trait.value} />
    {/each}
  </div>
</div>

<div class="bg-lighter mb-14 rounded-sm p-7 shadow-sm">
  <div class="flex flex-col gap-7">
    <div class="flex justify-between">
      <h2 class="text-medium border-b-accent border-b-3 pb-1.75 text-2xl font-semibold">
        {$t(`pages.details.groups.password`)}
      </h2>
      {@render updateLink()}
    </div>

    <FormValue label={$t(`identity.password`)} value="**********" />
  </div>
</div>
