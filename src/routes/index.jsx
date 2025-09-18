import App from "../App.jsx";
import { Routes, Route, BrowserRouter } from "react-router";
import { Home, PageNotFound } from "../pages/index.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}