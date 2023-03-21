import { AnyValue, parseStr, RecordObject } from '@mv-d/toolbelt';

import { Optionals } from '../types';

export function buildHeaders(opts?: Partial<Optionals>) {
  const { H, Headers } = opts || {};

  let headers: RecordObject<AnyValue> = {};

  if (H) {
    const parsed = parseStr<RecordObject<unknown>>(H);

    if (parsed.isSome) headers = parsed.value;
  }

  if (Headers) {
    const parsed = parseStr<RecordObject<unknown>>(Headers);

    if (parsed.isSome) headers = parsed.value;
  }

  return headers;
}
