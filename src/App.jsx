import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/useAuthContext.jsx";
import Login from "./pages/auth/Login/Login.jsx";

import "./assets/scss/app.scss";
import "./assets/scss/icons.scss";
import HomePage from "./pages/HomePage.jsx";
import { ThemeProvider } from "./context/index.js";
import VerticalLayout from "./layout/VerticalLayout.jsx";
import ComplaintPage from "./pages/ComplaintPage.jsx";
import { Container } from "react-bootstrap";
import { Toaster } from "sonner";
import AllRoutes from "./routes-cgc/Routes.jsx";

function App() {
  return (
    <ThemeProvider>
			<AuthProvider>
				<AllRoutes />
				<Toaster richColors />
			</AuthProvider>
		</ThemeProvider>
  );
}

export default App;
