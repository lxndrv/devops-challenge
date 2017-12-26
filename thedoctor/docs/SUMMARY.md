# The Doctor development steps

1. Setup aws credentials
2. Check DynamoDB access and data:
   `aws dynamodb get-item --table-name devops-challenge --key '{"code_name": {"S":"thedoctor"}}' --output=json`
3. Create node app with /health and /secret routers
4. Create package.json
5. Add test
6. Create Dockerfile
7. Create docker compose
8. Create .travis.yml
9. Add repo to travis ci and add docker hub credentials
