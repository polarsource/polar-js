# Issue

## Example Usage

```typescript
import { Issue } from "@polar-sh/sdk/models/components";

let value: Issue = {
  id: "60615fd3-66c0-401a-b6d4-7b85282f82b1",
  platform: "github",
  number: 457289,
  title: "<value>",
  state: "open",
  issueCreatedAt: new Date("2023-02-10T18:47:56.756Z"),
  needsConfirmationSolved: false,
  funding: {},
  repository: {
    id: "f4f881fb-8126-4581-9080-0606336156de",
    platform: "github",
    isPrivate: false,
    name: "MyOrg",
    description: "since gee whoever beside prance",
    stars: 1337,
    license: "<value>",
    homepage: "<value>",
    profileSettings: {},
    organization: {
      id: "8300b340-2d3f-424d-964b-0ed1cf79a4a7",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://stark-trick.org",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Moen - Predovic",
      blog: "<value>",
      location: "<value>",
      email: "Donnell.Batz@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
    internalOrganization: {
      createdAt: new Date("2023-08-09T13:08:06.938Z"),
      modifiedAt: new Date("2024-05-06T05:31:28.003Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://advanced-charlatan.name/",
      bio: "<value>",
      company: "O'Conner, Carter and Schuster",
      blog: "<value>",
      location: "<value>",
      email: "Aron.Farrell@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 431035,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 103982,
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