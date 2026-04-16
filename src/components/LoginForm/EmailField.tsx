import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { LoginFormData } from "@shared/schemas/loginSchema";

interface EmailFieldProps {
    control: Control<LoginFormData>;
    errors: FieldErrors<LoginFormData>;
}

export default function EmailField({ control, errors }: EmailFieldProps) {
    return (
        <Controller
            name="email"
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email?.message ?? " "}
                />
            )}
        />
    );
}
