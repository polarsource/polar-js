# Issue

## Example Usage

```typescript
import { Issue } from "@polar-sh/sdk/models/components";

let value: Issue = {
  id: "d0c8d36b-d7d8-4fe6-8fc8-fb314b86c0db",
  number: 389023,
  title: "<value>",
  state: "open",
  issueCreatedAt: new Date("2022-01-13T22:03:52.889Z"),
  needsConfirmationSolved: false,
  funding: {},
  repository: {
    id: "f753cb0c-1f57-40d4-b8e2-d8ed710d7ae4",
    isPrivate: false,
    name: "MyOrg",
    description: "yet beside healthily",
    stars: 1337,
    license: "<value>",
    homepage: "<value>",
    profileSettings: {},
    organization: {
      id: "59afe908-680f-4041-a856-ce247164e3b3",
      name: "<value>",
      avatarUrl: "https://lavish-skean.biz",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Wunsch Group",
      blog: "<value>",
      location: "<value>",
      email: "Elda_Stark@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
    internalOrganization: {
      createdAt: new Date("2022-07-22T04:14:56.694Z"),
      modifiedAt: new Date("2023-09-16T05:19:36.435Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://rewarding-atrium.biz/",
      bio: "<value>",
      company: "Gottlieb - Schulist",
      blog: "<value>",
      location: "<value>",
      email: "April.Cormier19@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 183975,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 298735,
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