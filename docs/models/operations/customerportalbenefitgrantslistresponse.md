# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-16T03:03:38.237Z"),
        modifiedAt: new Date("2024-08-13T09:05:48.830Z"),
        id: "<value>",
        grantedAt: new Date("2024-03-31T22:54:18.001Z"),
        revokedAt: new Date("2023-09-29T10:20:06.709Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-06-24T08:32:46.463Z"),
          modifiedAt: new Date("2025-08-29T03:02:44.062Z"),
          id: "<value>",
          email: "Marco89@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2024-09-24T22:51:46.223Z"),
          modifiedAt: new Date("2023-08-08T20:48:50.504Z"),
          id: "<value>",
          description:
            "unabashedly worst towards seldom joyfully boohoo that incidentally noisily joyful",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2023-07-23T09:52:13.055Z"),
            modifiedAt: new Date("2023-08-31T06:02:44.249Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://yearly-widow.biz",
            email: "Lamont_Reilly26@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "tiktok",
                url: "https://early-safe.info",
              },
            ],
            detailsSubmittedAt: new Date("2025-09-03T03:50:53.717Z"),
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Luettgen - Cruickshank",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 565879,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 571318,
            profileSettings: {},
          },
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 293286,
              timeframe: "month",
            },
            activations: {
              limit: 126682,
              enableCustomerAdmin: false,
            },
            limitUsage: 815737,
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 802472,
      maxPage: 669784,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |