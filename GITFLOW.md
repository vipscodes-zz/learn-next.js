### Git Flow (Branching)

## Flow
1. Git clone 
```bash
git clone git@github.com:arfanfb/kp-telkom.git
```
or if you dont use ssh, you can clone using with http
```bash
git clone http://gitlab.playcourt.id/useetv-new/cms/codebase-next.js-mfe.git
```
2. Do write codes
3. Checkout into specific branch and please DO NOT PUSH IT!
```bash
git checkout -b hotfix-code (example)
```
4. Add your code into stage change
```bash
git add .
```
or if you want specific file
```bash
git add /src/blabla.js
```
5. Commit your changed code
```bash
git commit -m "message here"
```
6. Checkout into branch develop / release / master
```bash
git checkout develop
```
7. Merge your code
```bash
git merge hotfix-code (example relate point 3)
```
8. Push your code
```bash
git push origin develop / release / master
```
9. Create Merge Request and Maintainer will review your code ASAP

## Extra Case
1. Add your fork source to upstream
```bash
git remote -v (for checking url)
```
if doesnt exist
```bash
git remote add upstream urlgit
```

2. If you dont receive new change from cloud (upstream) you can use git fetch for fetching all change
```bash
git fetch
```
