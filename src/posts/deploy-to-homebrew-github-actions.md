---
slug: deploy-app-homebrew-using-github-actions
title: Deploy your app to Homebrew using Github Actions
description: Simplify the process of deploying your application to Homebrew by using Github Actions to automate the process.
author: Johnny Ruiz
date: 2024-08-23
tags: git, github, github-actions, homebrew, macos
---

## Introduction

In an effort to automate the process of deploying a Go app I've been working on, I ran into a hurdle that left me clawing my face in frustration at 1:30 AM hoping to figure out why my GitHub Actions workflow keeps failing. After a much-needed night of rest and a cleared head, I was able to figure out the issue and solve my workflow problem.

Though the solution was simple, there was a nuance detail that I think is worth highlighting. I was writing up a workflow using GitHub Actions and here is a brief outline of what the workflow did:

1. Checkout the code
2. Setting up Go
3. Building the code
4. Testing the code
5. Print the SHA265 for Homebrew
6. Publishing a release on GitHub
7. Create the Homebrew formula
8. Push the formula to your Homebrew tap repo

My issue lied in the very last two steps: creating the Homebrew formula and publishing the formula to a Homebrew tap repository. This guide will show you how to create your Homebrew tap and how to automate the deployment of your tap as part of your publication of your release.

## What is Homebrew and a Homebrew Tap?

To kick it off, lets talk about the popular macOS package manager, Homebrew. I'm a huge fan of Homebrew. With it, I am able to quickly install most software, including developer tools, terminal tools or really anything you'd want like 1Password, `git`, VS Code, `eza` (a modern replacement for the `ls` command) and Discord. I can also keep track of all the software I have downloaded using a `Brewfile`, which is great if I ever need to do fresh installation.

When installing Homebrew, by default you get access to the core repository. But what if the package you are looking for isn't on there? A Homebrew Tap is a custom Git repo that contains the formulae which allows you to install what can be considered a third-party repository that extends the available list of packages.

## Creating a Homebrew Tap

To create the tap, there are two requirements:

-   A public Git repository
-   A Homebrew formula(e)

### Create the Homebrew tap repository

For the Git repo, GitHub seems to be the most common and easiest method of creating a tap. You can still use other Git-based hosting services like GitLab, Bitbucket and Azure DevOps. Here is what you need to do:

1. **Log in to GitHub**: If you don’t already have a GitHub account, you’ll need to create one.
2. **Create a new repository**:
    - Go to your GitHub profile and click on the "Repositories" tab.
    - Click the "New" button to create a new repository.
    - Name your repository using the format `homebrew-<tapname>`. For example, if you want your tap to be called "custom", you could name your repository `homebrew-mycooltap`.
    - Set the repository to public. Homebrew taps are usually public repositories, so make sure to select "Public" when creating the repository.

### Create the Homebrew Formula

Now that your repo is ready to roll, you have to upload a Homebrew formula. A formula is a Ruby script that tells Homebrew how to install your software. The formula is usually named after the software you are installing. For example, the formula for `git` is `git.rb`.

This is an example of a formula for a Go app I built called `wakey`:

```ruby
class Wakey < Formula
	# The name of the formula
	desc "A TUI built for managing and waking your devices using Wake-on-LAN."
	# The homepage of the formula, in this case is the GitHub repo
	homepage "https://github.com/jonathanruiz/wakey"
	# The URL to download the binary
	url "https://github.com/jonathanruiz/wakey/releases/download/v1.0.0/wakey_darwin_amd64"
	# The SHA256 checksum of the binary
	sha256 "19321ff7e9de33aff53e8b13dd5df2d3909d2007db111d65f7b162f2253605c8"
	# The version of the formula
	version "v1.0.0"

	def install
		bin.install "wakey_darwin_amd64" => "wakey"
	end

	test do
		system "#{bin}/wakey"
	end
end
```

Once you create your formula, upload it to your newly created homebrew tap repository. You can upload the formula directly to the root of the repository or create a folder to store all your formulae.

For documentation on creating a formula, you can refer to the [Formula Cookbook documentation](https://docs.brew.sh/Formula-Cookbook) on Homebrew's website.

### Add the tap to Homebrew

Once your tap is ready to go, you can add the tap on Homebrew by running the following command:

```bash
brew tap <username>/<tapname>
```

So if I was to add my own tap, I would run the following command:

```
brew tap jonathanruiz/homebrew-tap
```

Alternatively, if you are using another Git-based hosting service, you run a similar command that would include the URL to your Git repo.

```bash
brew tap <username>/<tapname> <url>
```

## Automate the Homebrew deployment using GitHub Actions

### GitHub Token vs. Personal Access Token (PAT)

The roadblock I was trying to get over was that even though I had my authentication token, I was still not able to authenticate during the workflow for my last task.

The `GITHUB_TOKEN` is a special token automatically provided by GitHub Actions workflows for authentication purposes within the context of that workflow.

A Personal Access Token (PAT) is a user-specific token created manually in GitHub that grants a user specific permissions to interact with GitHub's API.

You may be asking yourself "Both of these tokens do the same thing, right? Then what's the difference?". It really comes down to scope. The `GITHUB_TOKEN` is scoped to the repo that the workflow is running in, whereas the PAT is scoped to the user that created it, the permissions that the user specifies, and the repos that the user grants access to.

The headache I was dealing with during my workflow is that my workflow was scoped to the repo of the Go app. The last step of my workflow required a file to be pushed to my homebrew-tap repo, an action that was out of the scope of the `GITHUB_TOKEN`. To fix this, I would need to create a PAT and grant it access to my application and homebrew-tap repository to authenticate the push to the homebrew-tap repo.

### Create the PAT

First, let's create the Personal Access Token that we will use for the repos.

1. **Go to your GitHub settings**:
    - Click on your profile icon in the top right corner of the page.
    - Click on "Settings".
2. **Go to Developer settings**:
    - Click on "Developer settings" in the left sidebar.
3. **Create a new token**:
    - Click on "Personal access tokens".
    - Click on "Tokens (classic)".
    - Click on "Generate new token" .
    - Click on "Generate new token (classic)"
4. **Name your token**:
    - Give your token a descriptive name.
5. **Set an expiration**:
    - Set whatever the expiration you would prefer. It is recommended to at least have an expiration date.
6. **Select the scopes**:
    - For the purposes of this guide, you will need to select the following scope:
        - `repo` - Full control of private repositories
7. **Generate the token**:
    - Click on "Generate token".
8. **Copy the token**:
    - Copy the token to a secure location. You will not be able to see the token again.

### Create the secret for your repos

Now that you created your PAT, you have to assign it to your repos:

1. **Go to your repo**:
    - Go to the repo that you want to assign the PAT to.
2. **Go to the repo's settings**:
    - Click on the "Settings" tab.
3. **Go to the secrets for Actions**:
    - Click on "Secrets and variables" in the left sidebar.
    - Click on "Actions".
4. **Create a new secret**:
    - Click on "New repository secret".
5. **Name the secret**:
    - Name the secret something descriptive. For example, `HOMEBREW_TAP_TOKEN`.
6. **Add the PAT**:
    - Paste the PAT secret value you copied earlier.
7. **Save the secret**:
    - Click on "Add secret".
8. **Repeat for the other repo**:
    - Repeat the process for the other repo that you want to assign the PAT to.

### Create the GitHub Action workflow

Your repos are ready to go and now your workflow has the proper permissions to make these operations.

Here is a sample workflow:

```yaml
name: Production Release

env:
  USERNAME: <ENTER_GITHUB_USERNAME>
  APP_NAME: TestApp
  RELEASE_VERSION: v1.0.0
  HOMEBREW_TAP_REPO: homebrew-tap

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
	    # Previous steps...


      - name: Create Homebrew formula
        run: |
          SHA256=$(grep "${{ env.APP_NAME }}_darwin_amd64" sha256checksums.txt | awk '{ print $1 }')
          FORMULA="class ${{ env.APP_NAME }} < Formula
            desc \"A description for the test app.\"
            homepage \"https://github.com/${{ env.USERNAME }}/${{ env.APP_NAME }}\"
            url \"https://github.com/${{ env.USERNAME }}/${{ env.APP_NAME }}/releases/download/${{ env.RELEASE_VERSION }}/${{ env.APP_NAME }}_darwin_amd64\"
            sha256 \"$SHA256\"
            version \"${{ env.RELEASE_VERSION }}\"

            def install
              bin.install \"${{ env.APP_NAME }}_darwin_amd64\" => \"${{ env.APP_NAME }}\"
            end

            test do
              system \"#{bin}/${{ env.APP_NAME }}\"
            end
          end
          "
          echo "$FORMULA" > ${{ env.APP_NAME }}.rb

      - name: Push formula to Homebrew tap
        run: |
          git clone https://github.com/${{ env.USERNAME }}/${{ env.HOMEBREW_TAP_REPO }}.git
          cd homebrew-tap

          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

          mv ../${{ env.APP_NAME }}.rb .
          git add ./${{ env.APP_NAME }}.rb
          git commit -m "Update formula for ${{ env.RELEASE_VERSION }}"
          git push https://x-access-token:${{ secrets.HOMEBREW_TAP_TOKEN }}@github.com/${{ env.USERNAME }}/${{ env.HOMEBREW_TAP_REPO }}.git HEAD:main

```

To quickly break down the YAML file above:

1. **Creating Homebrew formula**
    - It is creating the Ruby file that contains the formula for the app that is being deployed.
    - It will also replace any formula that has the same name.
2. **Pushing formula to Homebrew tap**
    - The workflow will then clone the homebrew-tap repo.
    - It will move the homebrew formula that was created in the previous step to the homebrew-tap repo.
    - It will then stage it to Git and then commit the repo.
    - Finally, it pushes the changes and uses the PAT that was created and added to the app and homebrew-tap repo. In this case, the PAT was named HOMEBREW_TAP_TOKEN.

Not only will this create the homebrew tap, but you won't need to manually create the formula anymore since this workflow will make it part of the process.

If you want to see a production workflow on Github that I made for my package `wakey`, you can go to the [workflow.yaml](https://github.com/jonathanruiz/wakey/blob/main/.github/workflows/release.yaml).

## Wrap up

Although this may be obvious to some, it wasn't to me (most likely because I just needed a nights rest). This may likely change a little since GitHub has started to introduce the new way of making [personal access tokens using fine-grained permissions](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens?apiVersion=2022-11-28). Regardless, the struggle resulted into experience which is invaluable to me. I've already pinpointed some paths that I can take from here and I am looking forward to sharing some of the discoveries that I eventually will uncover.
