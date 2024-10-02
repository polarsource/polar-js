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
        avatarUrl: "https://impish-asset.biz",
      },
      visibility: "hidden",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2023-04-09T08:45:46.248Z"),
        modifiedAt: new Date("2023-05-18T02:43:03.250Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://pricey-ice-cream.com/",
        bio: "<value>",
        company: "Donnelly, Dach and Roob",
        blog: "<value>",
        location: "<value>",
        email: "Leopold.Kemmer20@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 970927,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 302413,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2024-07-08T19:40:06.440Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2023-04-07T03:34:52.031Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2024-08-02T21:26:59.664Z"),
      emailSentToCount: 662787,
      ogImageUrl: "https://chilly-alligator.com/",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 220314,
    maxPage: 785583,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |