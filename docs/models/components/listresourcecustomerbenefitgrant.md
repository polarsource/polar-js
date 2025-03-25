# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-02-20T20:35:50.646Z"),
      modifiedAt: new Date("2023-06-14T04:53:15.444Z"),
      id: "<value>",
      grantedAt: new Date("2023-05-09T19:43:06.838Z"),
      revokedAt: new Date("2024-06-11T11:40:46.522Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2025-06-13T18:50:19.689Z"),
        modifiedAt: new Date("2025-02-26T03:07:18.095Z"),
        id: "<value>",
        email: "Haylee_Tremblay@gmail.com",
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
        createdAt: new Date("2025-12-02T17:12:36.456Z"),
        modifiedAt: new Date("2024-06-29T20:49:57.624Z"),
        id: "<value>",
        description:
          "when incidentally helplessly malfunction evenly put under",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2025-06-13T01:35:49.200Z"),
          modifiedAt: new Date("2024-09-17T23:36:02.425Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://which-thorn.com/",
          email: "Kariane.Kohler42@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "linkedin",
              url: "https://inborn-characterization.name",
            },
          ],
          detailsSubmittedAt: new Date("2024-09-12T18:19:53.788Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Bauch, Hodkiewicz and Hilpert",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 170491,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 322218,
          profileSettings: {},
        },
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 44137,
            timeframe: "month",
          },
          activations: {
            limit: 513819,
            enableCustomerAdmin: false,
          },
          limitUsage: 489203,
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 141984,
    maxPage: 105865,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |