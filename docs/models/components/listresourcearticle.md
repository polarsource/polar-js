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
      visibility: "hidden",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2024-03-22T03:31:31.298Z"),
        modifiedAt: new Date("2023-02-28T23:06:04.973Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Lehner, Mueller and Welch",
        blog: "<value>",
        location: "<value>",
        email: "Sister.Doyle63@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 676243,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 548361,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2024-08-21T15:23:28.417Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2022-10-26T20:39:23.963Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2023-08-19T20:54:27.128Z"),
      emailSentToCount: 148268,
      ogImageUrl: "<value>",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 282699,
    maxPage: 856303,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |