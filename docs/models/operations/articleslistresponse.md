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
          avatarUrl: "https://sore-merit.org/",
        },
        visibility: "private",
        userId: "<value>",
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-12-23T23:06:45.346Z"),
          modifiedAt: new Date("2022-05-11T00:03:45.342Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://exhausted-impostor.net",
          bio: "<value>",
          company: "Mann - Denesik",
          blog: "<value>",
          location: "<value>",
          email: "Beulah.Abshire@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 85794,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 62688,
          profileSettings: {},
          featureSettings: {},
        },
        publishedAt: new Date("2022-11-01T19:34:36.306Z"),
        paidSubscribersOnly: false,
        paidSubscribersOnlyEndsAt: new Date("2022-07-05T13:36:03.643Z"),
        isPreview: false,
        isPinned: false,
        notifySubscribers: false,
        notificationsSentAt: new Date("2024-11-23T17:51:29.432Z"),
        emailSentToCount: 151230,
        ogImageUrl: "https://outrageous-metal.name",
        ogDescription: "<value>",
      },
    ],
    pagination: {
      totalCount: 971764,
      maxPage: 363845,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |