# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-06-19T22:07:58.036Z"),
        modifiedAt: new Date("2023-09-24T15:14:15.268Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://oval-laughter.name",
        bio: "<value>",
        company: "Glover Inc",
        blog: "<value>",
        location: "<value>",
        email: "Liliana_Pacocha@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 12476,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 880332,
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
      totalCount: 729195,
      maxPage: 197424,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |