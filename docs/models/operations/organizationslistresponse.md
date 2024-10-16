# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-07T16:17:56.157Z"),
        modifiedAt: new Date("2023-01-17T14:50:27.103Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://bare-sustenance.org/",
        bio: "<value>",
        company: "Harvey - Daniel",
        blog: "<value>",
        location: "<value>",
        email: "Stella.Wuckert@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 367917,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 342342,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 757364,
      maxPage: 314573,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |