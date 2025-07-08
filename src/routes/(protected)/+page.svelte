<script lang="ts">
  let { data } = $props();
  const user = data.user;
</script>

<h1 class="page-title">Welcome back, {user.name.first}!</h1>

<div class="grid grid-cols-1 gap-x-14 gap-y-7 md:grid-cols-2 md:gap-y-14">
  <div class="bg-lighter rounded-sm p-7 shadow-sm">
    <div class="mb-7 flex items-center gap-3">
      <h2 class="text-darker text-lg font-medium">Account Summary</h2>
    </div>

    <div class="text-darker space-y-3.5 text-sm">
      <div class="flex justify-between">
        <span class="text-medium">Status</span>
        <span class="text-darker">{user.verified ? 'Verified' : 'Unverified'}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-medium">Last login</span>
        <span>{user.lastLogin}</span>
      </div>
    </div>
  </div>

  <div class="bg-lighter rounded-sm p-7 shadow-sm">
    <div class="mb-7 flex items-center gap-3">
      <h2 class="text-darker text-lg font-medium">Your information</h2>
    </div>

    <div class="text-darker space-y-3.5 text-sm">
      <div class="flex justify-between">
        <span class="text-medium">Name</span>
        <span class="text-darker">{user.name.first} {user.name.last}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-medium">Email</span>
        <span>{user.email}</span>
      </div>
      <div class="mt-4 text-right">
        <a href="/details" class="text-accent text-sm font-semibold hover:underline"> Edit information </a>
      </div>
    </div>
  </div>
</div>
