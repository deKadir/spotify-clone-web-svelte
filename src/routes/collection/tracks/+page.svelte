<script>
	import SvgClock from '../../../assets/SvgClock.svelte';
	import SvgFavoriteRgb from '../../../assets/SvgFavoriteRGB.svelte';
	import Like from '../../../components/Button/Like.svelte';
	import Play from '../../../components/Button/Play.svelte';
	import Container from '../../../components/Container/Container.svelte';
	import Navbar from '../../../components/Navbar/Navbar.svelte';
	import SvgEllipsis from '../../../assets/SvgEllipsis.svelte';
	import SvgPlayFilled from '../../../assets/SvgPlayFilled.svelte';
	import Footer from '../../../components/Footer/Footer.svelte';
	import { scrollTop } from '../../../stores/stores';
	import { onMount } from 'svelte';
	let hover;
	let stickyNav;

	onMount(() => {
		scrollTop.subscribe((value) => {
			if (value >= 393) {
				stickyNav?.classList?.add('bg-active');
			} else {
				stickyNav?.classList?.remove('bg-active');
			}
		});
	});

	let songs = [
		{
			cover: 'https://i.scdn.co/image/ab67616d0000485158d2bf7ae892171800d3b51c',
			name: 'Yaşım çocuk',
			author: 'Mabel Matiz',
			album: 'Yaşım çocuk',
			date: '1 gün önce',
			duration: '3:35'
		},
		{
			cover: 'https://i.scdn.co/image/ab67616d000048518ee4444e81bec18832746c5d',
			name: 'Yarem',
			author: 'Norm Ender',
			album: 'Aura',
			date: '2 gün önce',
			duration: '4:10'
		},
		{
			cover: 'https://i.scdn.co/image/ab67616d0000485117afafa6b7cccfe930e2002d',
			name: 'Firuze',
			author: 'Sezen Aksu',
			album: 'Firuze',
			date: '4 gün önce',
			duration: '2:43'
		},
		{
			cover: 'https://i.scdn.co/image/ab67616d0000485119a949e3e4bd668fc41106fc',
			name: 'Helal Olsun',
			author: 'Duman',
			album: 'Duman 1',
			date: '1 hafta önce',
			duration: '2:43'
		},
		{
			cover: 'https://i.scdn.co/image/ab67616d000048511773d8c5158bab36592b24cb',
			name: 'Dağlar dağlar ',
			author: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, praesentium.',
			album: 'Sen Ağlama',
			date: '2 hafta önce',
			duration: '3:27'
		}
	];
</script>

<Navbar background="rgb(33,23,64)">
	<Play />
	<h1 class="text-2xl font-bold">Beğenilen Şarkılar</h1>
</Navbar>
<div class="h-[340px]" style="background-color: rgba(80, 56, 160,0.7);">
	<Container on:scroll={(e) => console.log(e)}>
		<div class="flex gap-6 items-end">
			<SvgFavoriteRgb
				class="flex-auto max-w-[232px] !p-[5vw] opacity-80 md:w-[192px] self-center shadow-xl"
			/>
			<div class="flex flex-col h-full">
				<p class="uppercase text-xs font-medium">Çalma Listesi</p>
				<h1 class=" text-[2rem]  md:text-[3rem] lg:text-[5.5rem] font-bold mb-2 -mt-2">
					Beğenilen Şarkılar
				</h1>

				<div class="text-sm mt-auto">
					<a href="#" class="font-bold hover:underline">kadir</a>
					<span
						class="relative before:absolute before:w-1 before:h-1 before:bg-white before:top-[50%] before:-left-2 before:rounded-full ml-2"
					>
						35 şarkı
					</span>
				</div>
			</div>
		</div>
	</Container>
</div>
<div class="relative">
	<div
		class=" absolute top-0 h-[232px] w-full pointer-events-none"
		style="background: linear-gradient(rgba(80, 56, 160,.5),rgba(0,0,0,.05));"
	/>
	<Container class="pt-7">
		<Play md />
	</Container>
	<div bind:this={stickyNav} class="border-b border-active mb-6 sticky top-[60px]">
		<Container class="flex !py-2">
			<div class="uppercase text-sm text-link font-semibold mr-4">#</div>
			<div
				class="grid grid-cols-[6fr_4fr_4fr_1fr]  gap-x-6  uppercase text-sm text-link font-semibold w-full"
			>
				<div>Başlık</div>
				<div>Album</div>
				<div>Tarih eklendi</div>
				<div class=""><SvgClock /></div>
			</div>
		</Container>
	</div>
	<Container class="pt-0">
		<div>
			{#each songs as song, i}
				<div
					class="flex py-2 hover:bg-active rounded-md cursor-grab duration-100 group"
					on:mouseenter={() => (hover = i)}
					on:mouseleave={() => (hover = -1)}
				>
					<div
						class=" text-sm text-link font-semibold my-auto mr-3 w-5 flex items-center justify-center"
					>
						{#if hover === i}
							<SvgPlayFilled class="w-4" />
						{:else}
							{i + 1}
						{/if}
					</div>
					<div
						class="grid grid-cols-[6fr_4fr_4fr_1fr] items-center gap-x-6  text-sm text-link font-semibold w-full"
					>
						<div class="cols-autop">
							<div class="flex w-full ">
								<img
									src={song.cover}
									alt=""
									width="40"
									height="40"
									class="mr-4 w-[40px] h-[40px]"
								/>
								<div>
									<p class="text-white mb-1 text-base">{song.name}</p>
									<span class="line-clamp-1">{song.author}</span>
								</div>
							</div>
						</div>
						<div>
							<a href="#" class="hover:underline group-hover:text-white">
								{song.album}
							</a>
						</div>
						<div>{song.date + ' eklendi'}</div>
						<div class="flex items-center gap-x-8">
							<Like status />
							<div>
								{song.duration}
							</div>

							<SvgEllipsis class="cursor-default {i === hover ? 'opacity-100' : 'opacity-0'}" />
						</div>
					</div>
				</div>
			{/each}
		</div>
		<Footer />
	</Container>
</div>
