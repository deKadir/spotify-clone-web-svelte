<script>
	import List from '../../components/List/List.svelte';
	import Album from '../../components/Album/Album.svelte';
	import Footer from '../../components/Footer/Footer.svelte';
	import Navbar from '../../components/Navbar/Navbar.svelte';
	import Search from '../../assets/SvgSearch.svelte';
	import Container from '../../components/Container/Container.svelte';

	let recents = [
		{
			cover: 'https://i.scdn.co/image/ab67616d0000b27332fe4cc67f56cee8d38ebf8f',
			title: 'the hills x where have you been',
			url: '/album/1UbLqdRmVt2y4XAm7961pU',
			caption:
				'Fugiat, quidem. Obcaecati nihil eaque laudantium sed maiores, fugit incidunt earum est rerum possimus veniam debitis delectus eum exercitationem eius sint tempora nostrum voluptas. Ducimus possimus ut sit laborum quod dicta tempore '
		},

		{
			cover: 'https://i.scdn.co/image/ab67706f00000002f4951bf7efeffc38247af0d5',
			title: 'Hot Hits',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6',
			caption: 'possimus veniam debitis delectus eum exercitationem eius'
		},
		{
			cover:
				'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebed30111b433e140bfdd0a038/3/tr/default',
			title: 'Duman',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6',
			caption: 'Ducimus possimus ut sit laborum quod dicta tempore'
		},
		{
			cover: 'https://i.scdn.co/image/ab67706f00000002f4951bf7efeffc38247af0d5',
			title: 'Hot Hits',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6',
			caption: 'tempora nostrum voluptas. illo quia exercitationem'
		},
		{
			cover: 'https://i.scdn.co/image/ab67706f000000028f91caa53f2c282ce84d6d43',
			title: 'Slow Pop',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6',
			caption: 'Obcaecati nihil eaque laudantium sed maiores, fugit incidunt'
		},
		{
			cover:
				'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebdc9dcb7e4a97b4552e1224d6/6/tr/default',
			title: 'Daily Mix 6',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6',
			caption: 'quibusdam vero perferendis, est culpa alias.'
		}
	];
	let genres = [
		{
			title: "Podcast'ler",
			cover: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
			color: '#E13300'
		},
		{
			title: 'Senin için hazırlandı',
			cover: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
			color: '#1F3265'
		},
		{
			title: 'Yeni çıkanlar',
			cover: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
			color: '#E9115A'
		},
		{
			title: 'Pop',
			cover: 'https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768',
			color: '#158B08'
		},
		{
			title: 'Hip Hop',
			cover: 'https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1',
			color: '#BC5900'
		},
		{
			title: 'Ruh Hali',
			cover: 'https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354',
			color: '#E0118D'
		},
		{
			title: 'Populer',
			cover: 'https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd',
			color: '#B02897'
		},
		{
			title: 'Listeler',
			cover:
				'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
			color: '#8C67AA'
		}
	];
</script>

<Navbar background="#000">
	<!-- Searchbar -->
	<div class="h-[40px]  px-3 bg-white rounded-full min-w-[360px] flex items-center">
		<label for="search">
			<Search />
		</label>
		<input
			type="search"
			class="h-ful w-full px-3 py-1 text-sm text-active outline-none font-semibold"
			id="search"
			placeholder="Ne dinlemek istiyorsun?"
		/>
	</div>
</Navbar>
<Container>
	<List title="Yakındaki Aramalar" leading link="/recent-search">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-4">
			{#each recents as { title, cover, url }}
				<Album {title} {cover} caption="sanatçı" {url} removable />
			{/each}
		</div></List
	>
	<h1 class="text-2xl font-bold mt-2 mb-4">Hepsine göz at</h1>
	<div class="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-8">
		{#each genres as { title, cover, color }}
			<a href="#">
				<article
					style="background-color:{color};"
					class="relative aspect-square rounded-md p-2 overflow-hidden"
				>
					<h1 class="text-2xl font-bold">{title}</h1>
					<img
						src={cover}
						alt={title}
						class="absolute -right-4 bottom-0 rotate-[25deg] w-[90px] aspect-square overflow-hidden"
					/>
				</article>
			</a>
		{/each}
	</div>
	<Footer />
</Container>
