# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-04-30T14:47:06.099Z"),
      modifiedAt: new Date("2024-08-10T20:04:48.452Z"),
      id: "<value>",
      grantedAt: new Date("2023-10-23T05:03:16.724Z"),
      revokedAt: new Date("2025-01-31T15:21:17.859Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2025-02-17T01:57:41.434Z"),
        modifiedAt: new Date("2024-07-24T20:12:09.049Z"),
        id: "<value>",
        email: "Magnus7@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Sri Lanka",
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
        createdAt: new Date("2025-04-24T09:01:08.745Z"),
        modifiedAt: new Date("2025-12-11T00:30:42.283Z"),
        id: "<value>",
        description:
          "indolent geez brr tabletop deserted vibrant redress provided happy",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-08-09T05:17:44.333Z"),
          modifiedAt: new Date("2024-07-30T13:05:52.298Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://unusual-accompanist.org",
          bio: "<value>",
          company: "Weimann LLC",
          blog: "<value>",
          location: "<value>",
          email: "Lori.Waelchi@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 190139,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 428147,
          profileSettings: {},
          featureSettings: {},
        },
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 296892,
            timeframe: "day",
          },
          activations: {
            limit: 753129,
            enableCustomerAdmin: false,
          },
          limitUsage: 771396,
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 394352,
    maxPage: 191389,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |