import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {AuthContext} from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";

function App() {

  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Routes >
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
        <Route path="/register">{user ? <Navigate to="/" /> : <Register />}</Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Routes >
    </Router>
  );
}

export default App;
