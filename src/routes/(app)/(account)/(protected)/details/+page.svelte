<script lang="ts">
  import { t } from '$lib/translations';
  import FormValue from '$lib/components/account/form-value.svelte';
  import FormContainer from '$lib/components/account/form-container.svelte';

  let { data } = $props();
  const { user } = data;
</script>

<svelte:head>
  <title>{$t('pages.details.title')} | Nova Softworks</title>
</svelte:head>

<h1 class="page-title">{$t('pages.details.heading')}</h1>
<FormContainer title={$t(`pages.details.groups.profile`)} updateHref="/details/edit">
  {#each user.traits as trait}
    <FormValue label={$t(`identity.${trait.name}`)} value={trait.value} />
  {/each}
</FormContainer>

<FormContainer title={$t(`pages.details.groups.password`)} updateHref="/details/edit">
  <FormValue label={$t(`identity.password`)} value="**********" />
</FormContainer>
