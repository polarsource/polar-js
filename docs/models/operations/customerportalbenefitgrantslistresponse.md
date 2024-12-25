# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-04-05T03:50:46.744Z"),
        modifiedAt: new Date("2024-06-20T08:33:00.204Z"),
        id: "<value>",
        grantedAt: new Date("2022-12-14T12:41:25.029Z"),
        revokedAt: new Date("2022-08-21T11:42:45.672Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2022-08-03T17:06:34.541Z"),
          modifiedAt: new Date("2022-03-26T15:21:43.295Z"),
          id: "<value>",
          email: "Ova_Zemlak@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Bouvet Island",
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
          createdAt: new Date("2024-07-31T04:13:57.429Z"),
          modifiedAt: new Date("2023-01-04T02:06:41.967Z"),
          id: "<value>",
          description: "annual appertain overproduce",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2022-07-30T10:24:54.251Z"),
            modifiedAt: new Date("2022-08-05T16:54:18.635Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://smoggy-bonfire.org/",
            bio: "<value>",
            company: "Crooks, Wisoky and Heaney",
            blog: "<value>",
            location: "<value>",
            email: "Antonina.Kiehn@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 131629,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 124468,
            profileSettings: {},
            featureSettings: {},
          },
          properties: {},
        },
        properties: {
          advertisementCampaignId: "<id>",
        },
      },
    ],
    pagination: {
      totalCount: 401186,
      maxPage: 103120,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |