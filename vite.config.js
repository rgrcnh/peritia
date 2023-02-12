import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	base: "/peritia/",
	server: {
		fs: {
			allow: ['.']
		}
	}
};

export default config
