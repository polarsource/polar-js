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
    avatarUrl: "https://unwieldy-vision.name/",
  },
  visibility: "hidden",
  userId: "<value>",
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-01-25T11:17:56.076Z"),
    modifiedAt: new Date("2022-01-18T01:14:03.818Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://hoarse-sonnet.biz/",
    bio: "<value>",
    company: "Hoeger - Flatley",
    blog: "<value>",
    location: "<value>",
    email: "Grayson.Rice@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 646822,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 887921,
    profileSettings: {},
    featureSettings: {},
  },
  publishedAt: new Date("2022-06-06T17:12:12.382Z"),
  paidSubscribersOnly: false,
  paidSubscribersOnlyEndsAt: new Date("2024-06-13T14:44:19.237Z"),
  isPreview: false,
  isPinned: false,
  notifySubscribers: false,
  notificationsSentAt: new Date("2023-10-31T06:09:51.790Z"),
  emailSentToCount: 29242,
  ogImageUrl: "https://mysterious-sediment.info",
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