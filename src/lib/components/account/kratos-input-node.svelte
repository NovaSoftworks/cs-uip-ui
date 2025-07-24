<script lang="ts">
  let { attributes, placeholder = undefined, id } = $props();

  import VisibilityIcon from '$lib/assets/icons/visibility.svelte';
  import VisibilityOffIcon from '$lib/assets/icons/visibility-off.svelte';
  let passwordIsVisible = $state(false);

  function togglePasswordVisibility() {
    passwordIsVisible = !passwordIsVisible;
  }
</script>

{#if attributes.type === 'password'}
  <div class="relative">
    <input
      {id}
      type={passwordIsVisible ? 'text' : 'password'}
      name={attributes.name}
      value={attributes.value}
      required={attributes.required}
      autocomplete={attributes.autocomplete}
      {placeholder}
      disabled={attributes.disabled}
      class="text-medium placeholder-softened focus:ring-accent bg-light w-full rounded-sm px-3.5 py-2.5 focus:ring-2
focus:outline-none" />
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
{:else}
  <input
    {id}
    type={attributes.type}
    name={attributes.name}
    value={attributes.value}
    required={attributes.required}
    autocomplete={attributes.autocomplete}
    placeholder={attributes.name === 'password' ? '**********' : placeholder}
    disabled={attributes.disabled}
    class="text-medium placeholder-softened focus:ring-accent bg-light w-full rounded-sm px-3.5 py-2.5 focus:ring-2
focus:outline-none" />
{/if}
