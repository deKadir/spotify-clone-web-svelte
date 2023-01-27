<script>
	import SvgClose from '../../assets/SvgClose.svelte';
	import Play from '../Button/Play.svelte';
	export let title,
		cover,
		url,
		caption,
		removable = false,
		onRemove,
		size = 'sm';
</script>

{#if size === 'lg'}
	<div class="group relative">
		<a href={url}>
			<article
				class="flex h-[80px] items-center gap-x-4 bg-white/10 rounded-md hover:bg-white/20 duration-300 group-hover:bg-white/20"
			>
				<img src={cover} alt={title} width="80" />

				<p class="font-bold w-2/4">{title}</p>
			</article>
		</a>
		<Play
			class="opacity-0 group-hover:opacity-100 shadow-md shadow-black duration-300 transition-opacity absolute z-10 top-1/2 -translate-x-1/2 -translate-y-1/2 right-0"
		/>
	</div>
{/if}
{#if size === 'sm'}
	<div class="relative group w-full h-full">
		<a href={url}>
			<article
				class="flex flex-col items-start justify-start bg-white/5 rounded-md  hover:bg-white/20 duration-300 group-hover:bg-white/20 p-4"
			>
				<img src={cover} alt={title} class="w-full" />
				<p class="font-semibold capitalize my-4  line-clamp-1">
					{title}
				</p>
				<p class="text-link line-clamp-2 capitalize">
					{caption}
				</p>
			</article>
		</a>
		{#if removable}
			<button
				class="absolute  top-1 z-10 right-1 p-2 rounded-full bg-footer hover:scale-105 hover:cursor-auto"
				on:click={onRemove}
			>
				<SvgClose class="w-4 h-4" />
			</button>
		{/if}
		<Play
			class="opacity-0 shadow-md shadow-black mt-4  group-hover:opacity-100 duration-300   absolute z-10 top-[35%] group-hover:top-[32%] -translate-x-1/2   right-0"
		/>
	</div>
{/if}
