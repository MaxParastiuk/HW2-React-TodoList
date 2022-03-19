export default function Todo({ todos, removeTodo }) {
	return (
		<>
			<ul style={{ listStyle: "none", padding: "0px" }}>
				{todos.map((el) => (
					<li
						style={
							el.completed
								? { backgroundColor: "green" }
								: { backgroundColor: "yellow" }
						}
						key={el.title}>
						{el.title}
						<button onClick={() => removeTodo(el.id)} className='delete-task'>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
