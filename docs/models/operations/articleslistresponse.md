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
          avatarUrl: "https://negligible-singing.com/",
        },
        visibility: "private",
        userId: "<value>",
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2022-02-15T03:11:35.631Z"),
          modifiedAt: new Date("2024-06-13T19:08:19.699Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://average-order.name",
          bio: "<value>",
          company: "Cormier - Rutherford",
          blog: "<value>",
          location: "<value>",
          email: "Willy_Zemlak-Carter@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 757407,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 203621,
          profileSettings: {},
          featureSettings: {},
        },
        publishedAt: new Date("2023-09-13T16:15:37.701Z"),
        paidSubscribersOnly: false,
        paidSubscribersOnlyEndsAt: new Date("2022-07-23T15:43:25.483Z"),
        isPreview: false,
        isPinned: false,
        notifySubscribers: false,
        notificationsSentAt: new Date("2022-04-25T18:58:42.780Z"),
        emailSentToCount: 116558,
        ogImageUrl: "https://accomplished-hippodrome.name/",
        ogDescription: "<value>",
      },
    ],
    pagination: {
      totalCount: 401688,
      maxPage: 85794,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |