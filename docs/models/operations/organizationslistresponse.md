# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-18T10:27:53.946Z"),
        modifiedAt: new Date("2024-03-13T11:39:05.439Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://foolish-help.info/",
        bio: "<value>",
        company: "Quitzon Group",
        blog: "<value>",
        location: "<value>",
        email: "Carleton82@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 23823,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 325000,
        profileSettings: {},
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
      },
    ],
    pagination: {
      totalCount: 153222,
      maxPage: 171654,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |