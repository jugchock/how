# Adding a local repository to GitHub with GitHub CLI

> from: https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github

1. In the command line, navigate to the root directory of your project.

1. Initialize the local directory as a Git repository.

```bash
git init -b main
```

1. Stage and commit all the files in your project

```bash
git add . && git commit -m "initial commit"
```

1. To create a repository for your project on GitHub, use the gh repo create subcommand. When prompted, select Push an existing local repository to GitHub and enter the desired name for your repository. If you want your project to belong to an organization instead of your user account, specify the organization name and project name with organization-name/project-name.

1. Follow the interactive prompts. To add the remote and push the repository, confirm yes when asked to add the remote and push the commits to the current branch.

1. Alternatively, to skip all the prompts, supply the path to the repository with the --source flag and pass a visibility flag (--public, --private, or --internal). For example, gh repo create --source=. --public. Specify a remote with the --remote flag. To push your commits, pass the --push flag. For more information about possible arguments, see the GitHub CLI manual.

