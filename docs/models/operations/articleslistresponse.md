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
          avatarUrl: "https://vast-substitution.net",
        },
        visibility: "private",
        userId: "<value>",
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2022-10-30T20:46:20.876Z"),
          modifiedAt: new Date("2023-02-09T23:56:49.919Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://noteworthy-pigsty.biz/",
          bio: "<value>",
          company: "Jacobi - Hackett",
          blog: "<value>",
          location: "<value>",
          email: "Shyanne54@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 98610,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 801075,
          donationsEnabled: false,
          profileSettings: {},
          featureSettings: {},
        },
        publishedAt: new Date("2022-02-15T03:11:35.631Z"),
        paidSubscribersOnly: false,
        paidSubscribersOnlyEndsAt: new Date("2024-06-13T19:08:19.699Z"),
        isPreview: false,
        isPinned: false,
        notifySubscribers: false,
        notificationsSentAt: new Date("2024-06-04T02:09:29.897Z"),
        emailSentToCount: 51007,
        ogImageUrl: "https://meager-comestible.com",
        ogDescription: "<value>",
      },
    ],
    pagination: {
      totalCount: 773259,
      maxPage: 567693,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |