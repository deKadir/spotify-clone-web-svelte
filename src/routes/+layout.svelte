<script>
	import '../app.css';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Sidebar from '../components/Sidebar/Sidebar.svelte';
	import BottomBar from '../components/BottomBar/BottomBar.svelte';
</script>

<div class="wrapper">
	<Sidebar />
	<main
		class="w-[calc(100vw-240px)] overflow-x-hidden scrollbar scrollbar-thumb-link/40 hover:scrollbar-thumb-link/60 active:scrollbar-thumb-link/80"
	>
		<Navbar />
		<div class="py-6 px-8">
			<slot />
		</div>
	</main>
</div>
<BottomBar />
