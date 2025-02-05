# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-29T23:40:43.285Z"),
        modifiedAt: new Date("2024-01-19T17:57:19.906Z"),
        id: "<value>",
        grantedAt: new Date("2025-03-18T04:49:50.317Z"),
        revokedAt: new Date("2023-07-20T22:17:57.471Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-12-03T04:34:28.027Z"),
          modifiedAt: new Date("2023-03-07T06:28:40.969Z"),
          id: "<value>",
          email: "Ona74@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Niger",
          },
          taxId: [
            "om_vat",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2023-08-31T20:30:50.225Z"),
          modifiedAt: new Date("2023-11-27T20:53:52.117Z"),
          id: "<value>",
          description:
            "cheerfully hasty behind developmental meanwhile entwine hubris at aching",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2025-07-21T21:47:53.222Z"),
            modifiedAt: new Date("2024-05-04T22:23:11.834Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://political-fax.org/",
            bio: "<value>",
            company: "Cummings, Rutherford and Fritsch",
            blog: "<value>",
            location: "<value>",
            email: "Wilson20@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 89104,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 716863,
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
            note: "<value>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 710882,
      maxPage: 618551,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |