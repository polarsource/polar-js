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
          avatarUrl: "https://squiggly-provider.name/",
        },
        visibility: "private",
        userId: "<value>",
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-04-04T19:49:26.614Z"),
          modifiedAt: new Date("2022-01-06T19:40:31.772Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://merry-blight.com/",
          bio: "<value>",
          company: "Stokes, Corwin and Abbott",
          blog: "<value>",
          location: "<value>",
          email: "Dudley26@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 639463,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 520678,
          donationsEnabled: false,
          profileSettings: {},
          featureSettings: {},
        },
        publishedAt: new Date("2023-03-13T02:51:04.481Z"),
        paidSubscribersOnly: false,
        paidSubscribersOnlyEndsAt: new Date("2024-04-28T20:28:23.222Z"),
        isPreview: false,
        isPinned: false,
        notifySubscribers: false,
        notificationsSentAt: new Date("2022-06-04T11:44:43.665Z"),
        emailSentToCount: 967338,
        ogImageUrl: "https://pointless-appliance.net",
        ogDescription: "<value>",
      },
    ],
    pagination: {
      totalCount: 913285,
      maxPage: 524577,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceArticle](../../models/components/listresourcearticle.md) | :heavy_check_mark:                                                               | N/A                                                                              |