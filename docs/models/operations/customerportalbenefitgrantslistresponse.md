# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-10T09:01:33.376Z"),
        modifiedAt: new Date("2024-12-31T00:45:57.025Z"),
        id: "<value>",
        grantedAt: new Date("2023-03-19T16:43:42.877Z"),
        revokedAt: new Date("2025-12-06T13:45:21.749Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-03-16T12:30:01.164Z"),
          modifiedAt: new Date("2024-10-18T05:20:57.644Z"),
          id: "<value>",
          email: "Lori6@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "SE",
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
          createdAt: new Date("2025-10-31T05:51:33.101Z"),
          modifiedAt: new Date("2024-05-07T03:38:29.979Z"),
          id: "<value>",
          description: "heavy after unexpectedly the plain",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2024-01-07T13:39:13.086Z"),
            modifiedAt: new Date("2024-04-06T20:44:40.851Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://ultimate-cafe.com/",
            email: "Horace62@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "other",
                url: "https://carefree-fax.biz",
              },
            ],
            detailsSubmittedAt: new Date("2023-02-04T01:20:18.979Z"),
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Collins - VonRueden",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 461600,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 849886,
            profileSettings: {},
          },
          properties: {
            guildId: "<id>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 899710,
      maxPage: 90633,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |