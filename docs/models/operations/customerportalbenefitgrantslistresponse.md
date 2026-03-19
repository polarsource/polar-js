# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-07-13T01:18:49.376Z"),
        modifiedAt: new Date("2026-02-20T09:36:47.164Z"),
        id: "<value>",
        grantedAt: new Date("2024-01-28T00:16:43.776Z"),
        revokedAt: new Date("2026-02-06T08:24:40.978Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: true,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-10-05T17:24:11.012Z"),
          modifiedAt: new Date("2024-12-27T23:55:37.070Z"),
          id: "<value>",
          email: "Greg77@hotmail.com",
          emailVerified: true,
          name: "<value>",
          billingName: null,
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
          type: "individual",
        },
        benefit: {
          id: "<value>",
          createdAt: new Date("2024-10-04T20:32:44.950Z"),
          modifiedAt: new Date("2025-09-25T16:16:12.273Z"),
          type: "feature_flag",
          description: "considering kiddingly direct or",
          selectable: false,
          deletable: true,
          organizationId: "<value>",
          metadata: {
            "key": true,
          },
          organization: {
            createdAt: new Date("2024-02-09T14:46:30.040Z"),
            modifiedAt: new Date("2025-07-28T16:12:54.009Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://spotless-knight.com/",
            prorationBehavior: "prorate",
            allowCustomerUpdates: true,
          },
          properties: {},
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |