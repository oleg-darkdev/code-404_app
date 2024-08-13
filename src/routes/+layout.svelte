<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});

</script>

<div class=" overflow-hidden">
	<slot />
</div>

<style>
</style>


