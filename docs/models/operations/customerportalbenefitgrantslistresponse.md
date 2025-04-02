# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-02T23:34:46.193Z"),
        modifiedAt: new Date("2025-07-03T08:56:15.245Z"),
        id: "<value>",
        grantedAt: new Date("2023-04-05T22:31:33.719Z"),
        revokedAt: new Date("2023-09-11T11:58:14.574Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-01-03T03:15:09.782Z"),
          modifiedAt: new Date("2024-01-08T07:11:40.107Z"),
          id: "<value>",
          email: "Brooke98@hotmail.com",
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
          createdAt: new Date("2024-10-13T08:01:37.095Z"),
          modifiedAt: new Date("2023-01-19T17:22:57.153Z"),
          id: "<value>",
          description: "fluffy now an following to whenever fragrant to",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2023-10-01T09:47:38.145Z"),
            modifiedAt: new Date("2025-12-14T06:39:30.766Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://crafty-dream.com/",
            email: "Krystel.Purdy@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "youtube",
                url: "https://sudden-puppet.biz/",
              },
            ],
            detailsSubmittedAt: new Date("2023-09-12T18:17:32.695Z"),
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Lueilwitz - Dicki",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 442446,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 155264,
            profileSettings: {},
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
      totalCount: 577901,
      maxPage: 63824,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |