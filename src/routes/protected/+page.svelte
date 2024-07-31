<p>youhou</p>
<script lang="ts">
	import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
	export let data: PageData;
</script>

<form method="post" use:enhance>
    <button>Sign out</button>
    <p>username: {data.username}</p>
</form>