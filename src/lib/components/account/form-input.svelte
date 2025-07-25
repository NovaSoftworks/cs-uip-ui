<script lang="ts">
  import VisibilityIcon from '$lib/assets/icons/visibility.svelte';
  import VisibilityOffIcon from '$lib/assets/icons/visibility-off.svelte';

  import { t } from '$lib/translations';

  let { type, id = undefined, label = undefined, class: className = undefined, ...inputProps } = $props();

  const inputId = id || `input-${Math.random().toString(36).slice(2, 11)}`;

  // Handle password visibility toggle
  let passwordIsVisible = $state(false);
  function togglePasswordVisibility() {
    passwordIsVisible = !passwordIsVisible;
  }
</script>

{#snippet inputElement()}
  {#if type === 'password'}
    <div class="relative">
      <input
        type={passwordIsVisible ? 'text' : 'password'}
        id={inputId}
        {...inputProps}
        class={className
          ? className
          : 'text-medium placeholder-softened focus:ring-accent bg-light w-full rounded-sm px-3.5 py-2.5 focus:ring-2 focus:outline-none'} />
      <button
        type="button"
        class="fill-softened absolute inset-y-0 right-3.5 cursor-pointer"
        onclick={togglePasswordVisibility}
        aria-label={$t(
          passwordIsVisible
            ? 'components.account.form_input.hide_password'
            : 'components.account.form_input.show_password'
        )}>
        {#if passwordIsVisible}
          <VisibilityIcon class="h-6" />
        {:else}
          <VisibilityOffIcon class="h-6" />
        {/if}
      </button>
    </div>
  {:else}
    <div>
      <input
        {type}
        id={inputId}
        {...inputProps}
        class={className
          ? className
          : 'text-darker placeholder-softened focus:ring-accent bg-light w-full rounded-sm px-3.5 py-2.5 focus:ring-2 focus:outline-none'} />
    </div>
  {/if}
{/snippet}

{#if label}
  <div class="grid items-center sm:grid-cols-[1fr_4fr]">
    <label for={inputId} class="text-foreground mb-1.75 block text-sm font-medium sm:mb-0">
      {label}
      {#if inputProps.required}
        <span class="text-ko ml-1">*</span>
      {/if}
    </label>
    {@render inputElement()}
  </div>
{:else}
  {@render inputElement()}
{/if}
