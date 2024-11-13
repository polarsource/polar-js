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
        avatarUrl: "https://any-deployment.net/",
      },
      visibility: "private",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2022-09-13T21:23:26.372Z"),
        modifiedAt: new Date("2024-04-27T14:10:19.519Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://assured-granny.com/",
        bio: "<value>",
        company: "Murazik - Stiedemann",
        blog: "<value>",
        location: "<value>",
        email: "Ethelyn_Spencer47@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 150525,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 85413,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2023-08-01T08:13:26.020Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2024-01-12T14:17:56.418Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2023-11-10T04:26:31.210Z"),
      emailSentToCount: 872886,
      ogImageUrl: "https://svelte-character.biz",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 918413,
    maxPage: 354705,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |