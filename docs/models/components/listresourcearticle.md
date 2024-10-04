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
        avatarUrl: "https://wilted-euphonium.org/",
      },
      visibility: "hidden",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2024-08-02T21:26:59.664Z"),
        modifiedAt: new Date("2023-12-28T09:57:19.018Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://chilly-alligator.com/",
        bio: "<value>",
        company: "Schaden - Rice",
        blog: "<value>",
        location: "<value>",
        email: "Giovanna11@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 441646,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 915272,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2022-06-17T16:03:26.154Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2024-12-21T09:00:48.902Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2022-03-06T23:55:50.419Z"),
      emailSentToCount: 58922,
      ogImageUrl: "https://soupy-diagram.biz",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 472655,
    maxPage: 943603,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |