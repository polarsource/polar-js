# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-25T06:19:18.187Z"),
        modifiedAt: new Date("2025-04-09T20:59:12.712Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://limited-schedule.name/",
        bio: "<value>",
        company: "Dare Group",
        blog: "<value>",
        location: "<value>",
        email: "Eddie51@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 415763,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 413092,
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
      totalCount: 557721,
      maxPage: 859870,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |