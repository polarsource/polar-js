# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-15T03:00:35.833Z"),
        modifiedAt: new Date("2024-07-13T01:18:49.376Z"),
        id: "<value>",
        grantedAt: new Date("2024-02-22T19:01:58.026Z"),
        revokedAt: new Date("2025-02-20T09:36:47.164Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-08-21T04:13:05.787Z"),
          modifiedAt: new Date("2023-01-28T00:16:43.776Z"),
          id: "<value>",
          email: "Maxine.Rath65@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "FR",
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
        },
        benefit: {
          id: "<value>",
          createdAt: new Date("2025-10-01T18:09:27.214Z"),
          modifiedAt: new Date("2024-03-13T17:16:29.953Z"),
          description: "angrily expert considering kiddingly direct or",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          organization: {
            createdAt: new Date("2023-02-10T16:41:06.919Z"),
            modifiedAt: new Date("2025-11-05T01:09:17.832Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://innocent-analogy.org",
            email: "Major_Schaefer@yahoo.com",
            website: "<value>",
            socials: [
              {
                platform: "x",
                url: "https://worldly-alligator.info/",
              },
            ],
            detailsSubmittedAt: new Date("2023-06-24T22:10:51.085Z"),
            featureSettings: {
              issueFundingEnabled: false,
              usageBasedBillingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
          properties: {
            note: "<value>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 37493,
      maxPage: 274273,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |