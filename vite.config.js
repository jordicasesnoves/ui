import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

/* 
	Base config used by packages
*/
export default defineConfig({
	plugins: [react(), dts()],
	build: {
		lib: {
			formats: ['es'],
			fileName: () => 'index.js',
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name?.endsWith('.css')) {
						return 'index.css';
					}
					return '[name].[hash][extname]';
				},
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
