import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import baseConfig from '../../vite.config';

export default defineConfig({
	...baseConfig,
	build: {
		...baseConfig.build,
		lib: {
			...baseConfig.build.lib,
			entry: resolve(__dirname, './src/index.ts'),
			name: '@jordicasesnoves-ui/flex',
		},
	},
});
