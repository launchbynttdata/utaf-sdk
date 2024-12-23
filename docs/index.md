---
layout: docs
title: Introduction
sidebar: sidebars/docs/intro.html
sidebarHTML: true
---

The Unified Test Automation Framework (UTAF) is a development framework for building and running code-based test automation including API, UI and End-to-End tests along with Accessibility, Mobile, Performance and Security testing. The UTAF SDK contains a set of libraries used to quickly create and extend automated test suites.

There are various implementations of the UTAF SDK. Each implementation lets automation engineers build test suites in different languages such as C#, Java and JavaScript/TypeScript.

UTAF 2.0 represents a wholesale change in the way the SDK is built, published and consumed to make it more flexible, easier to improve and facilitate simpler upgrades/updates when new versions are published.

## Features

The UTAF SDK is a full-stack testing framework intended to accelerate development of automated tests without abstracting the benefits of other open-source and commercial testing tools and frameworks. The core libraries contain highly reusable features that should eliminate a lot of the common tasks quality engineers implement over and over again.

The SDK is based on a set of Framework Extensions that build upon other automation frameworks with commonly used classes, functions, types, etc. to make writing tests easier and faster. Instead of replacing the APIs provided by these frameworks, the UTAF SDK lets engineers take full advantage of the features and capabilities offered by each framework with additional helpers for common, repetitive actions.

Currently, the UTAF SDK supports these frameworks:

<details>
  <summary>.NET</summary>
  <ul>
    <li>Playwright</li>
    <li>RestSharp</li>
    <li>SpecFlow</li>
  </ul>
</details>
<details>
  <summary>Java</summary>
  <ul>
    <li>Playwright</li>
    <li>RestAssured</li>
    <li>Selenium</li>
  </ul>
</details>
<details>
  <summary>Javascript/Typescript</summary>
  <ul>
    <li>Cypress</li>
    <li>Playwright</li>
    <li>TestCafe</li>
    <li>WebDriverIO</li>
  </ul>
</details>
<details>
  <summary>Python</summary>
  <ul>
    <li>Robot</li>
  </ul>
</details>

In addition to these core capabilities, the UTAF SDK includes a variety of Adapter Libraries that eliminate the need to learn and implement code required to integrate with the most common external dependencies. These include:

- AWS services like Dynamo DB, Kinesis, Secrets Manager and more
- Azure services like Key Vault, Cosmos DB, Service Bus, Event Grid and so on
- Identity providers like Okta and Azure AD
- ERP systems like SAP

## Get Started

Create a new UTAF test suite with:

```
npx @launch-utaf/create-test-project
```

This will guide you through setting up the new test suite, asking what programming language and test automation framework you will use along with other prompts to configure the project as needed. Learn more [here](./docs/introduction/installation.md).

## Giving Feedback

You can provide both positive and negative feedback in several ways.

**GitHub Issues.** If you are comfortable giving public feedback, you can [open a GitHub issue](https://github.com/launchbynttdata/utaf-sdk/issues/new/choose) in this repository. This is the preferred way to give feedback so that other users may weigh-in, participate in the conversation, +1 issues, and share additional feedback. Issues will be triaged and, when appropriate, included in our roadmap for a future release.

**Slack Channel.** [TODO]

**Email** [TODO]

## Contributing

Contributions to the UTAF SDK are currently limited to employees of Launch by NTT Data. This group of committers use their expertise and experiences working with a vast array of clients across numerous industries along with feedback from the user community to update, improve and expand the SDK as appropriate.

## Reporting Issues and Bugs

Check [previous issues](https://github.com/launchbynttdata/utaf-sdk/issues) or [submit a new one](https://github.com/launchbynttdata/utaf-sdk/issues/new/choose).

## Related Projects

## License

This project is licensed under the terms of the [Apache license](/LICENSE).
