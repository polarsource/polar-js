# Issue

## Example Usage

```typescript
import { Issue } from "@polar-sh/sdk/models/components";

let value: Issue = {
  id: "03b2937d-4a71-45df-ad25-d8cc157fe616",
  platform: "github",
  number: 904398,
  title: "<value>",
  state: "open",
  issueCreatedAt: new Date("2023-12-05T12:21:44.955Z"),
  needsConfirmationSolved: false,
  funding: {},
  repository: {
    id: "a8327ccf-660d-4ac7-9e01-61193aed31ff",
    platform: "github",
    isPrivate: false,
    name: "MyOrg",
    description: "beyond political inasmuch deduction cop ack",
    stars: 1337,
    license: "<value>",
    homepage: "<value>",
    profileSettings: {},
    organization: {
      id: "5a060d2a-42e9-4e4d-8f6e-55ff3d5fde94",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://reckless-release.biz",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Kertzmann Group",
      blog: "<value>",
      location: "<value>",
      email: "Doug_Dooley@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
    internalOrganization: {
      createdAt: new Date("2023-05-14T15:19:31.084Z"),
      modifiedAt: new Date("2024-11-21T11:58:20.036Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://well-to-do-grass.name/",
      bio: "<value>",
      company: "Stoltenberg - Schneider",
      blog: "<value>",
      location: "<value>",
      email: "Tamara.Rolfson@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 65582,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 226545,
      profileSettings: {},
      featureSettings: {},
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