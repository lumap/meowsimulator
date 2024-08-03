<script lang="ts">
    import Modal from "$lib/components/Modal.svelte"
    
    let showModal = false;
</script>

<button on:click={() => showModal = true}>Show Modal</button>

<Modal bind:showModal>
    <h1>Modal Content</h1>
    <p>This is the content of the modal.</p>
    <button on:click={() => showModal = false}>Close Modal</button>
</Modal>
