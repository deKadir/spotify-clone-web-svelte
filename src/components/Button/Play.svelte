<button
	on:click={$$restProps.onClick}
	class="bg-primary p-4 rounded-full  hover:scale-110  cursor-default {$$restProps.class}  {$$restProps.md &&
		'scale-[1.2] hover:scale-[1.25]'} "
>
	{#if $$restProps.isPlaying}
		<svg
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			height="16"
			width="16"
			aria-hidden="true"
			viewBox="0 0 24 24"
			data-encore-id="icon"
			class="Svg-sc-ytk21e-0 uPxdw"
			><path
				d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"
			/></svg
		>
	{:else}
		<svg
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			height="16"
			width="16"
			aria-hidden="true"
			viewBox="0 0 16 16"
			data-encore-id="icon"
			class="Svg-sc-ytk21e-0 uPxdw"
			><path
				d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"
			/></svg
		>
	{/if}
</button>
