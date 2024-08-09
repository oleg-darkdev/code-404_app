<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
  	import { Header } from '$lib/widgets';

</script>

<Header />

<main class=" overflow-hidden">
	<slot />
</main>

<style>
</style>


