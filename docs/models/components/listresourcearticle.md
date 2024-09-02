# ListResourceArticle

## Example Usage

```typescript
import { ListResourceArticle } from "@polar-sh/sdk/models/components";

let value: ListResourceArticle = {
    items: [
        {
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
                createdAt: new Date("2023-01-10T12:01:37.848Z"),
                modifiedAt: new Date("2023-12-02T08:58:34.766Z"),
                id: "<value>",
                name: "<value>",
                slug: "<value>",
                avatarUrl: "<value>",
                bio: "<value>",
                company: "Lowe, Thiel and Goldner",
                blog: "<value>",
                location: "<value>",
                email: "Caleigh.Grady63@yahoo.com",
                twitterUsername: "<value>",
                pledgeMinimumAmount: 710337,
                pledgeBadgeShowAmount: false,
                defaultUpfrontSplitToContributors: 299643,
                donationsEnabled: false,
                profileSettings: {},
                featureSettings: {},
            },
            publishedAt: new Date("2022-01-09T15:23:00.369Z"),
            paidSubscribersOnly: false,
            paidSubscribersOnlyEndsAt: new Date("2023-05-20T09:37:09.099Z"),
            isPreview: false,
            isPinned: false,
            notifySubscribers: false,
            notificationsSentAt: new Date("2023-02-13T10:57:01.355Z"),
            emailSentToCount: 24527,
            ogImageUrl: "<value>",
            ogDescription: "<value>",
        },
    ],
    pagination: {
        totalCount: 530537,
        maxPage: 558065,
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |