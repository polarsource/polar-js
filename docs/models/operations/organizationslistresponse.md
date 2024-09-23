# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-16T13:37:49.640Z"),
        modifiedAt: new Date("2022-06-12T08:41:49.943Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Kris, Kuphal and Nikolaus",
        blog: "<value>",
        location: "<value>",
        email: "Brielle_Dickens22@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 862192,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 972920,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 960835,
      maxPage: 906556,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |