import { Stack, StackProps, App } from 'aws-cdk-lib'
import { Bucket } from 'aws-cdk-lib/aws-s3'
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment'
import { RemovalPolicy } from 'aws-cdk-lib'

export class AlecJDavidsonInfrastructureStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // Create an S3 bucket to host alecjdavidson.com
    const bucket = new Bucket(this, 'AlecJDavidsonBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
    })

    // Deploy the build files to the S3 bucket
    new BucketDeployment(this, 'AlecJDavidsonDeployment', {
      sources: [Source.asset('../dist')],
      destinationBucket: bucket,
    })
  }
}
