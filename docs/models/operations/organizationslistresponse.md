# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-06-26T22:34:08.319Z"),
        modifiedAt: new Date("2025-12-06T06:30:21.750Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://untidy-cow.name/",
        bio: "<value>",
        company: "Schimmel, O'Reilly and Zulauf",
        blog: "<value>",
        location: "<value>",
        email: "Leopoldo.Raynor76@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 148673,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 290460,
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
      totalCount: 584312,
      maxPage: 346049,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |