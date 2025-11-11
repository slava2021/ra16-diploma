export const errorHandling = (response) => {
        switch (response.status) {
            case 404:
                return 404;
            case 500:
                return '500, Внутренняя ошибка сервера';
            default:
                return `Что-то пошло не так, сервер ответил: ${response.status}`;
        }

}
export const errorMessage = (error) => {
    console.log("errorMessage error: ", error);
    if (error instanceof TypeError && error.message === "Failed to fetch") {
        return "Подключение прервано или ошибка сети. Проверьте состояние сервера и URL.";
    } else {
        return error.message;
    }
}