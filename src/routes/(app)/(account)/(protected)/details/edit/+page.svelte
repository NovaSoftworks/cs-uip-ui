<script lang="ts">
  import { t } from '$lib/translations';
  import FormInput from '$lib/components/account/form-input.svelte';
  import FormValue from '$lib/components/account/form-value.svelte';

  let { data } = $props();
  const { flow } = data;

  const groups = Object.groupBy(flow.ui.nodes, (n: any) => n.group);
  const csrf = groups.default?.find(n => n.attributes.name === 'csrf_token');
</script>

<svelte:head>
  <title>{$t('pages.details.edit.title')} | Nova Softworks</title>
</svelte:head>

<h1 class="page-title mb-7">{$t('pages.details.edit.heading')}</h1>
{#each Object.entries(groups) as [groupName, nodes]}
  {#if groupName !== 'default' && nodes}
    <div class="bg-lighter mb-14 rounded-sm p-7 shadow-sm">
      <form method={flow.ui.method} action={flow.ui.action} class="flex flex-col gap-7">
        <div class="flex justify-between">
          <h2 class="text-medium border-b-accent border-b-3 pb-1.75 text-2xl font-semibold">
            {$t(`pages.details.groups.${groupName}`) || groupName}
          </h2>
        </div>

        {#if csrf}
          <input type="hidden" name={csrf.attributes.name} value={csrf.attributes.value} />
        {/if}

        {#each nodes as node}
          {#if node.attributes.name === 'method'}
            <div class="flex items-center justify-end gap-7">
              <a href="/details" class="text-accent text-sm font-semibold hover:underline">
                {$t('actions.cancel')}
              </a>
              <button
                type="submit"
                name="method"
                value={node.attributes.value}
                class="bg-accent text-lighter hover:bg-accent/10 hover:text-accent cursor-pointer rounded-sm px-7 py-2.5 font-semibold transition">
                {$t('actions.save')}
              </button>
            </div>
          {:else}
            <FormInput
              type={node.attributes.type}
              name={node.attributes.name}
              value={node.attributes.value}
              required={node.attributes.required}
              autocomplete={node.attributes.autocomplete}
              disabled={node.attributes.disabled}
              placeholder={$t(`identity.placeholders.${node.attributes.name}`)}
              label={$t(`identity.${node.attributes.name}`)} />
          {/if}
        {/each}
      </form>
    </div>
  {/if}
{/each}
