<script lang="ts">
    import LanguageIcon from "$lib/assets/icons/language.svelte";
</script>

<div class="flex flex-col items-center space-y-2 text-center">
    <div class="flex items-center space-x-1 text-softened cursor-not-allowed">
        <LanguageIcon class="h-5 w-5 fill-current" />
        <span class="text-s">English</span>
    </div>
    <ul
        class="text-s text-medium flex justify-center space-x-2 border-b border-softened pb-3.5 mb-3.5"
    >
        <li>
            <a href="#" class="hover:underline">About</a>
        </li>
        <li>•</li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    <span class="text-xs text-softened"
        >© 2025 Nova Softworks. All rights reserved.</span
    >
    <ul class="text-xs text-softened flex justify-center space-x-1">
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
