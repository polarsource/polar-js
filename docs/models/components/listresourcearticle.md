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
        avatarUrl: "https://insidious-impostor.com/",
      },
      visibility: "hidden",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2023-05-10T06:11:55.200Z"),
        modifiedAt: new Date("2022-01-19T09:36:37.534Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://discrete-comestible.net",
        bio: "<value>",
        company: "Moore Group",
        blog: "<value>",
        location: "<value>",
        email: "Albin30@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 420757,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 862130,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2023-12-28T09:57:19.018Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2022-01-08T18:33:32.882Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2022-05-03T07:31:56.359Z"),
      emailSentToCount: 31345,
      ogImageUrl: "https://electric-schnitzel.net/",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 244713,
    maxPage: 390423,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |