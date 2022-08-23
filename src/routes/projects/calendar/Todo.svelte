<script lang="ts">
import Addnew from '../todo/_addnew.svelte'

export const day = ''

export let openTodo = false

function clickOutside(node: any) {
    const handleClick = (event: Event) => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('click_outside', node));
        }
    };
    document.addEventListener('click', handleClick, true);
    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}
</script>

<div 
	use:clickOutside
	on:click_outside={() => (openTodo = false)}
	class="popup">
    <Addnew />
</div>


<style>
    .popup {
        border: 2px solid black;
        box-shadow: 2px 2px 0 black;
        width: 340px;
        position: absolute;
        top: calc(50vh - 40px);
        left: calc(50vw - 188px);
        background-color: #e5e7fd;
        padding: 1rem;
    }
</style>