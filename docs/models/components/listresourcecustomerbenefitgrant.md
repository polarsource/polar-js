# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-07-09T11:32:01.340Z"),
      modifiedAt: new Date("2025-09-12T19:18:28.211Z"),
      id: "<value>",
      grantedAt: new Date("2024-03-23T21:56:02.071Z"),
      revokedAt: new Date("2023-07-19T14:03:29.837Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2024-10-31T20:28:03.091Z"),
        modifiedAt: new Date("2024-12-01T20:03:30.175Z"),
        id: "<value>",
        email: "Alexandrea.Ferry@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Jamaica",
        },
        taxId: [
          "id_npwp",
        ],
        oauthAccounts: {
          "key": {
            accountId: "<id>",
            accountUsername: "<value>",
          },
        },
      },
      benefit: {
        createdAt: new Date("2024-11-01T13:50:07.480Z"),
        modifiedAt: new Date("2024-03-21T05:45:09.123Z"),
        id: "<value>",
        description:
          "elementary whereas essay however emergent coolly faithfully mmm unto defensive",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-10-14T16:36:34.415Z"),
          modifiedAt: new Date("2024-10-27T12:57:22.714Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://distant-finger.com/",
          bio: "<value>",
          company: "Ankunding, Harris and Walsh",
          blog: "<value>",
          location: "<value>",
          email: "Judd31@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 567352,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 221652,
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
          activeFiles: [
            "<value>",
          ],
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 249245,
    maxPage: 628991,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |