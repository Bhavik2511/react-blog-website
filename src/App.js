import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
       <TopBar />
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/register" element={user? <Home/> :<Register/>} />
      <Route path="/login" element={user? <Home/> :<Login/>} />
      <Route path="/write" element={user? <Write/> :<Register/>} />
      <Route path="/settings" element={user? <Settings/> :<Register/>} />
      <Route path="/post/:postId" element={<Single/>} />
    </Routes>


    
    </Router>
   
  );
}

export default App;
