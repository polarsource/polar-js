# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-02T02:49:14.543Z"),
        modifiedAt: new Date("2023-10-16T23:35:49.294Z"),
        id: "<value>",
        grantedAt: new Date("2023-12-21T08:10:48.729Z"),
        revokedAt: new Date("2025-10-16T01:02:51.856Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-11-12T14:45:50.022Z"),
          modifiedAt: new Date("2025-04-17T03:17:03.175Z"),
          id: "<value>",
          email: "Lance_West@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Samoa",
          },
          taxId: [
            "<id>",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2025-08-22T10:25:37.037Z"),
          modifiedAt: new Date("2025-01-07T03:06:28.959Z"),
          id: "<value>",
          description: "weakly pertain instead dental",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2024-12-03T04:34:28.027Z"),
            modifiedAt: new Date("2023-03-07T06:28:40.969Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://sorrowful-ceramics.org",
            bio: "<value>",
            company: "Rodriguez - Volkman",
            blog: "<value>",
            location: "<value>",
            email: "Kenya.Ernser83@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 587339,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 885479,
            profileSettings: {},
            featureSettings: {},
          },
          properties: {
            guildId: "<id>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 82014,
      maxPage: 170016,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |