# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-02T15:28:04.729Z"),
        modifiedAt: new Date("2022-10-16T19:09:53.500Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://distant-divine.net/",
        bio: "<value>",
        company: "Gibson LLC",
        blog: "<value>",
        location: "<value>",
        email: "Domenica_Gorczany2@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 173724,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 706309,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 978687,
      maxPage: 588309,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |