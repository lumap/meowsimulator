<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';

	let showModal = false;
</script>

<h1>Hi!</h1>

<button on:click={() => (showModal = true)}>Show Modal</button>

<Modal bind:showModal>
	<h2>Modal Content</h2>
	<p>This is the content of the modal.</p>
	<button on:click={() => (showModal = false)}>Close Modal</button>
</Modal>
