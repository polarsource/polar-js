# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-15T18:15:28.299Z"),
        modifiedAt: new Date("2025-04-07T05:26:02.209Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://silver-warming.biz",
        bio: "<value>",
        company: "Lueilwitz Inc",
        blog: "<value>",
        location: "<value>",
        email: "Kari_Vandervort@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 614111,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 980995,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 441796,
      maxPage: 697969,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |