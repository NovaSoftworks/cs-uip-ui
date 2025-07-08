<script lang="ts">
  import LanguageIcon from '$lib/assets/icons/language.svelte';
  import { page } from '$app/state';

  import { supportedLocales } from '$lib/config/locales';
  import { goto } from '$app/navigation';

  function onChange(event: Event) {
    const selectedLocale = (event.target as HTMLSelectElement).value;
    const currentPath = page.url.pathname;
    goto(`/set-language?lang=${selectedLocale}&redirect=${currentPath}`);
  }
</script>

<div class="flex items-center space-x-1">
  <LanguageIcon class="h-5 w-5 fill-current" />
  <select name="locale" aria-label="Select language" class="cursor-pointer" on:change={onChange}>
    {#each supportedLocales as l}
      <option value={l.locale} selected={l.locale === page.data.locale}>
        {l.displayName}
      </option>
    {/each}
  </select>
</div>
