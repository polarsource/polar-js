# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2025-11-25T07:30:04.232Z"),
      modifiedAt: new Date("2023-04-18T08:47:11.414Z"),
      id: "<value>",
      grantedAt: new Date("2025-03-01T08:18:06.425Z"),
      revokedAt: new Date("2025-08-06T14:32:01.697Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2023-12-31T03:03:22.852Z"),
        modifiedAt: new Date("2024-09-16T00:32:08.173Z"),
        id: "<value>",
        email: "Ethyl.Pfannerstill@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Uganda",
        },
        taxId: [
          "ad_nrt",
        ],
        oauthAccounts: {
          "key": {
            accountId: "<id>",
            accountUsername: "<value>",
          },
        },
      },
      benefit: {
        createdAt: new Date("2024-09-28T19:26:25.236Z"),
        modifiedAt: new Date("2024-03-14T04:01:44.816Z"),
        id: "<value>",
        description: "monstrous unnaturally when er fat despite cleaner",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2025-05-30T14:10:56.971Z"),
          modifiedAt: new Date("2023-11-15T11:44:33.303Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://firsthand-stranger.net",
          bio: "<value>",
          company: "Hickle, Torphy and Stokes",
          blog: "<value>",
          location: "<value>",
          email: "Cale_Welch7@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 460636,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 913009,
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
          prefix: "<value>",
          expires: {
            ttl: 999386,
            timeframe: "month",
          },
          activations: {
            limit: 882230,
            enableCustomerAdmin: false,
          },
          limitUsage: 812025,
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 538609,
    maxPage: 90450,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |