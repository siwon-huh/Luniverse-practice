import { Route, Routes } from "react-router";
import AsyncBoundary from "./components/AsyncBoundary";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import "./styles/App.css";

function App() {
    return (
        <AsyncBoundary
            ErrorFallback={(arg) => {
                return <Error error={arg.error} />;
            }}
            SuspenseFallback={<Loading />}
        >
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage/>} />
                    <Route path="account/:address" element={<DashboardPage/>} />
                </Route>
            </Routes>
        </AsyncBoundary>
    );
}

export default App;
