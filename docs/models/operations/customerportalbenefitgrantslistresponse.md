# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-29T18:34:20.008Z"),
        modifiedAt: new Date("2024-04-20T12:22:07.487Z"),
        id: "<value>",
        grantedAt: new Date("2023-06-28T21:12:27.512Z"),
        revokedAt: new Date("2024-07-13T22:11:33.289Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2023-02-27T02:03:56.820Z"),
          modifiedAt: new Date("2025-11-28T05:50:26.321Z"),
          id: "<value>",
          email: "Robbie_Grant77@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Russian Federation",
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
          createdAt: new Date("2023-03-22T14:18:41.379Z"),
          modifiedAt: new Date("2023-04-09T08:03:48.532Z"),
          id: "<value>",
          description: "outdo meh victoriously scared descendant",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2024-04-23T06:54:28.604Z"),
            modifiedAt: new Date("2023-02-01T20:40:14.607Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://nervous-decryption.biz/",
            bio: "<value>",
            company: "O'Hara, Baumbach and Gulgowski",
            blog: "<value>",
            location: "<value>",
            email: "Vernon_Mohr90@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 325989,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 174381,
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
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 389060,
      maxPage: 836989,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |