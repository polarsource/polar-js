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
    avatarUrl: "https://fond-draw.biz",
  },
  visibility: "hidden",
  userId: "<value>",
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2022-09-19T22:20:10.589Z"),
    modifiedAt: new Date("2022-07-27T22:36:26.348Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://kaleidoscopic-plastic.info",
    bio: "<value>",
    company: "Kutch LLC",
    blog: "<value>",
    location: "<value>",
    email: "Malika.Corkery@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 224402,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 773225,
    profileSettings: {},
    featureSettings: {},
  },
  publishedAt: new Date("2024-02-28T15:11:58.405Z"),
  paidSubscribersOnly: false,
  paidSubscribersOnlyEndsAt: new Date("2024-09-28T06:46:47.521Z"),
  isPreview: false,
  isPinned: false,
  notifySubscribers: false,
  notificationsSentAt: new Date("2024-03-09T22:34:08.540Z"),
  emailSentToCount: 107145,
  ogImageUrl: "https://indelible-disposer.name",
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