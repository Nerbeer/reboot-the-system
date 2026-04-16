import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const HomePage = lazy(() => import("@pages/HomePage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));
const DeniedPage = lazy(() => import("@pages/DeniedPage"));

function PageLoader() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <CircularProgress />
        </Box>
    );
}

const AppRouters = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/denied" element={<DeniedPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouters;
