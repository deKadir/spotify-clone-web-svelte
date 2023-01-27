<script>
	import '../app.css';
	import Sidebar from '../components/Sidebar/Sidebar.svelte';
	import BottomBar from '../components/BottomBar/BottomBar.svelte';
	import { scrollTop } from '../stores/stores';
	function handleScroll(e) {
		scrollTop.update(() => e.target.scrollTop);
	}
</script>

<div class="wrapper">
	<Sidebar />
	<main class="w-[calc(100vw-240px)] overflow-x-hidden spotify-scrollbar" on:scroll={handleScroll}>
		<slot />
	</main>
</div>
<BottomBar />
