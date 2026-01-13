#!/bin/bash

# Invalidate CloudFront cache for chapters-dashboard-bcsf Amplify app
# This works by redeploying the current build to trigger cache invalidation

set -e

APP_ID="d1twumj262uku6"
BRANCH="staging"
DEPLOY_DIR="out"

echo "Creating deployment..."
RESPONSE=$(aws amplify create-deployment --app-id $APP_ID --branch-name $BRANCH --output json)

JOB_ID=$(echo $RESPONSE | grep -o '"jobId": "[^"]*"' | cut -d'"' -f4)
UPLOAD_URL=$(echo $RESPONSE | grep -o '"zipUploadUrl": "[^"]*"' | cut -d'"' -f4)

if [ -z "$JOB_ID" ] || [ -z "$UPLOAD_URL" ]; then
    echo "Error: Failed to create deployment"
    exit 1
fi

echo "Job ID: $JOB_ID"

# Create zip if out directory exists, otherwise use existing deploy.zip
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if [ -d "$DEPLOY_DIR" ]; then
    echo "Creating deployment package from $DEPLOY_DIR..."
    rm -f deploy.zip
    cd "$DEPLOY_DIR"
    zip -r ../deploy.zip . -q
    cd ..
elif [ -f "deploy.zip" ]; then
    echo "Using existing deploy.zip..."
else
    echo "Error: No $DEPLOY_DIR directory or deploy.zip found. Run 'npm run build' first."
    exit 1
fi

echo "Uploading to S3..."
curl -s -T deploy.zip "$UPLOAD_URL"

echo "Starting deployment..."
aws amplify start-deployment --app-id $APP_ID --branch-name $BRANCH --job-id $JOB_ID --output json > /dev/null

echo "Waiting for deployment to complete..."
while true; do
    STATUS=$(aws amplify get-job --app-id $APP_ID --branch-name $BRANCH --job-id $JOB_ID --query 'job.summary.status' --output text)
    if [ "$STATUS" = "SUCCEED" ]; then
        echo "Deployment succeeded! Cache invalidated."
        break
    elif [ "$STATUS" = "FAILED" ] || [ "$STATUS" = "CANCELLED" ]; then
        echo "Deployment failed with status: $STATUS"
        exit 1
    fi
    sleep 2
done

echo "Done! https://bcsf.chaptersdata.com should now show the latest version."
