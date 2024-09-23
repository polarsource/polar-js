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
        createdAt: new Date("2024-06-29T04:50:59.216Z"),
        modifiedAt: new Date("2022-03-05T11:14:44.230Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Bashirian - Will",
        blog: "<value>",
        location: "<value>",
        email: "Viola.Schmitt@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 657862,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 359453,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2024-09-13T19:15:55.610Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2024-12-13T16:03:43.381Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2022-02-03T08:20:20.613Z"),
      emailSentToCount: 193623,
      ogImageUrl: "<value>",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 112250,
    maxPage: 42364,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |