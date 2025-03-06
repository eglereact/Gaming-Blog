import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import { HOME, LOGIN, REGISTRATION } from "./utils/routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={REGISTRATION} element={<RegistrationPage />} />
        <Route path={LOGIN} element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
