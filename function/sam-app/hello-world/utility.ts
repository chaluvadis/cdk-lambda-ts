export const sendResponse = (statusCode: number, message: string) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify({
            message: message
        }),
    };
};

export const getEnvironmentVariable = (key: string) => {
    return process.env[key];
};