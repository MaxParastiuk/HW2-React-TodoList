import React, { Component, useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{
			id: "14",
			title: "Сделать утреннюю зарядку",
			completed: true,
		},
		{
			id: "16",
			title: "Купить продукты",
			completed: false,
		},
		{
			id: "18",
			title: "Сделать домашнее задание",
			completed: false,
		},
		{
			id: "19",
			title: "Сходить в кино",
			completed: true,
		},
		{
			id: "20",
			title: "Позвонить другу",
			completed: false,
		},
	]);

	const addTodo = (todo) => {
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removeArr);
	};

	return (
		<>
			<Form onSubmit={addTodo} />
			<Todo todos={todos} removeTodo={removeTodo} />
		</>
	);
}
