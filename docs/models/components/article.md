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
    avatarUrl: "https://yellowish-resolve.info",
  },
  visibility: "private",
  userId: "<value>",
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-03-11T04:48:45.754Z"),
    modifiedAt: new Date("2022-12-10T00:54:33.907Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://cooperative-fuel.name",
    bio: "<value>",
    company: "Pagac and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Noah.Grady@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 507819,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 211584,
    donationsEnabled: false,
    profileSettings: {},
    featureSettings: {},
  },
  publishedAt: new Date("2023-06-26T04:55:39.703Z"),
  paidSubscribersOnly: false,
  paidSubscribersOnlyEndsAt: new Date("2024-06-09T18:38:23.027Z"),
  isPreview: false,
  isPinned: false,
  notifySubscribers: false,
  notificationsSentAt: new Date("2024-08-25T15:21:53.101Z"),
  emailSentToCount: 666762,
  ogImageUrl: "https://trusty-heroine.biz/",
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