<script lang="ts">
  import Card from '$lib/components/account/card.svelte';
  import MailIcon from '$lib/assets/icons/mail.svelte';
  import SecurityIcon from '$lib/assets/icons/security.svelte';
  import SettingsIcon from '$lib/assets/icons/settings.svelte';
  import TimeIcon from '$lib/assets/icons/time.svelte';

  import { formatDate } from '$lib/formatting';
  import { supportedLocales } from '$lib/config/locales';

  import { t } from '$lib/translations';

  const { data } = $props();
  const { locale, firstName, isVerified, passwordLastUpdateTime, lastLoginTime, accountCreationTime, session } = data;

  const languageString = supportedLocales.find(l => l.locale === locale)?.displayName;
</script>

<svelte:head>
  <title>{$t('pages.overview.title')} | Nova Softworks</title>
</svelte:head>

<h1 class="page-title">{$t('pages.overview.heading', { name: firstName } as any)}</h1>
<h2 class="page-subtitle mb-7">{$t('pages.overview.heading_2')}</h2>

<div>
  <div class="gris-cols-1 mb-3.5 grid gap-3.5 2xl:grid-cols-3">
    <Card icon={MailIcon}>
      <span slot="title">{$t('pages.overview.email.title')}</span>
      {$t('pages.overview.email.status')}: {$t(
        isVerified ? 'pages.overview.email.verified' : 'pages.overview.email.unverified'
      ).toLowerCase()}
      <span slot="cta">
        <a href="/details" class="text-accent font-semibold hover:underline">
          {$t('pages.overview.email.cta')}
        </a>
      </span>
    </Card>
    <Card icon={SecurityIcon}>
      <span slot="title">{$t('pages.overview.password.title')}</span>
      {$t('pages.overview.password.last_changed')}: {formatDate(passwordLastUpdateTime, locale)}
      <span slot="cta">
        <a href="/details/edit" class="text-accent font-semibold hover:underline">
          {$t('pages.overview.password.cta')}
        </a>
      </span>
    </Card>
    <Card icon={SettingsIcon}>
      <span slot="title">{$t('pages.overview.settings.title')}</span>
      {$t('pages.overview.settings.language')}: {languageString}
      <span slot="cta">
        <a href="/settings" class="text-accent font-semibold hover:underline">
          {$t('pages.overview.settings.cta')}
        </a>
      </span>
    </Card>

    <!--<Card title="Password" icon={SecurityIcon}>Test</Card>
    <Card title="Settings" icon={SettingsIcon}>Test</Card>-->
  </div>

  <div class="grid grid-cols-1 gap-3.5 md:grid-cols-2">
    <div class="bg-lighter rounded-sm p-4 shadow-sm"></div>
    <Card icon={TimeIcon}>
      <span slot="title">{$t('pages.overview.activity.title')}</span>
      {$t('pages.overview.activity.last_login')}: {formatDate(lastLoginTime, locale)}<br />
      {$t('pages.overview.activity.account_creation')}: {formatDate(accountCreationTime, locale)}
      <span slot="cta">
        <span class="text-accent font-semibold hover:underline">
          {$t('pages.overview.activity.cta')}
        </span>
      </span>
    </Card>
  </div>
</div>
