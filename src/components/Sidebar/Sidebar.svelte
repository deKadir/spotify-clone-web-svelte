<script>
	import Logo from '../../assets/Logo.svelte';
	import { page } from '$app/stores';
	import Home from '../../assets/Home.svelte';
	import Search from '../../assets/SvgSearch.svelte';
	import BookShelf from '../../assets/BookShelf.svelte';
	import FavoriteRgb from '../../assets/FavoriteRGB.svelte';
	import Plus from '../../assets/PlusContained.svelte';
	import Download from '../../assets/Download.svelte';

	const navItems = [
		{ text: 'Ana sayfa', link: '/', logo: Home },
		{ text: 'Ara', link: '/search', logo: Search },
		{ text: 'Kitaplığın', link: '/collection', logo: BookShelf }
	];
</script>

<div class="!w-[240px] flex flex-col pt-6 bg-black">
	<Logo class="max-w-[130px] max-h-[40px] min-w-[130px] min-h-[40px] ml-6" />
	<!-- Nav -->
	<nav class="px-2 pt-6">
		<ul class="flex flex-col">
			{#each navItems as { text, logo: NavLogo, link }}
				<li>
					<a
						class="h-10 flex items-center text-sm group gap-x-4 font-bold text-link rounded duration-300 hover:text-white px-4 "
						href={link}
						class:active={$page.url.pathname === link}
					>
						<NavLogo
							class="fill-link  group-hover:fill-white {$page.url.pathname === link &&
								'fill-white'}"
						/>
						{text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<!-- actions -->
	<div class="pt-6 border-b border-footer mx-6 pb-2 font-bold ">
		<a
			class="text-sm flex items-center gap-x-4  py-3 cursor-pointer text-link  hover:text-white transition-duration-300"
			href="#"
		>
			<Plus />
			Çalma listesi oluştur</a
		>
		<a
			href="#"
			class=" text-sm flex items-center gap-x-4 py-3 cursor-pointer text-link   hover:text-white transition-duration-300"
		>
			<FavoriteRgb class="w-5 h-5" />
			Beğenilen şarkılar</a
		>
	</div>
	<!-- Playlists -->
	<ul class="mx-6 pt-1 overflow-auto">
		{#each Array(5) as _, k}
			<li class="py-1">
				<a
					class="text-link text-sm font-medium cursor-pointer hover:text-white {k === 0 &&
						'active'}"
					href="#"
				>
					{k + 1}. Çalma listem
				</a>
			</li>
		{/each}
	</ul>
	<a
		href="#"
		class="flex items-center gap-x-5 px-4 text-sm py-2  mt-auto font-semibold text-link hover:text-white "
	>
		<Download />
		Uygulamayı Yükle
	</a>
</div>

<style>
	.active {
		@apply text-white fill-white;
	}
</style>
