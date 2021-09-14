import "./App.css";
import Entry from "./components/Entry";
import { UserForm } from "./components/UserForm";
import { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [input, setInput] = useState({});
  const [token, setToken] = useState();
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    fetch("http://localhost:3030/data", { method: "GET", headers: headers })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (!token) {
    return <UserForm setToken={setToken} />;
  }
  return (
    <div className="App">
      {items && items.map((item) => <Entry item={item} key={item.id} />)}
    </div>
  );
}

export default App;
