import React, { useState } from "react";
import Header from "./Header.jsx";
import ToDoList from "./ToDoList.jsx";
import data from "./data.json";
//create your first component

const Home = () => {
	const [toDoList, SetToDoList] = useState(data);

	return (
		<div>
			<Header />
			<ToDoList toDoList={toDoList} />
			{toDoList.map((todo) => {
				return <ToDo todo={todo} />;
			})}
		</div>
	);
};

export default Home;
