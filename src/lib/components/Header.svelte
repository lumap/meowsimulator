<script lang="ts">
	import { enhance } from "$app/forms";
	import { page } from '$app/stores';
	
	$: isUserLoggedIn = $page.data.isUserLoggedIn;
</script>

<header>
    {#if isUserLoggedIn}
    <form method="post" use:enhance>
        <button>Sign out</button>
    </form>
    {:else}
        <p>hi</p>
    {/if}
</header>