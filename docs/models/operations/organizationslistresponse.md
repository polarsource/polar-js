# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-06T17:31:00.970Z"),
        modifiedAt: new Date("2023-02-09T02:56:48.333Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "<value>",
        bio: "<value>",
        company: "Schuster - Ankunding",
        blog: "<value>",
        location: "<value>",
        email: "Lina.Smitham97@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 976460,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 878194,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 468651,
      maxPage: 509624,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |