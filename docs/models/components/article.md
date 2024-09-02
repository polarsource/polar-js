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
        avatarUrl: "<value>",
    },
    visibility: "private",
    userId: "<value>",
    organizationId: "<value>",
    organization: {
        createdAt: new Date("2023-01-31T19:43:46.202Z"),
        modifiedAt: new Date("2022-04-09T02:03:52.155Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Jaskolski - Cremin",
        blog: "<value>",
        location: "<value>",
        email: "Herminia_Heathcote0@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 279068,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 968865,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
    },
    publishedAt: new Date("2022-08-18T21:15:45.806Z"),
    paidSubscribersOnly: false,
    paidSubscribersOnlyEndsAt: new Date("2024-01-28T05:16:06.976Z"),
    isPreview: false,
    isPinned: false,
    notifySubscribers: false,
    notificationsSentAt: new Date("2022-05-07T19:27:28.518Z"),
    emailSentToCount: 99416,
    ogImageUrl: "<value>",
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
| `organization`                                                                                | [components.OrganizationOutput](../../models/components/organizationoutput.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
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