# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-26T02:22:10.699Z"),
        modifiedAt: new Date("2023-11-08T15:01:16.630Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://weekly-necklace.org/",
        email: "Eileen.Mohr@hotmail.com",
        website: "<value>",
        socials: [
          {
            platform: "x",
            url: "https://needy-approach.net/",
          },
        ],
        detailsSubmittedAt: new Date("2024-03-06T00:25:52.572Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "invoice",
        },
        bio: "<value>",
        company: "Bernhard, Cummings and Runolfsson",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 933659,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 34591,
        profileSettings: {},
      },
    ],
    pagination: {
      totalCount: 60497,
      maxPage: 482627,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |