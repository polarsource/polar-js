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
          avatarUrl: "https://powerful-railway.com/",
        },
        visibility: "hidden",
        userId: "<value>",
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-12-16T17:29:07.234Z"),
          modifiedAt: new Date("2024-07-24T03:46:55.765Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://willing-doing.com/",
          bio: "<value>",
          company: "Gerhold and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Elton_Rau@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 5310,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 11355,
          donationsEnabled: false,
          profileSettings: {},
          featureSettings: {},
        },
        publishedAt: new Date("2023-07-15T07:10:40.441Z"),
        paidSubscribersOnly: false,
        paidSubscribersOnlyEndsAt: new Date("2022-04-02T06:53:09.349Z"),
        isPreview: false,
        isPinned: false,
        notifySubscribers: false,
        notificationsSentAt: new Date("2022-02-25T23:29:21.949Z"),
        emailSentToCount: 965517,
        ogImageUrl: "https://crooked-cd.org",
        ogDescription: "<value>",
      },
    ],
    pagination: {
      totalCount: 278325,
      maxPage: 185897,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |