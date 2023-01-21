<script>
	import Album from '../../components/Album/Album.svelte';
	import Container from '../../components/Container/Container.svelte';
	import Navbar from '../../components/Navbar/Navbar.svelte';
	import SvgNote from '../../assets/SvgNote.svg';
	import Footer from '../../components/Footer/Footer.svelte';
	let navLinks = [
		{
			title: 'Çalma listeleri'
		},
		{
			title: "Podcast'ler"
		},
		{
			title: 'Sanatçılar'
		},
		{
			title: 'Albumler'
		}
	];
</script>

<Navbar>
	<ul class="flex gap-2 ml-6">
		{#each navLinks as { title }, i}
			<li class="navLink {i === 0 && 'active !block'} hidden lg:block">
				<a href="#">{title}</a>
			</li>
		{/each}
	</ul>
</Navbar>
<Container>
	<h1 class="text-2xl font-bold">Çalma Listeleri</h1>
	<div class="grid mt-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
		{#each Array(10) as i, k}
			<Album title={k + 1 + '. Çalma listem'} cover={SvgNote} caption="oluşturan:kadir" url="#" />
		{/each}
	</div>
	<Footer />
</Container>

<style>
	.navLink {
		@apply py-3 px-4 rounded-md text-sm font-bold;
	}

	.active {
		@apply bg-active;
	}
</style>
