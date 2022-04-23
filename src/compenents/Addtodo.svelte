<script>
    import { Todostore } from "../stores/store";
    let text = "";
    let displaymessage = false;
    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
            handleAdd();
        }
    });
    const handleAdd = () => {
        const newtodo = {
            id: Math.random(),
            text: text,
        };
        Todostore.update((currentTodo) => {
            return [newtodo, ...currentTodo];
        });
        text = "";
    };
</script>

<input type="text" bind:value={text} name="" id="" />
<button on:click={handleAdd}>add</button>
{#if displaymessage}
    <p class="message">null</p>
{/if}
