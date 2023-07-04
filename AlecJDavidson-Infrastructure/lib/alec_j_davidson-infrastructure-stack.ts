import { Stack, StackProps, App, RemovalPolicy } from 'aws-cdk-lib'
import { Bucket, BlockPublicAccess } from 'aws-cdk-lib/aws-s3'
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment'

export class AlecJDavidsonInfrastructureStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // Create an S3 bucket to host alecjdavidson.com
    const bucket = new Bucket(this, 'AlecJDavidsonBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: true,
      // blockPublicAccess: BlockPublicAccess.BLOCK_ACLS, // Disable blockPublicPolicy and blockPublicAcls
      removalPolicy: RemovalPolicy.DESTROY, // Optional: Set the bucket removal policy
    })

    // Deploy the build files to the S3 bucket
    new BucketDeployment(this, 'AlecJDavidsonDeployment', {
      sources: [Source.asset('../dist')],
      destinationBucket: bucket,
    })
  }
}
