# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-17T10:28:48.696Z"),
        modifiedAt: new Date("2023-10-17T06:55:36.507Z"),
        id: "<value>",
        grantedAt: new Date("2023-08-04T15:08:11.956Z"),
        revokedAt: new Date("2023-02-28T23:31:34.844Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2023-12-13T19:14:50.391Z"),
          modifiedAt: new Date("2023-10-08T03:04:14.470Z"),
          id: "<value>",
          email: "Irma_Beer89@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Denmark",
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
          createdAt: new Date("2024-02-12T13:48:43.230Z"),
          modifiedAt: new Date("2025-01-12T18:55:33.618Z"),
          id: "<value>",
          description: "consequently expense aha",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2023-02-17T08:34:45.102Z"),
            modifiedAt: new Date("2023-09-29T00:17:51.706Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://upset-secret.com",
            bio: "<value>",
            company: "Gibson, Kerluke and Mueller",
            blog: "<value>",
            location: "<value>",
            email: "Alize38@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 480381,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 218577,
            profileSettings: {},
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
          properties: {
            imageHeight: 400,
            imageWidth: 400,
          },
        },
        properties: {
          advertisementCampaignId: "<id>",
        },
      },
    ],
    pagination: {
      totalCount: 608982,
      maxPage: 807604,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |