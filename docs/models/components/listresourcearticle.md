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
        avatarUrl: "https://unwieldy-cake.biz/",
      },
      visibility: "private",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2022-10-06T03:14:11.675Z"),
        modifiedAt: new Date("2022-06-30T09:23:23.018Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://black-worth.org",
        bio: "<value>",
        company: "Murphy, Fahey and Schmeler",
        blog: "<value>",
        location: "<value>",
        email: "Kristofer.Rohan@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 152359,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 414720,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2024-09-24T21:12:18.195Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2023-05-29T14:57:16.680Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2022-10-03T22:43:14.073Z"),
      emailSentToCount: 532335,
      ogImageUrl: "https://free-scenario.name/",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 23984,
    maxPage: 569876,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |