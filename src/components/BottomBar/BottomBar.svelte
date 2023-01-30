<script>
	import SvgSuffle from '../../assets/player/SvgSuffle.svelte';
	import SvgPrevious from '../../assets/player/SvgPrevious.svelte';
	import SvgPlay from '../../assets/player/SvgPlay.svelte';
	import SvgLoop from '../../assets/player/SvgLoop.svelte';
	import SvgAddList from '../../assets/player/SvgAddList.svelte';
	import SvgConnectDevice from '../../assets/player/SvgConnectDevice.svelte';
	import SvgLyrics from '../../assets/player/SvgLyrics.svelte';
	import SvgAudioOn from '../../assets/player/SvgAudioOn.svelte';
	import SvgNext from '../../assets/player/SvgNext.svelte';
	import SvgAuoidoOff from '../../assets/player/SvgAuoidoOff.svelte';
	import SvgPause from '../../assets/player/SvgPause.svelte';
	import { playingSong } from '../../stores/stores';
	import { playNextSong, playPreviousSong } from '../../constants/api';

	let duration;
	let volume;
	let player;
	let paused = true;
	let canPlay = false;
	let currentTime = 0;
	let currentSong;
	$: canPlay = Boolean(currentSong?.source && player);

	function handlePlay() {
		if (paused) {
			playSong();
		} else {
			pauseSong();
		}
	}
	function playSong() {
		player.play();
		paused = false;
		playingSong.update((s) => ({ ...s, isPlaying: true }));
	}
	function pauseSong() {
		player.pause();
		paused = true;
		playingSong.update((s) => ({ ...s, isPlaying: false }));
	}

	playingSong.subscribe((song) => {
		if (song?.source && player && song?.isPlaying) {
			player.src = `/src/assets/mp3/${song.source}`;
			currentSong = song;
			player.play();
			paused = false;
		}
		if (song?.source && !song.isPlaying) {
			player.pause();
			paused = true;
		}
	});

	function formatSeconds(seconds) {
		if (!seconds) return '0:00';
		return new Date(Math.round(seconds) * 1000).toISOString().substring(14, 19);
	}
</script>

<div class="h-24 border-t border-1 border-active flex  items-center justify-between px-4">
	<div class="flex-[0.75] flex items-center gap-4">
		{#if currentSong}
			<img src={currentSong.image} width="55" height="55" alt={currentSong.title} />
			<div class>
				<p class="text-sm hover:underline font-semibold cursor-pointer">{currentSong.title}</p>
				<p class="text-xs hover:underline text-link font-semibold cursor-pointer mt-1">
					{currentSong.artist}
				</p>
			</div>
		{/if}
	</div>
	<div class="flex-1 text-xs text-link {!canPlay && 'pointer-events-none opacity-50'}">
		<div class="flex items-center justify-center gap-6">
			<button class="action-btn">
				<SvgSuffle />
			</button>
			<button class="action-btn" on:click={playPreviousSong}>
				<SvgPrevious />
			</button>
			<button
				class="p-2 bg-white rounded-full cursor-default hover:scale-105 active:scale-100"
				on:click={handlePlay}
			>
				{#if paused}
					<SvgPlay />
				{/if}
				{#if !paused}
					<SvgPause />
				{/if}
			</button>
			<button class="action-btn" on:click={playNextSong}>
				<SvgNext />
			</button>
			<button class="action-btn">
				<SvgLoop />
			</button>
		</div>
		<div class="flex items-center gap-2 mt-2 ">
			<span>{formatSeconds(currentTime)}</span>
			<div class="relative bg-[#5E5E5E] h-1 w-full rounded-md group">
				<div
					class="relative  bg-white w-full h-full rounded-md group-hover:bg-primary after:content-'' after:absolute after:w-3.5 after:h-3.5 after:bg-white after:-right-0 after:-top-[5px] after:rounded-full after:opacity-0 group-hover:after:opacity-100"
					style="width:calc({(100 * currentTime) / duration}%);"
				/>
				<input
					bind:value={currentTime}
					type="range"
					class="range w-full absolute inset-0 z-5 opacity-0"
					min="0"
					max={duration}
					step="0.1"
				/>
				<audio
					controls
					class="hidden"
					bind:duration
					bind:this={player}
					bind:currentTime
					bind:volume
				>
					<source type="audio/mp3" />
					Your browser does not support the audio element.
				</audio>
			</div>
			<span>{formatSeconds(duration)}</span>
		</div>
	</div>
	<div class="flex-[0.75] flex justify-end gap-5 overflow-hidden ">
		<button class="action-btn">
			<SvgLyrics />
		</button>
		<button class="action-btn">
			<SvgAddList />
		</button>
		<button class="action-btn">
			<SvgConnectDevice />
		</button>
		<div class="flex  items-center gap-2 ">
			<button class="action-btn" on:click={() => (volume = volume === 0 ? 1 : 0)}>
				{#if volume === 0}
					<SvgAuoidoOff />
				{/if}
				{#if volume !== 0}
					<SvgAudioOn />
				{/if}
			</button>
			<div class="bg-[#5E5E5E] h-1 min-w-[93px] rounded-md relative group ml-2">
				<div
					class="relative bg-white h-full rounded-md group-hover:bg-primary after:content-'' after:absolute after:w-3.5 after:h-3.5 after:bg-white after:right-0 after:-top-[5px] after:rounded-full after:opacity-0 group-hover:after:opacity-100"
					style="width: {volume * 100}%;"
				/>
				<input
					bind:value={volume}
					type="range"
					class="range w-full absolute inset-0 z-1 opacity-0"
					min="0"
					max="1"
					step="0.1"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.action-btn {
		cursor: default;
		opacity: 0.75;
	}
	.action-btn:hover {
		opacity: 1;
	}
</style>
