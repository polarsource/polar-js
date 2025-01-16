# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-06T14:25:03.717Z"),
        modifiedAt: new Date("2025-04-27T08:11:20.065Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://upbeat-alligator.com",
        bio: "<value>",
        company: "Champlin LLC",
        blog: "<value>",
        location: "<value>",
        email: "Naomie_Rosenbaum@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 90205,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 648360,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 640755,
      maxPage: 815832,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |