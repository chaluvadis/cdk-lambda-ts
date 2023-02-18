#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkLambdaTsStack } from '../lib/cdk-lambda-ts-stack';
const app = new cdk.App();
const deploymentStage = app.node.tryGetContext('deploymentStage');
const statckProps: cdk.StackProps = {
  stackName: `cdk-lambda-ts`,
  description: `CDK Lambda TypeScript Stack for environment`,

};
new CdkLambdaTsStack(app, 'CdkLambdaTsStack', statckProps, deploymentStage);