# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-06-18T23:13:24.033Z"),
      modifiedAt: new Date("2024-04-06T11:06:58.417Z"),
      id: "<value>",
      grantedAt: new Date("2024-06-07T05:46:10.028Z"),
      revokedAt: new Date("2025-01-12T22:28:31.850Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2023-11-08T19:50:53.693Z"),
        modifiedAt: new Date("2024-12-08T15:11:52.881Z"),
        id: "<value>",
        email: "Norwood8@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Ghana",
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
        createdAt: new Date("2024-07-05T23:05:24.871Z"),
        modifiedAt: new Date("2023-05-14T13:28:32.287Z"),
        id: "<value>",
        description:
          "irresponsible hubris ack attribute underneath taxicab quirkily woot",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-11-22T09:26:52.208Z"),
          modifiedAt: new Date("2025-01-04T18:27:37.711Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://some-grass.biz",
          bio: "<value>",
          company: "Lesch - Morissette",
          blog: "<value>",
          location: "<value>",
          email: "Milo91@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 111913,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 836578,
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
    totalCount: 711897,
    maxPage: 487429,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |