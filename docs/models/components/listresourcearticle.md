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
        avatarUrl: "https://pink-simple.org",
      },
      visibility: "hidden",
      userId: "<value>",
      organizationId: "<value>",
      organization: {
        createdAt: new Date("2023-10-25T08:09:44.362Z"),
        modifiedAt: new Date("2022-01-09T14:33:29.493Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://aggravating-passport.name",
        bio: "<value>",
        company: "Cruickshank, Hoppe and Stiedemann",
        blog: "<value>",
        location: "<value>",
        email: "Rashawn5@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 178960,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 755297,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      publishedAt: new Date("2023-09-13T03:37:18.009Z"),
      paidSubscribersOnly: false,
      paidSubscribersOnlyEndsAt: new Date("2022-12-31T21:11:27.274Z"),
      isPreview: false,
      isPinned: false,
      notifySubscribers: false,
      notificationsSentAt: new Date("2024-11-16T12:38:22.784Z"),
      emailSentToCount: 841434,
      ogImageUrl: "https://distorted-formula.biz/",
      ogDescription: "<value>",
    },
  ],
  pagination: {
    totalCount: 159757,
    maxPage: 937408,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Article](../../models/components/article.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |