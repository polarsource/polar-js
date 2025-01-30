# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-14T14:36:00.166Z"),
        modifiedAt: new Date("2024-02-13T05:07:31.431Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://lavish-markup.org",
        bio: "<value>",
        company: "Mertz - Pagac",
        blog: "<value>",
        location: "<value>",
        email: "Kyleigh_Grant@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 728871,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 440191,
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
      totalCount: 474816,
      maxPage: 53613,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |