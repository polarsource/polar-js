# Issue

## Example Usage

```typescript
import { Issue } from "@polar-sh/sdk/models/components";

let value: Issue = {
  id: "a861729b-f462-4edc-9083-1c3883700e6e",
  platform: "github",
  number: 431108,
  title: "<value>",
  state: "open",
  issueCreatedAt: new Date("2023-03-31T12:44:44.932Z"),
  needsConfirmationSolved: false,
  funding: {},
  repository: {
    id: "49c8c29e-33bc-435a-a697-cdd9970417d9",
    platform: "github",
    isPrivate: false,
    name: "MyOrg",
    description: "but boo preside huzzah",
    stars: 1337,
    license: "<value>",
    homepage: "<value>",
    profileSettings: {},
    organization: {
      id: "0d781158-b7d6-4061-a5fd-366c001a6d47",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://giving-circumference.name",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Weimann - Lindgren",
      blog: "<value>",
      location: "<value>",
      email: "Minerva.Russel13@gmail.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
    internalOrganization: {
      createdAt: new Date("2025-12-24T17:48:53.086Z"),
      modifiedAt: new Date("2023-10-28T16:59:00.609Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://mature-knuckle.com",
      bio: "<value>",
      company: "Reynolds, Leannon and Carter",
      blog: "<value>",
      location: "<value>",
      email: "Hollis.Lynch@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 28501,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 59552,
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