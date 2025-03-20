# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-01-19T15:23:14.662Z"),
      modifiedAt: new Date("2023-04-30T08:58:38.503Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://haunting-duster.com",
      email: "Demetrius.Price@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "facebook",
          url: "https://able-godparent.info/",
        },
      ],
      detailsSubmittedAt: new Date("2024-02-03T19:47:42.976Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Buckridge - Feest",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 513733,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 725902,
      profileSettings: {},
    },
  ],
  pagination: {
    totalCount: 903664,
    maxPage: 267095,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |