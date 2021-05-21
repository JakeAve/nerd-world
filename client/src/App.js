import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch("/api/info");
      const json = await res.json();
      setEntries(json);
    };
    getInfo();
  }, []);

  const Entry = (entryProps) => {
    return (
      <div>
        {entryProps.lastName}, {entryProps.firstName} was born on{" "}
        {new Date(entryProps.dateOfBirth).toDateString()}
      </div>
    );
  };

  const content = entries.length
    ? entries.map((e, index) => <Entry key={index} {...e} />)
    : "No hay nada de base de datos";

  return (
    <div class="App">
      <h1>Información de base de datos:</h1>
      <div>{content}</div>
    </div>
  );
}

export default App;
