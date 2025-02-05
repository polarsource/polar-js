# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-12T21:22:01.938Z"),
        modifiedAt: new Date("2023-08-18T16:02:32.488Z"),
        id: "<value>",
        grantedAt: new Date("2024-08-03T11:54:03.969Z"),
        revokedAt: new Date("2024-02-23T19:06:55.917Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2023-11-21T05:08:37.946Z"),
          modifiedAt: new Date("2023-02-23T01:56:49.955Z"),
          id: "<value>",
          email: "Raoul.Watsica13@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Mongolia",
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
          createdAt: new Date("2024-03-23T19:55:15.274Z"),
          modifiedAt: new Date("2023-05-12T05:27:49.525Z"),
          id: "<value>",
          description: "exacerbate frankly cautiously nocturnal",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2025-05-07T19:52:37.336Z"),
            modifiedAt: new Date("2024-02-26T15:17:44.821Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://finished-disappointment.name/",
            bio: "<value>",
            company: "Barton, Batz and Barrows",
            blog: "<value>",
            location: "<value>",
            email: "Kristy30@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 850938,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 500778,
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
      totalCount: 609764,
      maxPage: 240842,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |