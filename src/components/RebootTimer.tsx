import useCountdown from "@hooks/useCountDown";
import { Typography } from "@mui/material";
import { useEffect } from "react";

interface RebootTimerProps {
    onTimerEnd: () => void;
}

export default function RebootTimer({ onTimerEnd }: RebootTimerProps) {
    const { timeLeft, start } = useCountdown();

    useEffect(() => {
        start();
    }, [start]);

    // Вызываем коллбек, когда таймер доходит до 0
    useEffect(() => {
        if (timeLeft === 0) {
            onTimerEnd();
        }
    }, [timeLeft, onTimerEnd]);

    return (
        <Typography variant="subtitle2" component="span" sx={{ mb: 3, textAlign: "center" }}>
            {`Rebooting... ${(timeLeft / 1000).toFixed(2)}`}
        </Typography>
    );
}
