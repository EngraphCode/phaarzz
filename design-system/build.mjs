/**
 * Builds @phaarzz/ui to dist/ — the artifact the Claude Design sync consumes.
 *
 * React and react-dom stay external: the design agent's runtime supplies them,
 * and bundling a second copy would break hooks across the boundary.
 */
import { build } from 'esbuild';

await build({
	entryPoints: ['src/index.ts'],
	bundle: true,
	format: 'esm',
	target: 'es2022',
	jsx: 'automatic',
	outfile: 'dist/index.js',
	external: ['react', 'react-dom', 'react/jsx-runtime'],
	loader: { '.css': 'css' },
	sourcemap: true,
	logLevel: 'info',
});
console.log('built dist/index.js');
