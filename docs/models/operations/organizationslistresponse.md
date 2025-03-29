# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-09T21:56:05.990Z"),
        modifiedAt: new Date("2023-12-04T10:46:27.608Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://tangible-fishery.org",
        email: "Mertie7@hotmail.com",
        website: "<value>",
        socials: [
          {
            platform: "instagram",
            url: "https://kosher-topsail.org/",
          },
        ],
        detailsSubmittedAt: new Date("2023-10-09T02:22:51.594Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Bayer LLC",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 767555,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 772832,
        profileSettings: {},
      },
    ],
    pagination: {
      totalCount: 733953,
      maxPage: 203411,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |