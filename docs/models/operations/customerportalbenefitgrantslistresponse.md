# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-07-12T13:54:50.571Z"),
        modifiedAt: new Date("2025-10-31T16:01:03.868Z"),
        id: "<value>",
        grantedAt: new Date("2023-09-12T22:19:36.481Z"),
        revokedAt: new Date("2023-08-15T02:08:42.106Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-08-06T10:09:42.829Z"),
          modifiedAt: new Date("2023-11-24T19:59:24.412Z"),
          id: "<value>",
          email: "Jaden35@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Guernsey",
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
          createdAt: new Date("2025-10-31T06:29:57.244Z"),
          modifiedAt: new Date("2025-01-21T14:33:59.942Z"),
          id: "<value>",
          description: "deduct astride adjudge down beyond zowie",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2025-02-14T03:35:30.276Z"),
            modifiedAt: new Date("2024-03-02T21:37:18.320Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://awful-rosemary.org/",
            bio: "<value>",
            company: "Kirlin, Hayes and Dibbert",
            blog: "<value>",
            location: "<value>",
            email: "Hilda.Simonis24@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 229398,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 198197,
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
            guildId: "<id>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 58439,
      maxPage: 131297,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |