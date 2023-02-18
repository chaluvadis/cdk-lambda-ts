import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';

export const lambdaHandler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        let body = event.body || '';
        let obj = JSON.parse(body);
        const env_stage = process.env.stage;
        const env_cdk_deployed_on = process.env.cdk_deployed_on;
        return {
            body: JSON.stringify({ message: `${env_stage} Lambda with message ${obj?.message} is deployed on ${env_cdk_deployed_on}` }),
            statusCode: 200,
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: `error - ${JSON.stringify(err)}}`
            }),
        };
    }
};
