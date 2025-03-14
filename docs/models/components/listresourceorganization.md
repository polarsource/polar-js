# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2025-04-27T05:25:51.367Z"),
      modifiedAt: new Date("2024-01-22T05:57:34.526Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://whopping-pomelo.com/",
      email: "Destini.Russel-Pagac80@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "github",
          url: "https://accurate-baritone.org",
        },
      ],
      detailsSubmittedAt: new Date("2023-10-03T16:54:50.541Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Bruen and Sons",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 207391,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 695427,
      profileSettings: {},
    },
  ],
  pagination: {
    totalCount: 380853,
    maxPage: 544760,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |