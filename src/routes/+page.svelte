<script>
	import Album from '../components/Album/Album.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import List from '../components/List/List.svelte';
	import Container from '../components/Container/Container.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import { onMount } from 'svelte';
	import { getSections } from '../constants/api';
	let sections = [];
	let title = '';

	const greetings = () => {
		const hour = new Date().getHours();
		if (hour >= 0 && hour < 6) {
			title = 'İyi Geceler';
		}
		if (hour >= 6 && hour < 12) {
			title = 'Günaydın';
		}
		if (hour >= 12 && hour < 18) {
			title = 'Tünaydın';
		}
		if (hour >= 18 && hour < 24) {
			title = 'İyi Akşamlar';
		}
	};
	onMount(() => {
		greetings();
		sections = getSections();
	});
</script>

<Navbar background="#000" />
<Container>
	<!-- <List {title} leading link="/recent-searches">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
			{#each items as { title, cover, url }}
				<Album {title} {cover} size="lg" {url} />
			{/each}
		</div>
	</List> -->

	{#each sections as section}
		<List title={section.data.title.text} link={`/section/${section.uri}`}>
			<div class="grid  md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4 grid-flow-column">
				{#each section.sectionItems.items as sectionItem}
					<Album
						title={sectionItem.content.data.name}
						cover={sectionItem.content.data.images.items[0].sources[0].url}
						caption={sectionItem.content.data.description}
						url={`/playlist/${sectionItem.uri}`}
					/>
				{/each}
			</div>
		</List>
	{/each}
	<Footer />
</Container>
