# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-10-12T17:10:03.363Z"),
      modifiedAt: new Date("2024-03-18T18:54:22.824Z"),
      id: "<value>",
      grantedAt: new Date("2023-02-21T23:25:35.025Z"),
      revokedAt: new Date("2023-06-13T11:03:06.616Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2023-01-02T23:04:43.120Z"),
        modifiedAt: new Date("2024-01-30T14:22:07.592Z"),
        id: "<value>",
        email: "Kira_Daniel@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Bosnia and Herzegovina",
        },
        taxId: [
          "jp_cn",
        ],
        oauthAccounts: {
          "key": {
            accountId: "<id>",
            accountUsername: "<value>",
          },
        },
      },
      benefit: {
        createdAt: new Date("2024-05-29T19:48:45.859Z"),
        modifiedAt: new Date("2025-07-06T11:20:32.944Z"),
        id: "<value>",
        description: "ack into phew where indeed strong",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2025-03-01T08:59:39.201Z"),
          modifiedAt: new Date("2025-01-17T14:16:00.694Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://confused-swordfish.com/",
          bio: "<value>",
          company: "Schneider, Raynor and Considine",
          blog: "<value>",
          location: "<value>",
          email: "Braden51@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 310389,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 175010,
          profileSettings: {},
          featureSettings: {},
        },
        properties: {
          note: "<value>",
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 907566,
    maxPage: 483254,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |