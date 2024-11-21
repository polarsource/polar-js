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
        avatarUrl: "https://old-fashioned-shore.org",
      },
      visibility: "private",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2023-01-27T22:49:57.885Z"),
        modifiedAt: new Date("2022-11-03T20:32:51.033Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://prestigious-airline.net",
        bio: "<value>",
        company: "Becker - Cremin",
        blog: "<value>",
        location: "<value>",
        email: "Juanita_Breitenberg65@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 736906,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 741334,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2022-04-29T08:52:25.241Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2022-10-20T00:37:00.901Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2023-12-02T04:42:08.759Z"),
      emailSentToCount: 380575,
      ogImageUrl: "https://muted-stool.com",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 733747,
    maxPage: 464640,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |