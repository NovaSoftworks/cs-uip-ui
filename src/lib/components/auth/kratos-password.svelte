<script lang="ts">
  import VisibilityIcon from '$lib/assets/icons/visibility.svelte';
  import VisibilityOffIcon from '$lib/assets/icons/visibility-off.svelte';
  import { t } from '$lib/translations';

  let { attributes, messages } = $props();

  let errorMessages = messages.filter((m: any) => m.type === 'error');

  let passwordIsVisible = $state(false);

  function togglePasswordVisibility() {
    passwordIsVisible = !passwordIsVisible;
  }
</script>

{#if errorMessages.length}
  <div class="text-ko mb-1.75">{errorMessages[0].text}</div>
{/if}
<div class="relative">
  <input
    type={passwordIsVisible ? 'text' : 'password'}
    name={attributes.name}
    autocomplete="current-password"
    placeholder={$t('login.password_placeholder')}
    value={attributes.value}
    required={attributes.required}
    disabled={attributes.disabled}
    class="text-medium placeholder-softened focus:ring-accent w-full rounded-sm px-3.5 py-2.5 focus:ring-2 focus:outline-none {errorMessages.length
      ? 'bg-ko/10 ring-ko ring-2'
      : 'bg-light'}" />
  <button
    type="button"
    class="fill-softened absolute inset-y-0 right-3.5 cursor-pointer"
    onclick={togglePasswordVisibility}>
    {#if passwordIsVisible}
      <VisibilityIcon class="h-6" />
    {:else}
      <VisibilityOffIcon class="h-6" />
    {/if}
  </button>
</div>
