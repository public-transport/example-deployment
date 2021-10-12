# example-deployment

Example deployment (including CI/CD) on our [shared infrastructure](https://github.com/public-transport/infrastructure). **For a complete guide on how to deploy your own app, check [these instructions](https://github.com/public-transport/infrastructure/blob/main/kubernetes/#how-can-i-deploy-my-own-app).**

Note that, by deploying something to our infrastructure, you commit to the [code of conduct](https://github.com/public-transport/infrastructure/blob/master/code-of-conduct.md).

[![License](https://img.shields.io/github/license/public-transport/example-deployment.svg?style=flat)](license)

## CI configuration

The GitHub Actions workflow publishes container images to [GitHub's container registry](https://ghcr.io) by default, so you can just copy the workflow file to your own repository and things should work out of the box.

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/public-transport/example-deployment/issues).
