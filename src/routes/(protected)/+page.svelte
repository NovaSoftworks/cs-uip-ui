<script lang="ts">
  let { data } = $props();
  const user = data.user;

  import { t } from '$lib/translations';
</script>

<h1 class="page-title">{$t('overview.welcome_back', { name: user.name.first } as any)}</h1>

<div class="grid grid-cols-1 gap-x-14 gap-y-7 md:grid-cols-2 md:gap-y-14">
  <div class="bg-lighter rounded-sm p-7 shadow-sm">
    <div class="mb-7 flex items-center gap-3">
      <h2 class="text-darker text-2xl font-medium">{$t('overview.summary.title')}</h2>
    </div>

    <div class="text-darker space-y-3.5 text-sm">
      <div class="flex justify-between">
        <span class="text-medium">{$t('overview.summary.status')}</span>
        <span class="text-darker"
          >{user.verified ? $t('overview.summary.status.verified') : $t('overview.summary.status.unverified')}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-medium">{$t('overview.summary.last_login')}</span>
        <span>{user.lastLogin}</span>
      </div>
    </div>
  </div>

  <div class="bg-lighter rounded-sm p-7 shadow-sm">
    <div class="mb-7 flex items-center gap-3">
      <h2 class="text-darker text-2xl font-medium">{$t('overview.info.title')}</h2>
    </div>

    <div class="text-darker space-y-3.5 text-sm">
      <div class="flex justify-between">
        <span class="text-medium">{$t('overview.info.name')}</span>
        <span class="text-darker">{user.name.first} {user.name.last}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-medium">{$t('overview.info.email')}</span>
        <span>{user.email}</span>
      </div>
      <div class="mt-4 text-right">
        <a href="/details" class="text-accent text-sm font-semibold hover:underline">{$t('overview.info.edit')}</a>
      </div>
    </div>
  </div>
</div>
