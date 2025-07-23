<script lang="ts">
  let { attributes, placeholder = undefined, id } = $props();
</script>

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
