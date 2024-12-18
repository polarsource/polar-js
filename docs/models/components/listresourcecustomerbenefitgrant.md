# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-09-14T12:44:39.147Z"),
      modifiedAt: new Date("2024-01-17T20:25:36.336Z"),
      id: "<value>",
      grantedAt: new Date("2024-03-28T01:33:27.085Z"),
      revokedAt: new Date("2023-05-05T14:22:26.737Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      benefit: {
        createdAt: new Date("2023-04-18T04:00:42.753Z"),
        modifiedAt: new Date("2023-05-31T08:15:17.595Z"),
        id: "<value>",
        description:
          "crocodile till what now conceal gadzooks sleepily ostrich at",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-08-31T15:14:32.439Z"),
          modifiedAt: new Date("2024-05-06T08:24:14.767Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://mealy-gym.com/",
          bio: "<value>",
          company: "Jacobson, Hintz and Pacocha",
          blog: "<value>",
          location: "<value>",
          email: "Gaetano75@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 790346,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 543473,
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
    totalCount: 820068,
    maxPage: 268483,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |