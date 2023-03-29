import { useState } from 'react';

type ReturnValue = [string, (value: string) => void];

export const useInput = (initialText: string = '') => {
  const [value, setValue] = useState<string>(initialText);
  const handleChange = (text: string) => {
    setValue(text);
  };
  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};
