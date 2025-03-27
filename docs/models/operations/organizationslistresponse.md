# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-24T20:03:18.837Z"),
        modifiedAt: new Date("2024-06-14T11:17:00.227Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://frizzy-toaster.org",
        email: "Leopold.Fisher@yahoo.com",
        website: "<value>",
        socials: [
          {
            platform: "other",
            url: "https://shameful-consistency.org",
          },
        ],
        detailsSubmittedAt: new Date("2025-05-20T04:09:40.373Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "invoice",
        },
        bio: "<value>",
        company: "Little, Predovic and Shanahan",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 230328,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 343271,
        profileSettings: {},
      },
    ],
    pagination: {
      totalCount: 806742,
      maxPage: 371215,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |