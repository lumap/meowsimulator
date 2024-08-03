<!--
@component

A simple modal that can display any HTML you throw at it. Comes with animations for opening and closing.

# Usage
- You need to give it a showModal variable to control its visibility.
- Setting it to true or false will toggle the modal.

# Example
```svelte
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
```

-->

<script lang="ts">
    export let showModal: boolean;

    let dialog: HTMLDialogElement;
    let closing = false; // Used to add animations for modal close

    const escToClose = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            e.preventDefault();
            showModal = false;
        }
    };

    $: if (dialog) {
        if (showModal) {
            dialog.showModal();
            window.addEventListener("keydown", escToClose);
        } else {
            closing = true;
            window.removeEventListener("keydown", escToClose);
            setTimeout(() => {
                closing = false;
                showModal = false;
                dialog.close();
            }, 200);
        }
    }
</script>

<dialog
    bind:this={dialog}
    class="p-8 rounded-md"
    class:animate-zoom-in={!closing}
    class:animate-zoom-out={closing}
    class:backdrop:animate-fade-in={!closing}
    class:backdrop:animate-fade-out={closing}
>
    <slot />
</dialog>
