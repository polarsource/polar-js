# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-02-21T23:25:35.025Z"),
      modifiedAt: new Date("2023-06-13T11:03:06.616Z"),
      id: "<value>",
      grantedAt: new Date("2023-01-02T23:04:43.120Z"),
      revokedAt: new Date("2024-01-30T14:22:07.592Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2025-06-07T12:19:55.464Z"),
        modifiedAt: new Date("2024-09-23T01:16:34.405Z"),
        id: "<value>",
        email: "Chanelle11@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Lithuania",
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
        createdAt: new Date("2025-07-06T11:20:32.944Z"),
        modifiedAt: new Date("2024-06-24T05:24:09.981Z"),
        id: "<value>",
        description: "unless fearless rosy swim woot",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-12-13T12:05:42.154Z"),
          modifiedAt: new Date("2023-11-29T20:53:48.144Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://yellow-pantyhose.net",
          bio: "<value>",
          company: "Parker, Corkery and Collins",
          blog: "<value>",
          location: "<value>",
          email: "Adriana_Schneider@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 123486,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 462247,
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
          activeFiles: [
            "<value>",
          ],
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 371870,
    maxPage: 517246,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |