# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-16T01:02:51.856Z"),
        modifiedAt: new Date("2024-11-12T14:45:50.022Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://murky-mouser.net",
        email: "Melyssa3@hotmail.com",
        website: "<value>",
        socials: [
          {
            platform: "tiktok",
            url: "https://jaunty-allegation.com/",
          },
        ],
        detailsSubmittedAt: new Date("2024-08-26T02:17:15.307Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "invoice",
        },
        bio: "<value>",
        company: "West - O'Hara",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 43285,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 296266,
        profileSettings: {},
      },
    ],
    pagination: {
      totalCount: 182953,
      maxPage: 958209,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |