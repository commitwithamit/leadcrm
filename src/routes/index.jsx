import App from "../App.jsx";
import { Routes, Route, BrowserRouter } from "react-router";
import { Home } from "../pages/index.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Home/>} />
                    <Route path="*" element={<div>Not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}