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
      visibility: "public",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2023-10-12T02:01:44.094Z"),
        modifiedAt: new Date("2022-10-11T12:54:20.689Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Emard, Jaskolski and McClure",
        blog: "<value>",
        location: "<value>",
        email: "Werner45@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 970076,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 401713,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2022-01-28T22:40:56.604Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2022-09-30T06:16:03.578Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2024-08-31T07:06:05.899Z"),
      emailSentToCount: 505866,
      ogImageUrl: "<value>",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 708609,
    maxPage: 310381,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |