<script lang="ts">
  import LanguageIcon from '$lib/assets/icons/language.svelte';
</script>

<div class="flex flex-col items-center space-y-2 text-center">
  <div class="text-softened flex cursor-not-allowed items-center space-x-1">
    <LanguageIcon class="h-5 w-5 fill-current" />
    <span class="text-s">English</span>
  </div>
  <ul class="text-s text-medium border-softened mb-3.5 flex justify-center space-x-2 border-b pb-3.5">
    <li>
      <a href="#" class="hover:underline">About</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">Contact</a>
    </li>
  </ul>
  <span class="text-softened text-xs">© 2025 Nova Softworks. All rights reserved.</span>
  <ul class="text-softened flex justify-center space-x-1 text-xs">
    <li>
      <a href="#" class="hover:underline">Legal</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">Privacy</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">Terms</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">Cookie policy</a>
    </li>
  </ul>
</div>
