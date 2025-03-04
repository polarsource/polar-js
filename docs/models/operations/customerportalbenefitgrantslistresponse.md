# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-16T11:58:45.164Z"),
        modifiedAt: new Date("2024-11-28T12:00:31.762Z"),
        id: "<value>",
        grantedAt: new Date("2025-10-21T00:16:38.642Z"),
        revokedAt: new Date("2024-11-12T07:21:25.023Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2023-09-28T15:19:07.865Z"),
          modifiedAt: new Date("2024-05-22T05:35:27.965Z"),
          id: "<value>",
          email: "Benton.Maggio15@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "United Kingdom",
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
          createdAt: new Date("2024-08-02T09:44:59.122Z"),
          modifiedAt: new Date("2025-11-27T02:08:19.815Z"),
          id: "<value>",
          description:
            "furthermore which deform confound the what fooey or which",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2025-05-05T04:40:41.715Z"),
            modifiedAt: new Date("2025-04-08T13:59:19.653Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://avaricious-airbus.net/",
            bio: "<value>",
            company: "Rodriguez, Hegmann and Bergstrom",
            blog: "<value>",
            location: "<value>",
            email: "Lucinda88@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 976744,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 305855,
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
      totalCount: 330879,
      maxPage: 522945,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |