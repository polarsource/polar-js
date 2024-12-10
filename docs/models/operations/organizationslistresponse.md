# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-03-07T13:13:15.838Z"),
        modifiedAt: new Date("2022-09-03T16:15:30.511Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://raw-ad.name/",
        bio: "<value>",
        company: "Harvey - Kemmer",
        blog: "<value>",
        location: "<value>",
        email: "Greyson38@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 769620,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 582851,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 547835,
      maxPage: 49996,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |