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
        avatarUrl: "https://possible-trick.info/",
      },
      visibility: "private",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2023-10-18T06:30:37.569Z"),
        modifiedAt: new Date("2022-08-20T12:38:00.388Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://profitable-piglet.name",
        bio: "<value>",
        company: "Durgan - Flatley",
        blog: "<value>",
        location: "<value>",
        email: "Jessyca_Schmidt@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 536263,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 149578,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2024-05-11T22:39:45.015Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2024-09-27T09:13:08.294Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2024-06-09T08:26:59.670Z"),
      emailSentToCount: 821896,
      ogImageUrl: "https://defensive-yeast.name",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 420927,
    maxPage: 888024,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |