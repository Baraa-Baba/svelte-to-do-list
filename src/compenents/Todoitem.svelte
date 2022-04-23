<script>
    export let item;
    let todotextedit;
    import { Todostore } from "../stores/store";
    let isedited = false;
    const handledelete = (id) => {
        Todostore.update((currentTodolist) => {
            return currentTodolist.filter((item) => item.id != id);
        });
    };
</script>

<div class="todoitem">
    <input
        bind:this={todotextedit}
        class="todotext"
        disabled={!isedited}
        on:change={isedited ? todotextedit.focus() : null}
        value={item.text}
    />
    <label>
        <input type="checkbox" name="" id="check" />
        <svg
            id="check-icon"
            height="30"
            color
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            ><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path
                id="check-icon"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            /></svg
        >
    </label>
    <button class="delete" on:click={() => handledelete(item.id)}>X</button>
</div>

<style>
    .todoitem {
        color: white;
        background-color: rgb(26, 0, 143);
        width: fit-content;
        margin: 0 auto 1rem auto;
        border-radius: 1rem;
    }
    .todotext {
        all: unset;
    }
    .delete {
        background-color: red;
        height: 100%;
        border-radius: 1rem;
    }
    #check {
        display: none;
    }
    #check-icon {
        width: 30px;
        height: 30px;
        display: inline-block;
    }
    #check:checked ~ #check-icon {
        fill: green;
    }
    label {
        display: inline-block;
    }
</style>
