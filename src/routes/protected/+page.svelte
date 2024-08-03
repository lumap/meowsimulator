<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<p>youhou</p>

<form method="post" use:enhance>
	<button>Sign out</button>
	<p>username: {data.username}</p>
</form>
