# example-deployment

Example deployment (including CI/CD) on our [shared infrastructure](https://github.com/public-transport/infrastructure). **For a complete guide on how to deploy your own app, check [these instructions](https://github.com/public-transport/infrastructure/blob/main/kubernetes/#how-can-i-deploy-my-own-app).**

Note that, by deploying something to our infrastructure, you commit to the [code of conduct](https://github.com/public-transport/infrastructure/blob/master/code-of-conduct.md).

[![License](https://img.shields.io/github/license/public-transport/example-deployment.svg?style=flat)](license)

## CI configuration

If you clone this repository, the CI workflow needs the following configuration to work correctly:

- Add secrets `DOCKER_USERNAME` and `DOCKER_ACCESS_TOKEN` in your repo's settings containing your docker hub credentials
- If you want to deploy to your own docker namespace, replace `publictransport/` with your own docker username/org in `.github/workflows/ci.yaml`

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/public-transport/example-deployment/issues).
