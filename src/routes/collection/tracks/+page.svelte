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
	import { getFavoriteSongs } from '../../../constants/api';

	let hover;
	let stickyNav;
	let favoriteSongs = [];

	function getElapsedDays(date) {
		const difference = Date.now() - new Date(date).getTime();
		const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
		return TotalDays;
	}

	onMount(() => {
		scrollTop.subscribe((value) => {
			if (value >= 393) {
				stickyNav?.classList?.add('bg-active');
			} else {
				stickyNav?.classList?.remove('bg-active');
			}
		});
		favoriteSongs = getFavoriteSongs();
	});
</script>

<Navbar background="rgb(33,23,64)" let:isScrolled>
	{#if isScrolled}
		<Play />
		<h1 class="text-2xl font-bold">Beğenilen Şarkılar</h1>
	{/if}
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
						{favoriteSongs.length} şarkı
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
			<div
				class="grid grid-cols-[6fr_4fr_4fr_1fr]  gap-x-6  uppercase text-sm text-link font-semibold w-full"
			>
				<div># &nbsp;&nbsp; Başlık</div>
				<div>Album</div>
				<div>Tarih eklendi</div>
				<div class=""><SvgClock /></div>
			</div>
		</Container>
	</div>
	<Container class="pt-0">
		<div>
			{#each favoriteSongs as song, i}
				<div
					class="flex py-2 hover:bg-active rounded-md cursor-pointer duration-100 group"
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
						class="grid grid-cols-[6fr_4fr_4fr_1fr] items-center gap-x-6  pr-2 text-sm text-link font-semibold w-full"
					>
						<div>
							<div class="flex w-full ">
								<img
									src={song.image}
									alt=""
									width="40"
									height="40"
									class="mr-4 w-[40px] h-[40px]"
								/>
								<div>
									<p class="text-white mb-1 text-base">{song.title}</p>
									<span class="line-clamp-1">{song.artist}</span>
								</div>
							</div>
						</div>
						<div>
							<a href="#" class="hover:underline group-hover:text-white">
								{song.artist}
							</a>
						</div>
						<div>{getElapsedDays(song.added)} gün önce</div>
						<div class="flex items-center gap-x-8">
							<Like status />
							<div>
								{Math.floor(song.duration / 60) + ':' + ('0' + (song.duration % 60)).slice(-2)}
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
