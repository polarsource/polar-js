# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-17T03:17:03.175Z"),
        modifiedAt: new Date("2024-08-07T19:18:35.830Z"),
        id: "<value>",
        grantedAt: new Date("2024-10-09T04:06:47.415Z"),
        revokedAt: new Date("2025-04-20T07:57:01.631Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-11-03T03:04:57.584Z"),
          modifiedAt: new Date("2025-02-17T00:36:16.610Z"),
          id: "<value>",
          email: "Fletcher_Bartoletti67@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Isle of Man",
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
          createdAt: new Date("2023-03-19T06:56:52.426Z"),
          modifiedAt: new Date("2024-08-26T02:17:15.307Z"),
          id: "<value>",
          description: "vamoose diligently innocently ceramics",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2025-08-26T07:12:11.781Z"),
            modifiedAt: new Date("2023-04-10T12:49:05.350Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://unwritten-parsnip.name",
            bio: "<value>",
            company: "Ernser, Gutkowski and Skiles",
            blog: "<value>",
            location: "<value>",
            email: "Kyra.Bode10@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 802418,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 625656,
            profileSettings: {},
            featureSettings: {},
          },
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 223690,
              timeframe: "month",
            },
            activations: {
              limit: 576735,
              enableCustomerAdmin: false,
            },
            limitUsage: 698554,
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 358587,
      maxPage: 359637,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |