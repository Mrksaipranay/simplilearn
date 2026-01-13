Write-Host "---------------------------------------------------------"
Write-Host "       RAS Currys - Git Push Fix Utility"
Write-Host "---------------------------------------------------------"
Write-Host "This script fixes the 'File size restriction' error by removes large ignored files (node_modules, .next) from your recent commit history."
Write-Host ""
Write-Host "IMPORTANT: Please STOP any running servers (npm run dev) before continuing."
Write-Host ""
$confirmation = Read-Host "Type 'y' to continue, or any other key to cancel"

if ($confirmation -eq 'y') {
    # 1. Reset the last commit (soft reset keeps changes in file system)
    git reset --soft HEAD~1
    
    # 2. Unstage everything to ensure we respect the new .gitignore
    git rm -r --cached .
    
    # 3. Add files again (ignoring node_modules and .next this time)
    git add .
    
    # 4. Commit
    git commit -m "Fix: Remove large files and apply gitignore"
    
    Write-Host ""
    Write-Host "Success! The large files have been removed from the commit history."
    Write-Host "You can now run: git push"
} else {
    Write-Host "Cancelled."
}
