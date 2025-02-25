# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-05T04:18:33.269Z"),
        modifiedAt: new Date("2023-11-11T12:32:14.872Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://concrete-disk.info/",
        bio: "<value>",
        company: "Pagac - Satterfield",
        blog: "<value>",
        location: "<value>",
        email: "Monroe63@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 559947,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 667476,
        profileSettings: {},
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "invoice",
        },
      },
    ],
    pagination: {
      totalCount: 551002,
      maxPage: 754525,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |