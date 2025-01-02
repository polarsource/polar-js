# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-03T03:15:16.751Z"),
        modifiedAt: new Date("2024-04-03T22:26:30.922Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://ultimate-numeric.biz/",
        bio: "<value>",
        company: "Dooley - Gleason",
        blog: "<value>",
        location: "<value>",
        email: "Lowell_Lindgren26@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 276086,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 940723,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 20512,
      maxPage: 121552,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |