import { useEffect, useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

interface itemProps {
  id: number;
  content: string;
}

function App() {
  const [items, setItems] = useState<itemProps[]>([]);

  // get items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5003/todos");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems(); // 從 postgres database 獲取 items
  });

  const deleteItem = (id: number) => {
    try {
      const response = fetch("http://localhost:5003/todos/" + id, {
        method: "DELETE",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (item: string) => {
    try {
      const body = { content: item };
      const response = fetch("http://localhost:5003/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="container">
      <header className="row justify-content-center">
        <h1 className="text-center mt-4 mb-4">Todolist</h1>
      </header>

      <div className="row justify-content-center">
        <div className="col-6">
          <Form addItem={addItem}></Form>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <List items={items} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
