<script lang="ts">
  let props = $props();
</script>

<a
  href={props.href}
  class="flex h-14 items-center space-x-3 px-14 {props.active
    ? 'bg-dark border-accent border-r-10 font-semibold'
    : 'hover:bg-dark'} transition-border duration-100"
  onclick={props.closeSidebar}>
  <props.icon class="h-5 w-5 {props.active ? 'fill-accent' : 'fill-lighter'}" />
  <span class="-translate-y-px">{props.name}</span>
</a>
