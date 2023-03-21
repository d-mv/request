import { Command } from 'commander';

import { version } from '../../package.json';
import { get } from '../actions';

const program = new Command();

program.name('request').description('REST API request tool').version(version);

program
  .command('get <url>')
  .description('GET request')
  .option('-H <headers>, --Headers <headers>', 'optional headers')
  .option('-v, --verbose', 'verbose mode')
  .action(get);

export function parse() {
  program.parse(process.argv);
}
