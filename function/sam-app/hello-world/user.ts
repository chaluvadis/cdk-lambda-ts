import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import { getEnvironmentVariable, sendResponse } from './utility';
interface user {
    name: string;
    email: string;
};
export const userHandler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        let body = event.body || '';
        const obj: user = JSON.parse(body);
        const user_group = getEnvironmentVariable("user_group");
        const message = `user with name ${obj.name} and email ${obj.email} is added to user group ${user_group} on ${(new Date()).toDateString()})}`;
        return sendResponse(200, message);
    } catch (err) {
        return sendResponse(500, "Internal Server Error");
    }
};