# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-02-27T05:06:06.011Z"),
      modifiedAt: new Date("2023-01-02T19:45:35.845Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://baggy-receptor.biz",
      bio: "<value>",
      company: "Mills - Wyman",
      blog: "<value>",
      location: "<value>",
      email: "Santino_Lang37@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 15406,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 386742,
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
    totalCount: 990552,
    maxPage: 463073,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |