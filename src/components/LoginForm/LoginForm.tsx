import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@shared/schemas/loginSchema";
import type { LoginFormData } from "@shared/schemas/loginSchema";
import EmailField from "./EmailField";
import SubmitButton from "./SubmitButton";

interface LoginFormProps {
    onSubmit: (data: LoginFormData) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
        defaultValues: { email: "" }
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <EmailField control={control} errors={errors} />
            <SubmitButton isSubmitting={isSubmitting} isDisabled={isSubmitSuccessful} />
        </Box>
    );
}
