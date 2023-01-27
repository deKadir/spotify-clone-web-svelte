import sectons from './sections.json';
import songs from './songs.json';
const getSections = () => {
	return sectons;
};

const getFavoriteSongs = () => {
	return songs;
};

export { getSections, getFavoriteSongs };
