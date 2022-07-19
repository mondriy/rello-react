import { useCallback, useState } from 'react';

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const setToggle = useCallback(() => {
    setValue((value) => !value);
  }, []);

  return [value, setToggle];
};

export default useToggle;
