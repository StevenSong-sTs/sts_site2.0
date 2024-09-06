$foldersToCopt = @(
    "C:\Users\Steven\Documents\Projects\sts_site2.0\sts-site-2.0\public",
    "C:\Users\Steven\Documents\Projects\sts_site2.0\sts-site-2.0\src"
)
$remoteUser = "ENTER USERNAME"
$remoteHost = "ENTER IP"
$remoteFolderPath = "/var/www/sts_site/"

#Copy files to the VPS server
Write-Host "Copying files to the VPS server..."
foreach ($localFolder in $foldersToCopt) {
    Write-Host "Start copying $localFolder"
    $scpCommand = "scp -r `"$localFolder`" ${remoteUser}@${remoteHost}:`"$remoteFolderPath`""
    Invoke-Expression $scpCommand

    if ($LASTEXITCODE -ne 0) {
        Write-Host "File transfer failed!"
        exit 1
    } else {
        Write-Host "Files transferred successfully!"
    }    
}

# Construct multiple commands using Here-String
# TODO: Add Step: Clear the folder before copying
$commands = @"
source ~/.nvm/nvm.sh
nvm use 20
pm2 stop sts_site
cd $remoteFolderPath
npm install
npm run build
pm2 start sts_site
"@ -replace "`r", ""

# Construct the SSH command
$sshCommand = "ssh $remoteUser@$remoteHost `"$commands`""

# Execute the SSH command
Invoke-Expression $sshCommand