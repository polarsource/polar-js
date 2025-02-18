# Issue

## Example Usage

```typescript
import { Issue } from "@polar-sh/sdk/models/components/issue.js";

let value: Issue = {
  id: "71a88eeb-9401-4539-b86c-bb806770a408",
  platform: "github",
  number: 29440,
  title: "<value>",
  state: "open",
  issueCreatedAt: new Date("2024-10-06T04:07:32.437Z"),
  needsConfirmationSolved: false,
  funding: {},
  repository: {
    id: "801d7129-50a0-4122-ac12-72b7e0d2e580",
    platform: "github",
    isPrivate: false,
    name: "MyOrg",
    description: "meanwhile ravage likely tapioca",
    stars: 1337,
    license: "<value>",
    homepage: "<value>",
    profileSettings: {},
    organization: {
      id: "937a3bc8-d38e-4bc3-a95a-8a9bc0f62ec6",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://indolent-guidance.net/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Roob and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Ignacio84@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
    internalOrganization: {
      createdAt: new Date("2023-03-26T13:23:42.622Z"),
      modifiedAt: new Date("2024-11-26T20:20:53.456Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://mushy-cod.org/",
      bio: "<value>",
      company: "Bergnaum LLC",
      blog: "<value>",
      location: "<value>",
      email: "Muhammad63@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 304419,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 355468,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  },
  pledgeBadgeCurrentlyEmbedded: false,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `platform`                                                                                                    | [components.Platforms](../../models/components/platforms.md)                                                  | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `number`                                                                                                      | *number*                                                                                                      | :heavy_check_mark:                                                                                            | GitHub #number                                                                                                |
| `title`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | GitHub issue title                                                                                            |
| `body`                                                                                                        | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | GitHub issue body                                                                                             |
| `comments`                                                                                                    | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Number of GitHub comments made on the issue                                                                   |
| `labels`                                                                                                      | [components.Label](../../models/components/label.md)[]                                                        | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `author`                                                                                                      | [components.Author](../../models/components/author.md)                                                        | :heavy_minus_sign:                                                                                            | GitHub author                                                                                                 |
| `assignees`                                                                                                   | [components.Assignee](../../models/components/assignee.md)[]                                                  | :heavy_minus_sign:                                                                                            | GitHub assignees                                                                                              |
| `reactions`                                                                                                   | [components.Reactions](../../models/components/reactions.md)                                                  | :heavy_minus_sign:                                                                                            | GitHub reactions                                                                                              |
| `state`                                                                                                       | [components.State](../../models/components/state.md)                                                          | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `issueClosedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `issueModifiedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `issueCreatedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `needsConfirmationSolved`                                                                                     | *boolean*                                                                                                     | :heavy_check_mark:                                                                                            | If a maintainer needs to mark this issue as solved                                                            |
| `confirmedSolvedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | If this issue has been marked as confirmed solved through Polar                                               |
| `funding`                                                                                                     | [components.Funding](../../models/components/funding.md)                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `repository`                                                                                                  | [components.Repository](../../models/components/repository.md)                                                | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `upfrontSplitToContributors`                                                                                  | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Share of rewrads that will be rewarded to contributors of this issue. A number between 0 and 100 (inclusive). |
| `pledgeBadgeCurrentlyEmbedded`                                                                                | *boolean*                                                                                                     | :heavy_check_mark:                                                                                            | If this issue currently has the Polar badge SVG embedded                                                      |
| `badgeCustomContent`                                                                                          | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Optional custom badge SVG promotional content                                                                 |