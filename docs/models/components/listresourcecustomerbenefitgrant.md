# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-05-16T08:17:04.872Z"),
      modifiedAt: new Date("2025-07-24T03:18:16.802Z"),
      id: "<value>",
      grantedAt: new Date("2023-10-12T17:10:03.363Z"),
      revokedAt: new Date("2024-03-18T18:54:22.824Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2023-02-21T23:25:35.025Z"),
        modifiedAt: new Date("2023-06-13T11:03:06.616Z"),
        id: "<value>",
        email: "Floyd17@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Saint Barthelemy",
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
        createdAt: new Date("2023-05-06T06:29:10.335Z"),
        modifiedAt: new Date("2025-03-24T10:54:04.717Z"),
        id: "<value>",
        description:
          "electrify vice massage academics victorious while courageously",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2025-08-28T21:07:54.290Z"),
          modifiedAt: new Date("2023-01-16T15:16:57.052Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://straight-publication.com",
          bio: "<value>",
          company: "Casper Inc",
          blog: "<value>",
          location: "<value>",
          email: "Gabrielle17@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 483254,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 496357,
          profileSettings: {},
          featureSettings: {},
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
    totalCount: 953563,
    maxPage: 267807,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |