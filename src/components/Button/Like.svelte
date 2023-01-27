<script>
	import SvgHeartFilled from '../../assets/SvgHeartFilled.svelte';
	import SvgHeartEmpty from '../../assets/SvgHeartEmpty.svelte';
	export let status;
</script>

{#if status}
	<SvgHeartFilled {...$$restProps} />
{:else}
	<SvgHeartEmpty {...$$restProps} />
{/if}
