<script lang="ts">
  import LanguageIcon from '$lib/assets/icons/language.svelte';

  import { t } from '$lib/translations';
  import LanguageSwitcher from './language-switcher.svelte';
</script>

<div class="flex flex-col items-center space-y-2 text-center">
  <LanguageSwitcher />
  <ul class="text-s text-medium border-softened mb-3.5 flex justify-center space-x-2 border-b pb-3.5">
    <li>
      <a href="#" class="hover:underline">{$t('footer.about')}</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">{$t('footer.contact')}</a>
    </li>
  </ul>
  <span class="text-softened text-xs">{$t('footer.copyright')}</span>
  <ul class="text-softened flex justify-center space-x-1 text-xs">
    <li>
      <a href="#" class="hover:underline">{$t('footer.legal')}</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">{$t('footer.privacy')}</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">{$t('footer.terms')}</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">{$t('footer.accessibility')}</a>
    </li>
    <li>•</li>
    <li>
      <a href="#" class="hover:underline">{$t('footer.cookies')}</a>
    </li>
  </ul>
</div>
