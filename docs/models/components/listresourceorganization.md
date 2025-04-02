# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-11-07T02:36:58.219Z"),
      modifiedAt: new Date("2023-10-11T05:45:33.677Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://simplistic-fun.com/",
      email: "Eden_Hickle@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "linkedin",
          url: "https://drab-freight.com",
        },
      ],
      detailsSubmittedAt: new Date("2023-04-09T17:59:24.322Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Langworth - McKenzie",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 606192,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 940766,
      profileSettings: {},
    },
  ],
  pagination: {
    totalCount: 234649,
    maxPage: 898086,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |