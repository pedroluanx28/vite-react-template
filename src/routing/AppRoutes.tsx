import { BrowserRouter as Router, Routes, Route } from "react-router";
import { App } from "../App.tsx";

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route index element={<App />} />
			</Routes>
		</Router>
	);
}
