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
        visibility: "hidden",
        userId: "<value>",
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-08-11T15:36:46.154Z"),
          modifiedAt: new Date("2024-01-17T19:20:54.956Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "<value>",
          bio: "<value>",
          company: "Champlin - Huel",
          blog: "<value>",
          location: "<value>",
          email: "Cicero.Little@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 724168,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 399025,
          donationsEnabled: false,
          profileSettings: {},
          featureSettings: {},
        },
        publishedAt: new Date("2024-09-17T19:59:01.360Z"),
        paidSubscribersOnly: false,
        paidSubscribersOnlyEndsAt: new Date("2024-01-27T06:25:05.272Z"),
        isPreview: false,
        isPinned: false,
        notifySubscribers: false,
        notificationsSentAt: new Date("2024-02-06T18:51:30.654Z"),
        emailSentToCount: 327720,
        ogImageUrl: "<value>",
        ogDescription: "<value>",
      },
    ],
    pagination: {
      totalCount: 756779,
      maxPage: 636061,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |