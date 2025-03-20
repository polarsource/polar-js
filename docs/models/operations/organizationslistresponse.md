# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-05-07T19:52:37.336Z"),
        modifiedAt: new Date("2024-02-26T15:17:44.821Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://finished-disappointment.name/",
        email: "Alford_Barrows@hotmail.com",
        website: "<value>",
        socials: [
          {
            platform: "instagram",
            url: "https://frizzy-toaster.org",
          },
        ],
        detailsSubmittedAt: new Date("2024-07-02T20:27:58.335Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Fisher Group",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 889946,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 391395,
        profileSettings: {},
      },
    ],
    pagination: {
      totalCount: 908754,
      maxPage: 693429,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |