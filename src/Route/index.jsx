import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import NotFound from "../components/NotFound";
import Login from "../components/Template/Login/index.jsx";
import Register from "../components/Template/Register";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Router;