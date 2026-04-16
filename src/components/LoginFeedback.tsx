import Alert from "@mui/material/Alert";
import type { LoginResponse } from "@api/auth";
import RebootTimer from "./RebootTimer";

interface LoginFeedbackProps {
    result: LoginResponse;
    afterLogin: () => void;
}

export default function LoginFeedback({ result, afterLogin }: LoginFeedbackProps) {
    return (
        <>
            <Alert severity={result.success ? "success" : "error"}>{result.message}</Alert>
            <RebootTimer onTimerEnd={afterLogin} />
        </>
    );
}
