<script lang="ts">
  let { attributes, messages, inputmode = undefined, autocomplete = undefined, placeholder = undefined } = $props();

  let errorMessages = messages.filter((m: any) => m.type === 'error');
</script>

{#if errorMessages.length}
  <div class="text-ko mb-1.75">{errorMessages[0].text}</div>
{/if}
<input
  type={attributes.type}
  name={attributes.name}
  {inputmode}
  {autocomplete}
  {placeholder}
  value={attributes.value}
  required={attributes.required}
  disabled={attributes.disabled}
  class="text-medium placeholder-softened focus:ring-accent w-full rounded-sm px-3.5 py-2.5 focus:ring-2 focus:outline-none
{messages.length ? 'bg-ko/10 ring-ko ring-2' : 'bg-light'}" />
