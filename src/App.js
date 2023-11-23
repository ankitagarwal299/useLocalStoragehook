import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';


//https://www.youtube.com/watch?v=vRDGUUEg_n8
export default function App() {
  const [name, setName] = useLocalStorage('abc', '');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
