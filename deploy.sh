# Auto deployment script

# Requirements:
#  - Copy the code to the Linus server and build and deploy the app
#  - CI-CD: When code in the main branch is pushed, it will trigger the script and deploy the script. 

#!/bin/bash

# Variables
LOCAL_FOLDER_PATH="/path/to/your/local/folder"
REMOTE_USER="your-username"
REMOTE_HOST="your-vps-ip-or-hostname"
REMOTE_FOLDER_PATH="/path/to/remote/folder"
SSH_KEY_PATH="/path/to/your/private/key"  # Optional if you're using SSH keys

# Copy files to the VPS server
echo "Copying files to the VPS server..."
rsync -avz -e "ssh -i $SSH_KEY_PATH" $LOCAL_FOLDER_PATH $REMOTE_USER@$REMOTE_HOST:$REMOTE_FOLDER_PATH

if [ $? -ne 0 ]; then
    echo "File transfer failed!"
    exit 1
else
    echo "Files transferred successfully!"
fi

# Run build command on the remote server
echo "Running npm run build on the remote server..."
ssh -i $SSH_KEY_PATH $REMOTE_USER@$REMOTE_HOST << EOF
    cd $REMOTE_FOLDER_PATH
    npm install
    npm run build
    if [ $? -ne 0 ]; then
        echo "Build failed!"
        exit 1
    else
        echo "Build succeeded!"
    fi
EOF

# Done
echo "Deployment complete!"
