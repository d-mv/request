import axios from 'axios';

import { Optionals } from '../types';
import { buildHeaders, process } from '../tools';

export async function get(url: string, opts?: Partial<Optionals>) {
  await process(() => axios.get(url, { headers: buildHeaders(opts) }), opts);
}
