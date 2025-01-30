# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-24T00:32:50.154Z"),
        modifiedAt: new Date("2025-09-11T06:52:42.475Z"),
        id: "<value>",
        grantedAt: new Date("2024-03-23T09:54:57.627Z"),
        revokedAt: new Date("2024-01-27T07:36:10.471Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-05-11T20:46:06.747Z"),
          modifiedAt: new Date("2025-10-08T12:39:56.525Z"),
          id: "<value>",
          email: "Deshaun52@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Samoa",
          },
          taxId: [
            "ca_qst",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2023-03-22T05:40:31.125Z"),
          modifiedAt: new Date("2023-07-05T06:38:06.989Z"),
          id: "<value>",
          description: "drive spherical concerning",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2023-02-15T03:31:01.054Z"),
            modifiedAt: new Date("2025-07-28T13:40:48.410Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://natural-countess.name/",
            bio: "<value>",
            company: "Runolfsdottir LLC",
            blog: "<value>",
            location: "<value>",
            email: "Nolan14@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 130787,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 630684,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
          properties: {
            activeFiles: [
              "<value>",
            ],
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 387077,
      maxPage: 435652,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |