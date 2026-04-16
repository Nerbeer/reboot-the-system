import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface SubmitButtonProps {
    isSubmitting: boolean;
    isDisabled?: boolean;
}

export default function SubmitButton({ isSubmitting, isDisabled = false }: SubmitButtonProps) {
    return (
        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting || isDisabled} sx={{ height: 48 }}>
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
        </Button>
    );
}
