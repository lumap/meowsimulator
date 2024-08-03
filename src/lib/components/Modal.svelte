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
    
    let className = "";
    export { className as class };
    

    let dialog: HTMLDialogElement; // Reference to the dialog element. We'll execute functions on it.
    let closing = false; // Used to add animations for modal close

    const escToClose = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            e.preventDefault(); // By default, it insta closes the dialog. We don't want that.
            showModal = false;
        }
    };

    $: if (dialog) {
        if (showModal) {
            // Open the dialog with the -in animations
            dialog.showModal();
            window.addEventListener("keydown", escToClose);
        } else {
            closing = true; // Swap to the --out animations and start them
            window.removeEventListener("keydown", escToClose);
            setTimeout(() => {
                closing = false; // Reset the animations, in case we need to open the modal again
                dialog.close(); // Actually close it
            }, 200); // 200ms delay set in ./tailwind.config.ts
        }
    }
</script>

<dialog
    bind:this={dialog}
    class="p-8 rounded-md"
    class:className
    class:animate-zoom-in={!closing}
    class:animate-zoom-out={closing}
    class:backdrop:animate-fade-in={!closing}
    class:backdrop:animate-fade-out={closing}
>
    <slot />
</dialog>
