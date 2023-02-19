import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaStack } from '../lib/lambda-stack';
const app = new cdk.App();
const deploymentStage = app.node.tryGetContext('deploymentStage');
const createStack = (stage: string) => {
  const stackId = `${stage}-lambda-stack`;
  const statckProps: cdk.StackProps = {
    stackName: `${stage}-lambda-stack`,
    description: `Lambda Stack for ${stage} environment`,
  };
  new LambdaStack(app, stackId, statckProps, stage);
};
createStack(deploymentStage);