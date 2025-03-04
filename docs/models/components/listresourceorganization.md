# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2025-06-22T06:45:38.869Z"),
      modifiedAt: new Date("2023-11-09T16:12:50.253Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://orderly-puritan.net",
      bio: "<value>",
      company: "Greenfelder, Huel and Tromp",
      blog: "<value>",
      location: "<value>",
      email: "Green.Raynor36@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 518795,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 772103,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  ],
  pagination: {
    totalCount: 986735,
    maxPage: 467112,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |