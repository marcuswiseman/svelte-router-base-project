<script>
    let count = 0;

    function handleClick() {
        count = count + 1;
    }
</script>

<button on:click={handleClick}>{count}</button>