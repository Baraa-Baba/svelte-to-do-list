<script>
    import { Todostore } from "../stores/store";
    import Todoitem from "./Todoitem.svelte";
</script>

{#each $Todostore as todo (todo.id)}
    <Todoitem item={todo} />
{/each}
