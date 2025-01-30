# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-01-11T00:13:53.113Z"),
      modifiedAt: new Date("2025-03-12T10:20:40.365Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://zealous-cannon.com",
      bio: "<value>",
      company: "Marks, Pollich and Romaguera",
      blog: "<value>",
      location: "<value>",
      email: "Fleta_Hoeger89@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 8906,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 256756,
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
    totalCount: 566826,
    maxPage: 946161,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |