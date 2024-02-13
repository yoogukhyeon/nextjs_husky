'use client';

import React, { ChangeEventHandler, useCallback, useState } from 'react';

export const Input = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length <= 10) {
      setText(value);
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const el = e.target;
    const maxLength = el.maxLength;

    setTimeout(() => {
      el.setSelectionRange(maxLength, maxLength);
      el.scrollLeft = maxLength * 30;
    }, 0);
  };

  return (
    <div>
      <input onFocus={onFocus} type="text" name="text" value={text} onChange={onChange} maxLength={10} />
    </div>
  );
};
