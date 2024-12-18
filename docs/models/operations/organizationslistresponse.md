# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-24T18:23:02.040Z"),
        modifiedAt: new Date("2022-06-21T14:07:26.510Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://enlightened-duster.biz/",
        bio: "<value>",
        company: "Langosh LLC",
        blog: "<value>",
        location: "<value>",
        email: "Rudy.Lynch78@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 608952,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 269593,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 234671,
      maxPage: 327837,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |