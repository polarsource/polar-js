# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-08T08:38:32.225Z"),
        modifiedAt: new Date("2025-04-26T09:35:14.757Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://thorough-hyena.com/",
        bio: "<value>",
        company: "Hammes and Sons",
        blog: "<value>",
        location: "<value>",
        email: "Catherine.Fritsch98@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 744608,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 745018,
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
      totalCount: 882332,
      maxPage: 89104,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |