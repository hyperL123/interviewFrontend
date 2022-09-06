import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import AddUserInfo from "./pages/AddUserInfo";
import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUserInfo" element={<ViewPage mode="add" />} />
        <Route
          path="/updateUserInfo/:id"
          element={<ViewPage mode="update" />}
        />
        <Route path="/viewUserInfo/:id" element={<ViewPage mode="view" />} />
      </Routes>
    </Router>
  );
}

export default App;
