import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import * as l from "./utils/routes";
import LostPasswordPage from "./pages/LostPasswordPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={l.HOME} element={<HomePage />} />
        <Route path={l.REGISTRATION} element={<RegistrationPage />} />
        <Route path={l.LOGIN} element={<LoginPage />} />
        <Route path={l.LOST_PASSWORD} element={<LostPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;
