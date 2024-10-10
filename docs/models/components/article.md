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
    avatarUrl: "https://bleak-median.com",
  },
  visibility: "private",
  userId: "<value>",
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2023-04-30T01:03:37.412Z"),
    modifiedAt: new Date("2024-09-30T03:17:45.166Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://wry-bakeware.com/",
    bio: "<value>",
    company: "Sanford, Franey and Franecki",
    blog: "<value>",
    location: "<value>",
    email: "Tyra_Sipes@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 986941,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 95645,
    donationsEnabled: false,
    profileSettings: {},
    featureSettings: {},
  },
  publishedAt: new Date("2023-05-02T03:02:44.155Z"),
  paidSubscribersOnly: false,
  paidSubscribersOnlyEndsAt: new Date("2024-04-18T06:42:06.014Z"),
  isPreview: false,
  isPinned: false,
  notifySubscribers: false,
  notificationsSentAt: new Date("2024-12-20T13:50:06.096Z"),
  emailSentToCount: 119716,
  ogImageUrl: "https://sleepy-mythology.org/",
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