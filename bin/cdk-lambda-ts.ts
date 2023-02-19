#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DevLambdaTsStack } from '../lib/dev-lambda-stack';
import { ProdLambdaTsStack } from '../lib/prod-lambda-stack';
const app = new cdk.App();
const deploymentStage = app.node.tryGetContext('deploymentStage');
const statckProps: cdk.StackProps = {
  stackName: `${deploymentStage}-lambda-stack`,
  description: `Lambda Stack for ${deploymentStage} environment`,
};
if (deploymentStage === 'prod') {
  new ProdLambdaTsStack(app, 'ProdLambdaTsStack', statckProps, deploymentStage);
} else {
  new DevLambdaTsStack(app, 'DevLambdaTsStack', statckProps, deploymentStage);
}