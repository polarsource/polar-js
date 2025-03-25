# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-06T11:17:28.215Z"),
        modifiedAt: new Date("2023-04-15T00:20:50.174Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://pointless-trench.info/",
        email: "Irwin5@gmail.com",
        website: "<value>",
        socials: [
          {
            platform: "instagram",
            url: "https://overdue-extension.com",
          },
        ],
        detailsSubmittedAt: new Date("2025-08-22T15:41:23.211Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Buckridge - Luettgen",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 701252,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 621095,
        profileSettings: {},
      },
    ],
    pagination: {
      totalCount: 16542,
      maxPage: 890342,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |