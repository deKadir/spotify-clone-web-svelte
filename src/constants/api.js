import sectons from './sections.json';
import songs from './songs.json';
import { playingSong } from '../stores/stores';

const getSections = () => {
	return sectons;
};

const getFavoriteSongs = () => {
	return songs;
};
const playPlaylist = () => {
	let song;
	playingSong.update((s) => {
		if (!s) {
			song = { ...songs[0], isPlaying: true };
			return song;
		}
		const nextSong = songs.find((i) => i.id === s.id + 1);
		if (!nextSong) {
			song = { ...songs[0], isPlaying: true };
			return song;
		}

		song = { ...nextSong, isPlaying: true };
		return song;
	});
	return song;
};

const playNextSong = () => {
	let song;
	playingSong.update((s) => {
		if (!s) {
			song = { ...songs[0], isPlaying: true };
			return song;
		}
		const nextSong = songs.find((i) => i.id === s.id + 1);
		if (!nextSong) {
			song = { ...songs[0], isPlaying: true };
			return song;
		}

		song = { ...nextSong, isPlaying: true };
		return song;
	});
	return song;
};

const playPreviousSong = () => {
	let song;
	playingSong.update((s) => {
		if (!s) {
			song = { ...songs[0], isPlaying: true };
			return song;
		}
		const previousSong = songs.find((i) => i.id === s.id - 1);
		if (!previousSong) {
			song = { ...songs[0], isPlaying: true };
			return song;
		}

		song = { ...previousSong, isPlaying: true };
		return song;
	});
};

const playSongById = (id) => {
	const song = songs.find((s) => s.id === id);
	playingSong.set({ ...song, isPlaying: true });
	return song;
};

const playFavoriteSongs = () => {
	playingSong.update((s) => {
		if (s) {
			return { ...s, isPlaying: !s.isPlaying };
		} else {
			return { ...songs[0], isPlaying: true };
		}
	});
};

export {
	getSections,
	getFavoriteSongs,
	playPlaylist,
	playSongById,
	playFavoriteSongs,
	playNextSong,
	playPreviousSong
};
