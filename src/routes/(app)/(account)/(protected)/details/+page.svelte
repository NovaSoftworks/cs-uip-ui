<script lang="ts">
  import { page } from '$app/state';
  import { t } from '$lib/translations';
  import KratosInputNode from '$lib/components/account/kratos-input-node.svelte';

  let { data } = $props();
  const { flow } = data;

  const groups = Object.groupBy(flow.ui.nodes, (n: any) => n.group);
  const csrf = groups.default?.find(n => n.attributes.name === 'csrf_token');

  console.log(flow);
</script>

<svelte:head>
  <title>{$t('pages.details.title')} | Nova Softworks</title>
</svelte:head>

<h1 class="page-title mb-7">{$t('pages.details.heading')}</h1>
{#each Object.entries(groups) as [groupName, nodes]}
  {#if groupName !== 'default' && nodes}
    <div class="bg-lighter mb-14 rounded-sm p-7 shadow-sm">
      <form method={flow.ui.method} action={flow.ui.action} class="flex flex-col gap-7">
        <h2 class="text-medium text-2xl font-semibold">
          {$t(`pages.details.groups.${groupName}`) || groupName}
        </h2>

        {#if csrf}
          <input type="hidden" name={csrf.attributes.name} value={csrf.attributes.value} />
        {/if}

        {#each nodes as node}
          {#if node.attributes.name === 'method'}
            <button
              type="submit"
              name="method"
              value={node.attributes.value}
              class="bg-accent text-lighter hover:bg-accent/10 hover:text-accent w-full cursor-pointer rounded-sm py-2.5 font-semibold transition">
              {$t('actions.save')}
            </button>
          {:else}
            <div class="grid items-center lg:grid-cols-[1fr_4fr]">
              <label for={node.attributes.name} class="text-foreground mb-1.75 block text-sm font-medium lg:mb-0">
                {$t(`identity.${node.attributes.name}`)}
                {#if node.attributes.required}
                  <span class="text-ko ml-1">*</span>
                {/if}
              </label>
              <KratosInputNode
                id={node.attributes.name}
                attributes={node.attributes}
                placeholder={$t(`identity.placeholders.${node.attributes.name}`)} />
            </div>
          {/if}
        {/each}
      </form>
    </div>
  {/if}
{/each}
