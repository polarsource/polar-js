# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2025-09-05T20:27:28.734Z"),
      modifiedAt: new Date("2023-03-09T01:30:44.677Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://pale-nerve.net",
      bio: "<value>",
      company: "Rogahn, D'Amore and Wilkinson",
      blog: "<value>",
      location: "<value>",
      email: "Elinor_Schoen@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 9836,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 35492,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
  ],
  pagination: {
    totalCount: 815584,
    maxPage: 349346,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |