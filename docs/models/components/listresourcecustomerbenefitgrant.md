# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-12-31T03:03:22.852Z"),
      modifiedAt: new Date("2024-09-16T00:32:08.173Z"),
      id: "<value>",
      grantedAt: new Date("2023-04-09T05:37:51.811Z"),
      revokedAt: new Date("2024-01-05T09:56:17.090Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2023-09-30T17:15:44.718Z"),
        modifiedAt: new Date("2025-01-21T03:55:14.180Z"),
        id: "<value>",
        email: "Jayne_Waters@gmail.com",
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
        createdAt: new Date("2024-12-12T23:04:48.157Z"),
        modifiedAt: new Date("2023-10-28T17:12:20.149Z"),
        id: "<value>",
        description:
          "sophisticated violently unlike neatly whenever like needily tiny almost",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-05-19T20:34:01.386Z"),
          modifiedAt: new Date("2025-09-27T15:46:53.541Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://zesty-order.org",
          email: "Kali_Christiansen@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "facebook",
              url: "https://upbeat-valuable.org",
            },
          ],
          detailsSubmittedAt: new Date("2024-09-10T03:54:13.692Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Hintz, Murray and Kessler",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 344722,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 929443,
          profileSettings: {},
        },
        properties: {
          note: "<value>",
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 569644,
    maxPage: 465106,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |