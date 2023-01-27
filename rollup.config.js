import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
dotenv.config();
import { resolve } from 'path';
const production = !process.env.ROLLUP_WATCH;
export default {
	plugins: [
		replace({
			SPOTIFY_TOKEN: JSON.stringify(process.env.SPOTIFY_TOKEN)
		}),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: (css) => {
				css.write('public/build/bundle.css');
			}
		})
	],
	resolve: {
		alias: {
			process: 'process/browser',
			stream: 'stream-browserify',
			zlib: 'browserify-zlib',
			util: 'util'
		}
	}
};
