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
          avatarUrl: "https://shabby-airmail.info",
        },
        visibility: "hidden",
        userId: "<value>",
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-07-24T03:46:55.765Z"),
          modifiedAt: new Date("2023-06-05T22:56:35.057Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://favorite-adult.info",
          bio: "<value>",
          company: "Senger - Feest",
          blog: "<value>",
          location: "<value>",
          email: "Paula_Lynch41@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 11355,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 511222,
          donationsEnabled: false,
          profileSettings: {},
          featureSettings: {},
        },
        publishedAt: new Date("2022-04-02T06:53:09.349Z"),
        paidSubscribersOnly: false,
        paidSubscribersOnlyEndsAt: new Date("2022-02-25T23:29:21.949Z"),
        isPreview: false,
        isPinned: false,
        notifySubscribers: false,
        notificationsSentAt: new Date("2024-11-24T04:56:58.834Z"),
        emailSentToCount: 859003,
        ogImageUrl: "https://abandoned-tuxedo.biz/",
        ogDescription: "<value>",
      },
    ],
    pagination: {
      totalCount: 185897,
      maxPage: 691508,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |