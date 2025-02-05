# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-06-27T14:30:01.915Z"),
        modifiedAt: new Date("2024-12-15T19:44:40.318Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://troubled-term.name/",
        bio: "<value>",
        company: "Lubowitz, Stiedemann and Gutmann",
        blog: "<value>",
        location: "<value>",
        email: "Francesco_Crist75@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 469513,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 784207,
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
      totalCount: 418870,
      maxPage: 176942,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |