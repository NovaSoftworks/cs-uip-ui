<script lang="ts">
  import { t } from '$lib/translations';
  import PencilIcon from '$lib/assets/icons/pencil.svelte';

  export let title: string;
  export let updateHref: string | undefined = undefined;
</script>

<div class="bg-lighter mt-7 rounded-sm p-3.5 shadow-sm sm:p-7">
  <div class="flex flex-col gap-7">
    <div class="flex justify-between">
      <h2 class="text-medium border-b-accent border-b-3 pb-1.75 text-xl font-semibold sm:text-2xl">
        {title}
      </h2>

      {#if updateHref}
        <a href={updateHref} class=" text-accent flex items-center space-x-1 font-semibold hover:underline">
          <span class="hidden sm:inline">{$t('actions.update')}</span>
          <PencilIcon class="fill-accent h-5 w-5 " />
        </a>
      {/if}
    </div>

    <slot />
  </div>
</div>
