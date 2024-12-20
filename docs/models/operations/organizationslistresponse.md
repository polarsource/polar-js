# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-19T07:28:52.145Z"),
        modifiedAt: new Date("2024-01-22T03:42:55.455Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://ordinary-cauliflower.com/",
        bio: "<value>",
        company: "Kub - Gleichner",
        blog: "<value>",
        location: "<value>",
        email: "Joshuah2@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 953086,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 456767,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 65890,
      maxPage: 282682,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |