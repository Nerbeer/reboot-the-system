export interface LoginResponse {
    success: boolean;
    message: string;
}

/**
 * Мок метод для авторизации
 * Рандомно возвращает результат
 * @return {LoginResponse} Объект содержащий статус авторизации и текстовое сообщение
 */
export async function loginUser(email: string): Promise<LoginResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isSuccess = Math.random() > 0.5;

    return isSuccess ? { success: true, message: `Access granted to ${email}!` } : { success: false, message: "PERMISSION DENIED...and..." };
}
