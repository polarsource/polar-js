# Article

## Example Usage

```typescript
import { Article } from "@polar-sh/sdk/models/components";

let value: Article = {
  id: "<value>",
  slug: "<value>",
  title: "<value>",
  body: "<value>",
  byline: {
    name: "<value>",
    avatarUrl: "https://talkative-suitcase.com",
  },
  visibility: "hidden",
  userId: "<value>",
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-12-17T16:29:24.726Z"),
    modifiedAt: new Date("2022-04-15T19:51:11.119Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://sneaky-wombat.com/",
    bio: "<value>",
    company: "Romaguera LLC",
    blog: "<value>",
    location: "<value>",
    email: "Bart_Monahan@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 604325,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 7852,
    donationsEnabled: false,
    profileSettings: {},
    featureSettings: {},
  },
  publishedAt: new Date("2024-01-26T04:13:10.018Z"),
  paidSubscribersOnly: false,
  paidSubscribersOnlyEndsAt: new Date("2022-01-17T22:17:36.774Z"),
  isPreview: false,
  isPinned: false,
  notifySubscribers: false,
  notificationsSentAt: new Date("2023-12-11T05:00:44.609Z"),
  emailSentToCount: 505896,
  ogImageUrl: "https://dapper-godparent.org",
  ogDescription: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `body`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `byline`                                                                                      | [components.BylineProfile](../../models/components/bylineprofile.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibility`                                                                                  | [components.ArticleVisibility](../../models/components/articlevisibility.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publishedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paidSubscribersOnly`                                                                         | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paidSubscribersOnlyEndsAt`                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isPreview`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isPinned`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notifySubscribers`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notificationsSentAt`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `emailSentToCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ogImageUrl`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ogDescription`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |