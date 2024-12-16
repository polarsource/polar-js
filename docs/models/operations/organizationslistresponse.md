# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-27T20:05:24.919Z"),
        modifiedAt: new Date("2024-08-13T23:23:22.191Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://serpentine-flat.net/",
        bio: "<value>",
        company: "Pfannerstill - Oberbrunner",
        blog: "<value>",
        location: "<value>",
        email: "Lonzo.Morar@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 311169,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 684408,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 950003,
      maxPage: 503910,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |