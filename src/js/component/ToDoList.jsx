import React from "react";

export default function ToDoList() {
	return (
		<div className="card">
			<div className="card-body p-5">
				<form className="d-flex justify-content-center align-items-center mb-4">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="New Item"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
						/>
						<button
							className="btn btn-outline-secondary"
							type="button"
							id="button-addon2">
							Add
						</button>
						<ul></ul>
					</div>
				</form>
			</div>
		</div>
	);
}
