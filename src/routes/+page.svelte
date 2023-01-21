<script>
	import Album from '../components/Album/Album.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import List from '../components/List/List.svelte';
	let items = [
		{
			cover: 'https://i.scdn.co/image/ab67616d0000b27332fe4cc67f56cee8d38ebf8f',
			title: 'the hills x where have you been',
			url: '/album/1UbLqdRmVt2y4XAm7961pU'
		},
		{
			cover:
				'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebed30111b433e140bfdd0a038/3/tr/default',
			title: 'Duman',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6'
		},
		{
			cover: 'https://i.scdn.co/image/ab67706f00000002f4951bf7efeffc38247af0d5',
			title: 'Hot Hits',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6'
		},
		{
			cover: 'https://i.scdn.co/image/ab67706f000000028f91caa53f2c282ce84d6d43',
			title: 'Slow Pop',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6'
		},
		{
			cover:
				'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebdc9dcb7e4a97b4552e1224d6/6/tr/default',
			title: 'Daily Mix 6',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6'
		}
	];
	let last = [
		{
			cover: 'https://i.scdn.co/image/ab67616d0000b27332fe4cc67f56cee8d38ebf8f',
			title: 'the hills x where have you been',
			url: '/album/1UbLqdRmVt2y4XAm7961pU',
			caption:
				'Fugiat, quidem. Obcaecati nihil eaque laudantium sed maiores, fugit incidunt earum est rerum possimus veniam debitis delectus eum exercitationem eius sint tempora nostrum voluptas. Ducimus possimus ut sit laborum quod dicta tempore '
		},
		{
			cover:
				'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebed30111b433e140bfdd0a038/3/tr/default',
			title: 'Duman',
			url: '/playlist/37i9dQZF1E34UJx5yqQCF6',
			caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
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
</script>

<div>
	<List title="İyi akşamlar" leading link="/recent-searches">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
			{#each items as { title, cover, url }}
				<Album {title} {cover} size="lg" {url} />
			{/each}
		</div>
	</List>

	<List title="Son dinlediklerine dayanarak" link="/section">
		<div class="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-4 grid-rows-1">
			{#each last as { title, cover, url, caption }}
				<Album {title} {cover} {url} {caption} />
			{/each}
		</div>
	</List>
	<Footer />
</div>
