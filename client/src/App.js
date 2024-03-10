import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Front from "./pages/front";
import CodeS from "./components/CodeS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FormProvider } from "./utility/FormContext";

function App() {
  const user=false
  return (
    <FormProvider>
    <Router>
         <Routes>
         <Route path ="/" element={<Front/>} > </Route>
            <Route path="/start" element={user ? <CodeS/> : <CodeS/>} ></Route>
            <Route path="/login" element={user ? <Front/> : <Login/>} ></Route>
            <Route path="/register" element={user ? <Front/> : <Register/>} ></Route>

         </Routes>
       </Router>
       </FormProvider>
  );
}

export default App;