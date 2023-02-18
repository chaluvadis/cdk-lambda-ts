import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime, Architecture } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export class CdkLambdaTsStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps, stage: string) {
    super(scope, id, props);
    const helloWorldFunction = new NodejsFunction(this, 'HelloWorldHandler', {
      runtime: Runtime.NODEJS_18_X,
      architecture: Architecture.ARM_64,
      entry: 'function/sam-app/hello-world/app.ts',
      handler: 'lambdaHandler',
      functionName: `${stage}-hello-world-lambda`,
      memorySize: 512,
      description: 'Hello World Lambda Function',
      timeout: Duration.seconds(30),
      retryAttempts: 2,
    });

    helloWorldFunction.addEnvironment("stage", stage);
    helloWorldFunction.addEnvironment("cdk_deployed_on", (new Date()).toDateString());
  }
}
