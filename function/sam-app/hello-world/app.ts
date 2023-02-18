import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import { getEnvironmentVariable, sendResponse } from './utility';
export const lambdaHandler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        let body = event.body || '';
        let obj = JSON.parse(body);
        const env_stage = getEnvironmentVariable("stage");
        const env_cdk_deployed_on = getEnvironmentVariable("cdk_deployed_on");
        const message = `${env_stage} Lambda with message ${obj?.message} is deployed on ${env_cdk_deployed_on}`;
        return sendResponse(200, message);
    } catch (err) {
        return sendResponse(500, "Internal Server Error");
    }
};
