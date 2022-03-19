import React, { Component, useState } from "react";

export default function Form(props) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random * 1000),
			title: input,
		});

		setInput("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={input}
					autoFocus
					className='input-add'
					onChange={handleChange}
					placeholder='enter something'
				/>
				<button className='add-btn'>create</button>
			</form>
		</>
	);
}
