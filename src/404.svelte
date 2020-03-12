<script>
    export let props;
</script>

<main>
    <h1>{props.title}</h1>
    <p>{@html props.message}</p>
</main>