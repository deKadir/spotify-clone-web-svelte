<script>
	export let title, link, leading;
</script>

<section {...$$restProps}>
	<div class="flex items-center justify-between {!leading && 'mt-8'}">
		<a href={link}>
			<h1
				class="text-2xl {leading &&
					'!text-3xl'} mb-8 text-white font-bold tracking-tighter hover:underline hover:cursor-pointer"
			>
				{title}
			</h1>
		</a>
		<a href={link} class="text-link uppercase text-xs font-semibold hover:underline"
			>Tümünü Göster</a
		>
	</div>
	<slot />
</section>
