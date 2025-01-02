# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components";

let value: CustomerOrder = {
  createdAt: new Date("2025-03-01T10:44:40.614Z"),
  modifiedAt: new Date("2023-08-25T14:51:17.867Z"),
  id: "<value>",
  amount: 625659,
  taxAmount: 581991,
  currency: "North Korean Won",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-06-14T07:55:46.836Z"),
    modifiedAt: new Date("2023-09-02T02:21:11.091Z"),
    id: "<value>",
    name: "<value>",
    description: "minority absent bathhouse maul excluding exotic",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-08-20T00:50:52.223Z"),
        modifiedAt: new Date("2024-02-22T21:24:01.011Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-16T02:43:11.535Z"),
        modifiedAt: new Date("2025-07-16T04:08:55.447Z"),
        id: "<value>",
        type: "downloadables",
        description:
          "qua hence meaningfully beside doorpost yuck glimmer while",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/share",
        mimeType: "<value>",
        size: 606816,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-02-12T10:28:51.314Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-02-09T12:38:41.237Z"),
        sizeReadable: "<value>",
        publicUrl: "https://grounded-developmental.name/",
      },
    ],
    organization: {
      createdAt: new Date("2025-02-28T07:10:49.167Z"),
      modifiedAt: new Date("2023-11-17T11:56:31.982Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://splendid-pants.net",
      bio: "<value>",
      company: "Nicolas - Goodwin",
      blog: "<value>",
      location: "<value>",
      email: "Donato34@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 134627,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 215724,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2024-08-03T05:37:09.894Z"),
    modifiedAt: new Date("2024-06-03T20:31:20.070Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
  },
  subscription: {
    createdAt: new Date("2025-11-19T15:09:26.906Z"),
    modifiedAt: new Date("2025-07-14T02:36:39.601Z"),
    id: "<value>",
    amount: 820374,
    currency: "Tanzanian Shilling",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2025-11-30T18:08:12.857Z"),
    currentPeriodEnd: new Date("2025-10-20T08:31:50.564Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2025-02-01T21:36:44.416Z"),
    endedAt: new Date("2023-11-17T01:02:55.807Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPriceId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPrice`                                                                                                          | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |