<script>
	export let activeRoute;
	export let props;
</script>

<svelte:component this={activeRoute.getView()} {props}/>