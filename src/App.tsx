import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const basename = import.meta.env.BASE_URL;

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;