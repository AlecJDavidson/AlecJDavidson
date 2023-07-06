import { Stack, StackProps, App } from 'aws-cdk-lib'
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3'
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment'
import { AnyPrincipal, Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam'
import { RemovalPolicy } from 'aws-cdk-lib'

export class AlecJDavidsonWebsiteInfrastructureStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // Create an S3 bucket to host alecjdavidson.com
    const bucket = new Bucket(this, 'AlecJDavidsonBucket', {
      bucketName: 'alecjdavidson.com',
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS, // Set bucket access control to private
      removalPolicy: RemovalPolicy.DESTROY,
    })

    // Add bucket policy allowing public read access to objects
    bucket.addToResourcePolicy(
      new PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [`${bucket.bucketArn}/www.alecjdavidson.com/*`],
        principals: [new AnyPrincipal()],
        effect: Effect.ALLOW,
      })
    )

    // Deploy the build files to the S3 bucket
    new BucketDeployment(this, 'AlecJDavidsonDeployment', {
      sources: [Source.asset('../dist')], // Update the path to your build directory
      destinationBucket: bucket,
    })
  }
}

const app = new App()
new AlecJDavidsonWebsiteInfrastructureStack(app, 'AlecJDavidsonInfrastructureStack')
app.synth()
