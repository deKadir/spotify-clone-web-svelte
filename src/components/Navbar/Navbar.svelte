<script>
	import Previous from '../../assets/Previous.svelte';
	import Next from '../../assets/Next.svelte';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';
	import User from '../../assets/User.svelte';
	import Chevron from '../../assets/Chevron.svelte';
	import Upgrade from '../../assets/Upgrade.svelte';
</script>

<nav class="h-[3.85rem] flex items-center justify-between px-8">
	<!-- Left side -->
	<div class="flex items-center gap-x-4">
		<div class="flex gap-x-4">
			<div
				class="p-2 bg-black rounded-full opacity-60 cursor-pointer"
				on:click={() => history.back()}
			>
				<Previous />
			</div>
			<div
				class="p-2 bg-black rounded-full opacity-60 cursor-pointer"
				on:click={() => history.forward()}
			>
				<Next />
			</div>
		</div>
		<slot />
	</div>
	<!-- Profile Menu -->
	<Menu class="relative" let:open>
		<MenuButton
			class="flex items-center bg-black/90 rounded-full hover:bg-active text-white font-semibold text-sm gap-2 pr-2 {open &&
				'bg-active'}"
		>
			<div class="p-[.35rem] bg-white/50 rounded-full flex items-center">
				<User />
			</div>
			kadir
			<Chevron class={open && 'rotate-180'} />
		</MenuButton>
		<MenuItems
			class="absolute top-full mt-2 z-[999] right-0 bg-active p-1 flex flex-col min-w-[196px]"
		>
			<MenuItem class="p-2 text-sm hover:bg-link/20 flex justify-between">
				<a class="h-full w-full cursor-default" href="/account">Hesap</a>
				<Upgrade />
			</MenuItem>
			<MenuItem class="p-2 text-sm hover:bg-link/20 flex justify-between">
				<a class="h-full w-full cursor-default" href="/profile">Profil</a>
			</MenuItem>
			<MenuItem class="p-2 text-sm hover:bg-link/20 flex justify-between">
				<a class="h-full w-full cursor-default" href="/premium">Premium'a yükselt</a>
				<Upgrade />
			</MenuItem>
			<MenuItem class="p-2 text-sm hover:bg-link/20 flex justify-between">
				<a class="h-full w-full cursor-default" href="/settings">Ayarlar</a>
			</MenuItem>
			<MenuItem class="p-2 text-sm hover:bg-link/20 flex justify-between border-t border-link/20">
				<span class="block h-full w-full cursor-default">Oturumu kapat</span>
			</MenuItem>
		</MenuItems>
	</Menu>
</nav>
