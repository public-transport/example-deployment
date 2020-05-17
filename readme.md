# example-deployment

Example deployment (including CI/CD) for our shared Kubernetes cluster.

[![License](https://img.shields.io/github/license/public-transport/example-deployment.svg?style=flat)](license)

## Manual

If you want to deploy a new service on our Kubernetes cluster, follow these steps.

### Prerequisites

Before you can deploy your own service, you need the following things:

- a [Docker Hub Token](https://hub.docker.com/settings/security) for a docker account that has write access to our [publictransport](https://hub.docker.com/orgs/publictransport) docker organization
- a [set of CI credentials (kubeconfig file)](https://github.com/public-transport/kubernetes-setup/blob/master/users/readme.md#obtaining-ci-credentials) for your user on our cluster (contact [@juliuste](https://github.com/juliuste) if you're interested in deploying something)
- for services exposed under a specific domain, that domain needs to have a `CNAME` record pointing to `antarktika.juliustens.eu`

*If you want to push Docker images to your own account/organization or have your own cluster, have a look at the [advanced](#advanced) section*.

### Setup

Assuming you have your service's code in some GitHub repository, and there is a `Dockerfile` for that service in the repository root:

- copy [`/.github/workflows/build-push-deploy.yaml`](./.github/workflows/build-push-deploy.yaml) to your repository (the path must be the same in your repository, so create the `.github` and `workflow` directories if they don't exist yet)
- copy [`/kubernetes.yaml`](./kubernetes.yaml) to your repository root and:
	- replace every occurance of the string `example-deployment` with some name that describes your service (e.g. `flixbus-api-v3`)
	- replace every occurance of the string `example-user` with your username on our cluster (e.g. `julius`, contact [@juliuste](https://github.com/juliuste) if you're not sure what your username is)
	- if your service **IS** exposed unter a specific domain, replace every occurance of the string `example-deployment.juliustens.eu` with your own domain name (which, as mentioned before, needs to have a CNAME record pointing to `antarktika.juliustens.eu`)
	- if your service **IS NOT** exposed unter a specific domain: the `kubernetes.yaml` file has three sections, separated by short lines (`---`); remove the first and the third section and the short lines that separated the sections, so that only the middle section remains (`kind: Deployment`)
	- if your container needs any additional environment variables, update the `env` section below the word `<IMAGE>` accordingly. The example deployment only takes one variable which is the port the server should run at
	- replace all occurances of `3000` with the port number exposed by your server (if there is any)
- navigate to the *Secrets* section of your repository settings and add the following:
	- `DOCKER_USERNAME` should be your docker username
	- `DOCKER_ACCESS_TOKEN` must be the *docker hub* token mentioned in the prerequisites
	- `KUBERNETES_CONFIG` must be the [kubeconfig file containing your CI credentials](https://github.com/public-transport/kubernetes-setup/blob/master/users/readme.md#obtaining-ci-credentials), base64-encoded (run `cat your-kubeconfig.yaml | base64 | tr -d '\n'`)
	- `KUBERNETES_USER` must be your username on our cluster (example from above: `julius`, contact [@juliuste](https://github.com/juliuste) if you're not sure what your username is)
	- `DEPLOYMENT_NAME` must be the name you picked above, with which you replaced the `example-deployment` in `kubernetes.yaml` (example from above: `flixbus-api-v3`)

If you did all that, your container should now be built, published as `publictransport/your-repository-name:current-commit-hash` and deployed to our cluster everytime you push to your `master` branch.

## Advanced

If you operate your own cluster or want to use another Docker Hub organization/account, you need to make the following changes to the configuration:

### Different Docker Hub account/organization

Just replace every occurance of `publictransport` in [`/.github/workflows/build-push-deploy.yaml`](./.github/workflows/build-push-deploy.yaml) with your account or organization name.

### Different Kubernetes cluster

Everything should work the same, as long as you use our [tooling for generating CI credentials](https://github.com/public-transport/kubernetes-setup/blob/master/users/readme.md#obtaining-ci-credentials).

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/public-transport/example-deployment/issues).
