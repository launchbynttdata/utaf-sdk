---
layout: docs
title: Installation
sidebar: sidebars/docs/installation.html
sidebarHTML: true
---

## Creating a New Test Suite

The UTAF command-line tool is used to create test suites for all supported languages and test automation frameworks.

<div class="alert">
  <img alt="warning" src="./assets/images/warning.png" /> 
  <strong>Warning!</strong> You must have Node.js version 18 or later installed..
</div>

Create a new UTAF test project using the following command:

<details>
  <summary>npm</summary>
  {% highlight console %}npx @launch-utaf/create-test-project{% endhighlight %}
</details>
<details>
  <summary>pnpm</summary>
  {% highlight console %}npx @launch-utaf/create-test-project --pm pnpm{% endhighlight %}
</details>
<details>
  <summary>yarn</summary>
  {% highlight console %}npx @launch-utaf/create-test-project --pm yarn{% endhighlight %}
</details>
<details>
  <summary>Bun</summary>
  {% highlight console %}bunx @launch-utaf/create-test-project --pm bun{% endhighlight %}
</details>

This will guide you through setting up the new test suite, asking what programming language and test automation framework you will use along with other prompts to configure the project as needed.

![Launch by NTT Data](../../assets/images/create-test-project-cli.png?raw=true)

## Adding UTAF to an Existing Test Suite

TODO...

## More Documentation

To learn more about building and running tests with UTAF, see the following tutorials:

- Getting Started with C#
- Getting Started with Java
- Getting Started with Javascript/Typescript
- Getting Started with Python
