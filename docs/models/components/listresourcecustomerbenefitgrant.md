# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-10-17T05:26:12.523Z"),
      modifiedAt: new Date("2024-09-18T01:12:09.442Z"),
      id: "<value>",
      grantedAt: new Date("2023-03-16T20:56:58.345Z"),
      revokedAt: new Date("2025-04-25T05:56:55.870Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2023-10-19T11:47:06.902Z"),
        modifiedAt: new Date("2025-10-03T00:52:18.817Z"),
        id: "<value>",
        email: "Maurine.Kunde@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Virgin Islands, U.S.",
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
        createdAt: new Date("2025-07-27T06:53:00.076Z"),
        modifiedAt: new Date("2025-03-15T19:17:39.043Z"),
        id: "<value>",
        description: "willfully likewise if per department till",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-07-24T08:55:42.913Z"),
          modifiedAt: new Date("2023-08-31T16:57:01.365Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://smooth-governance.org",
          bio: "<value>",
          company: "Mueller Group",
          blog: "<value>",
          location: "<value>",
          email: "Antonette.Beier@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 180967,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 82393,
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
          note: "<value>",
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 83454,
    maxPage: 568720,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |