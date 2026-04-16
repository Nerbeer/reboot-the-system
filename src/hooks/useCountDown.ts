import { useCallback, useEffect, useRef, useState } from "react";

interface ICountDown {
    timeLeft: number;
    isCounting: boolean;
    start: () => void;
}

/**
 * Хук, который запускает обратный отсчет
 *
 * @return {ICountDown} Обхект содержащий оставшееся время, флаг - запущен ли отсчет и метод для запуска отсчета
 */
export default function useCountdown(): ICountDown {
    const [timeLeft, setTimeLeft] = useState(2000);
    const [isCounting, setIsCounting] = useState(false);
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);

    const start = useCallback(() => {
        setTimeLeft(2000);
        setIsCounting(true);
    }, []);

    useEffect(() => {
        if (!isCounting) return;

        timer.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 10) {
                    clearInterval(timer.current!);
                    timer.current = null;
                    setIsCounting(false);
                    return 0;
                }
                return prev - 10;
            });
        }, 10);

        return () => {
            if (timer.current) {
                clearInterval(timer.current);
                timer.current = null;
                setIsCounting(false);
            }
        };
    }, [isCounting]);

    return { timeLeft, isCounting, start };
}
