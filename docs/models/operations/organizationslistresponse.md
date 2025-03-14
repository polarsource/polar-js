# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-21T22:44:43.009Z"),
        modifiedAt: new Date("2023-03-11T14:53:21.190Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://obvious-meatloaf.biz/",
        email: "Corine.Homenick4@gmail.com",
        website: "<value>",
        socials: [
          {
            platform: "linkedin",
            url: "https://vivacious-developmental.com",
          },
        ],
        detailsSubmittedAt: new Date("2023-02-02T22:34:01.781Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Emard Inc",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 119733,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 147468,
        profileSettings: {},
      },
    ],
    pagination: {
      totalCount: 631146,
      maxPage: 315515,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |