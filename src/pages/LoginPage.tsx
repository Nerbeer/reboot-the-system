import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { loginUser } from "@api/auth";
import type { LoginResponse } from "@api/auth";
import type { LoginFormData } from "@shared/schemas/loginSchema";
import LoginForm from "@components/LoginForm/LoginForm";
import LoginFeedback from "@components/LoginFeedback";

export default function LoginPage() {
    const navigate = useNavigate();
    const [result, setResult] = useState<LoginResponse | null>(null);

    const handleSubmit = async (data: LoginFormData) => {
        setResult(null);
        const response = await loginUser(data.email);
        setResult(response);
    };

    const afterLogin = useCallback(() => {
        if (result?.success) {
            navigate("/");
        } else {
            navigate("/denied");
        }
    }, [result, navigate]);

    return (
        <Container maxWidth="xs">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: "30vh" }}>
                <Paper elevation={3} sx={{ p: 4, width: "100%" }}>
                    <Typography variant="h5" component="h1" sx={{ mb: 3, textAlign: "center" }}>
                        Reboot the system!
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <LoginForm onSubmit={handleSubmit} />
                        {result ? <LoginFeedback result={result} afterLogin={afterLogin} /> : null}
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
