# Dobby

![](https://raw.githubusercontent.com/eXigentCoder/dobby/master/dobby-sock.jpg)

A monorepo for a collection of useful services to aid development.

## [API Docs](https://eXigentCoder.github.io/dobby)


## Packages

- [templater-core](packages/templater-core/package/README.md)

## Lib folders
This is the output from TS and won't be checked into the repo.

## Releases the code

https://github.com/atlassian/lerna-semantic-release

## Downloading the packages

https://github.com/eXigentCoder/dobby/packages

## FAQ

### Getting an E401 error on NPM install?

You need to log into the github registry as configured in the `.npmrc` file.

```bash
npm ERR! code E401
npm ERR! Unable to authenticate, need: Basic realm="GitHub Package Registry"
```

```bash
npm login --registry=https://npm.pkg.github.com
```

For more info, see [configuring npm for use with github package registry](https://help.github.com/en/github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry)

You may need a personal access token from github, see [creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

## Documenting your code

See [TypeDoc](https://typedoc.org/guides/doccomments/) for available options.