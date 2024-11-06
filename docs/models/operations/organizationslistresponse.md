# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-05T13:13:41.181Z"),
        modifiedAt: new Date("2022-09-16T11:23:00.351Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://productive-unibody.net",
        bio: "<value>",
        company: "Kuhn, Denesik and Zieme",
        blog: "<value>",
        location: "<value>",
        email: "Janiya_Welch@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 254382,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 265303,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 127294,
      maxPage: 525809,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |