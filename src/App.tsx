import { Route, Routes } from "react-router-dom";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";

const App = () => {
	return (
		<main className="flex h-screen">
			<Routes>
				{/* public routes */}
				<Route element={<AuthLayout/>}>
					<Route path="./sign-in" element={<SignInForm />} />
					<Route path="./sign-up" element={<SignUpForm />} />
				</Route>
				{/* private routes */}
				<Route element={<RootLayout/>}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
			<h1>Dhananjay chauhan</h1>
		</main>
	);
};

export default App;
