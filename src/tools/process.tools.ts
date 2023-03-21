import { AnyValue, logger, getMessageFromError } from '@mv-d/toolbelt';
import { AxiosError } from 'axios';

import { Optionals } from '../types';

export async function process(fn: () => Promise<AnyValue>, opts?: Partial<Optionals>) {
  const { v, verbose } = opts || {};

  try {
    const result = await fn();

    if (v || verbose)
      logger.dir({
        status: result.status,
        headers: result.headers,
        statusText: result.statusText,
        data: result.data,
      });
    else logger.dir(result.data);
  } catch (err) {
    if (v || verbose) {
      const error = err as AxiosError;

      logger.error({
        error: error.message,
        stack: error.stack,
        code: error.code,
        // @ts-ignore -- temp
        errno: error.errno,
        // @ts-ignore -- temp
        syscall: error.syscall,
        name: error.name,
        message: error.message,
      });
    } else logger.error(getMessageFromError(err));
  }
}
