# ArticlesListResponse

## Example Usage

```typescript
import { ArticlesListResponse } from "@polar-sh/sdk/models/operations";

let value: ArticlesListResponse = {
    result: {
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
                visibility: "public",
                userId: "<value>",
                organizationId: "<value>",
                organization: {
                    createdAt: new Date("2023-01-29T22:49:38.323Z"),
                    modifiedAt: new Date("2022-11-21T13:40:18.488Z"),
                    id: "<value>",
                    name: "<value>",
                    slug: "<value>",
                    avatarUrl: "<value>",
                    bio: "<value>",
                    company: "Carter - Pfeffer",
                    blog: "<value>",
                    location: "<value>",
                    email: "Shania.Jerde21@gmail.com",
                    twitterUsername: "<value>",
                    pledgeMinimumAmount: 692472,
                    pledgeBadgeShowAmount: false,
                    defaultUpfrontSplitToContributors: 565189,
                    donationsEnabled: false,
                    profileSettings: {},
                    featureSettings: {},
                },
                publishedAt: new Date("2023-09-13T23:53:04.201Z"),
                paidSubscribersOnly: false,
                paidSubscribersOnlyEndsAt: new Date("2024-08-06T03:39:28.235Z"),
                isPreview: false,
                isPinned: false,
                notifySubscribers: false,
                notificationsSentAt: new Date("2022-10-18T20:48:18.626Z"),
                emailSentToCount: 508969,
                ogImageUrl: "<value>",
                ogDescription: "<value>",
            },
        ],
        pagination: {
            totalCount: 523248,
            maxPage: 916723,
        },
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |