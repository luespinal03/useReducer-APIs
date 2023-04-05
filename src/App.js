
import "./App.css";
import React, { useState, useReducer } from "react";
import APIReducer from "./Reducers/APIReducer";
import PostCard from "./Components/PostCard";
import NavBar from "./Components/NavBar";
import UserCard from "./Components/UserCard";
import TodoCard from "./Components/TodoCard";
import { v4 as uuidv4 } from "uuid";
function App() {
  const initialState = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ];
  const [APIState, dispatch] = useReducer(APIReducer, initialState);
  const [choice, setChoice] = useState(1);
  const getData = async (request, num, selection) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${request.toLowerCase()}`
    );
    console.log(request);
    dispatch({
      type: `ADD_PAYLOAD_${request}`,
      payload: await response.json(),
    });
    setChoice(num);
  };
  return (
    <div className='App'>
      <NavBar setChoice={setChoice} getData={getData} />
      <div className='container'>
        {APIState.map((API, i) => {
          return choice === 1 ? (
            <PostCard
              id={API.id}
              key={uuidv4()}
              title={API.title}
              userId={API.userId}
              body={API.body}
            />
          ) : choice === 3 ? (
            <UserCard
              id={API.id}
              name={API.name}
              username={API.username}
              email={API.email}
              address={API.address}
              phone={API.phone}
              key={uuidv4()}
            />
          ) : choice === 2 ? (
            <TodoCard
              userId={API.userId}
              id={API.id}
              key={uuidv4()}
              title={API.title}
              completed={API.completed}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}

export default App;