import { useState } from 'react';

//This implementation avoid using useEffect

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      let savedValue = JSON.parse(localStorage.getItem(key));

      //Case1: if key not in local storage, then save it
      if (savedValue == null) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
      //Case2: if key is in local storage, retrieve it.
      return savedValue;

      //Case3: value in local storage is corrupted , then save it
    } catch (err) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  function setValueAndLocalStorage(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setStoredValue(newValue);
  }

  return [storedValue, setValueAndLocalStorage];
}
