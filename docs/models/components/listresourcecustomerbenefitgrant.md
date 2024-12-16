# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2022-09-07T22:47:45.911Z"),
      modifiedAt: new Date("2022-11-26T04:15:12.658Z"),
      id: "<value>",
      grantedAt: new Date("2022-08-02T05:08:19.832Z"),
      revokedAt: new Date("2023-05-01T14:18:15.397Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      benefit: {
        createdAt: new Date("2023-07-07T18:19:06.566Z"),
        modifiedAt: new Date("2024-09-12T13:15:58.455Z"),
        id: "<value>",
        description:
          "deduction huzzah pantyhose whether hoick even since repeat squirm",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2022-01-17T19:37:54.010Z"),
          modifiedAt: new Date("2024-02-28T16:31:31.253Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://usable-detective.info/",
          bio: "<value>",
          company: "Blanda, Quigley and Padberg",
          blog: "<value>",
          location: "<value>",
          email: "Mervin13@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 489718,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 407877,
          profileSettings: {},
          featureSettings: {},
        },
        properties: {},
      },
      properties: {
        advertisementCampaignId: "<id>",
      },
    },
  ],
  pagination: {
    totalCount: 547753,
    maxPage: 213547,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |