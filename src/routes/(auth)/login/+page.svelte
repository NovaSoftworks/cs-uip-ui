<script lang="ts">
    import NSLogo from "$lib/assets/logo-single-line.svelte";
    import VisibilityIcon from "$lib/assets/icons/visibility.svelte";
    import VisibilityOffIcon from "$lib/assets/icons/visibility-off.svelte";

    let passwordIsVisible = $state(false);

    function togglePasswordVisibility() {
        passwordIsVisible = !passwordIsVisible;
    }

    let props = $props();

    let emailError = $state("");
    let passwordError = $state("");
</script>

<div class="space-y-7 w-full max-w-100">
    <h1 class="text-2xl text-center text-medium">Welcome back to Nova</h1>

    <div class="bg-lighter shadow-sm rounded-sm py-7 px-3.5 md:px-7">
        <!-- LOGO -->
        <div class="flex justify-center">
            <NSLogo class="md:h-6  fill-medium" />
        </div>

        <form class="mt-14 space-y-7">
            {#if emailError}
                <div class="text-ko mb-1.75">{emailError}</div>
            {/if}
            <input
                type="email"
                inputmode="email"
                autocomplete="email"
                placeholder="Email"
                oninput={() => (emailError = "")}
                class="w-full px-3.5 py-2.5 rounded-sm text-medium placeholder-softened focus:outline-none focus:ring-2 focus:ring-accent {emailError
                    ? 'bg-ko/10 ring-2 ring-ko'
                    : 'bg-light'}"
            />

            {#if passwordError}
                <div class="text-ko mb-1.75">{passwordError}</div>
            {/if}
            <div class="relative">
                <input
                    type={passwordIsVisible ? "text" : "password"}
                    autocomplete="current-password"
                    placeholder="Password"
                    oninput={() => (passwordError = "")}
                    class="w-full px-3.5 py-2.5 rounded-sm text-medium placeholder-softened focus:outline-none focus:ring-2 focus:ring-accent {passwordError
                        ? 'bg-ko/10 ring-2 ring-ko'
                        : 'bg-light'}"
                />
                <button
                    type="button"
                    class="cursor-pointer inset-y-0 right-3.5 absolute fill-softened"
                    onclick={togglePasswordVisibility}
                >
                    {#if passwordIsVisible}
                        <VisibilityIcon class="h-6" />
                    {:else}
                        <VisibilityOffIcon class="h-6" />
                    {/if}
                </button>
            </div>

            <button
                type="submit"
                class="w-full bg-accent text-lighter font-semibold py-2.5 rounded-sm hover:bg-accent/10 hover:text-accent transition cursor-pointer"
                >Log in</button
            >
        </form>

        <div
            class="mt-3.5 space-y-3.5 text-center text-s font-semibold text-accent"
        >
            <a href="/creation" class="hover:underline block">
                Create your Nova account
            </a>
            <a href="/recovery" class="hover:underline block">
                Can't log in?
            </a>
        </div>
    </div>
</div>
