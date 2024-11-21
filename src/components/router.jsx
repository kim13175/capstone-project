import { Route, Routes } from "react-router-dom";
import MainPage from "../components/mainPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default Router;