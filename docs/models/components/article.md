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
    visibility: "public",
    userId: "<value>",
    organizationId: "<value>",
    organization: {
        createdAt: new Date("2023-11-28T00:32:02.177Z"),
        modifiedAt: new Date("2024-02-18T12:41:59.739Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Adams and Sons",
        blog: "<value>",
        location: "<value>",
        email: "Alberto_Lehner@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 361151,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 89494,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
    },
    publishedAt: new Date("2023-07-05T23:16:18.690Z"),
    paidSubscribersOnly: false,
    paidSubscribersOnlyEndsAt: new Date("2023-03-21T21:54:24.703Z"),
    isPreview: false,
    isPinned: false,
    notifySubscribers: false,
    notificationsSentAt: new Date("2022-06-18T09:01:07.876Z"),
    emailSentToCount: 24313,
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