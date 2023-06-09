/* eslint-disable no-console */
import { build } from 'esbuild';


build({
  entryPoints: ['./src/index.ts'],
  // external: ['swagger-ui-dist'],
  outdir: './dist',
  // plugins: [esbuildPluginPino({ transports: ['pino-pretty'] })],
  minify: true,
  bundle: true,
  platform: 'node',
  target: 'node18',
})
  .then(() => {
    console.log('Build is done.');
    return 'OK';
  })
  .catch(reason => {
    console.log(`Build caught error:`);
    console.dir(reason, { depth: 15, color: true });
    throw new Error(reason);
  });
