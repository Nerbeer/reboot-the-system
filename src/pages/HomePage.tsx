import { useNavigate } from "react-router";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: "20vh", gap: 4 }}>
                <img src="/hacked.gif" alt="Hacked" style={{ width: "100%", borderRadius: 8 }} />
                <Button variant="outlined" size="large" onClick={() => navigate("/signin")}>
                    Good job!
                </Button>
            </Box>
        </Container>
    );
}
