# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-25T00:15:26.523Z"),
        modifiedAt: new Date("2023-03-22T11:54:12.594Z"),
        id: "<value>",
        grantedAt: new Date("2025-12-15T17:53:37.407Z"),
        revokedAt: new Date("2025-01-26T04:20:35.290Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-09-27T11:43:47.405Z"),
          modifiedAt: new Date("2023-08-23T05:14:43.833Z"),
          id: "<value>",
          email: "Claude30@yahoo.com",
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
          createdAt: new Date("2025-07-09T03:06:50.530Z"),
          modifiedAt: new Date("2023-06-18T21:54:42.100Z"),
          id: "<value>",
          description: "quaintly qua consequently upon phew huge giggle fly",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2025-02-23T08:01:21.480Z"),
            modifiedAt: new Date("2024-02-18T01:19:51.893Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://lined-newsstand.com/",
            bio: "<value>",
            company: "West - Green",
            blog: "<value>",
            location: "<value>",
            email: "Kaden84@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 547066,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 37078,
            profileSettings: {},
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
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
      totalCount: 271066,
      maxPage: 561790,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |