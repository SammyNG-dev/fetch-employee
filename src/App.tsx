import { useState } from "react";
import "./App.css";
import EmployeeCard from "./Components/EmployeeCard";

function App() {
	const [employee, setEmployee] = useState(null);

	const getEmployee = () => {
		// Send the request
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};

	return (
		<>
			{employee ? <EmployeeCard employee={employee} /> : <p>Pas d'employé</p>}
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</>
	);
}

export default App;
