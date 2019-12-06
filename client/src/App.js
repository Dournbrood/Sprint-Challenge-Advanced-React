import React from 'react';
import './App.css';
import Display from './components/Display';
import { useLocalStorage } from './hooks/useLocalStorage';

const initialDataValues = [[{
  country: "Waiting on API response!",
  id: 0,
  name: "Don't know yet",
  searches: "Absolutely no idea."
}]];

function App() {
  const [lastData, setLastData] = useLocalStorage("lastData", initialDataValues);

  const setData = (data) => {
    setLastData(data);
  }

  return (
    <div className="App">
      <Display lastData={lastData} setLastData={setData} />
    </div>
  );
}

export default App;
