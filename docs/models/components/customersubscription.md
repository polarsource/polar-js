# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components";

let value: CustomerSubscription = {
  createdAt: new Date("2024-09-23T07:45:05.288Z"),
  modifiedAt: new Date("2023-07-08T20:56:24.426Z"),
  id: "<value>",
  amount: 951614,
  currency: "Yuan Renminbi",
  recurringInterval: "month",
  status: "trialing",
  currentPeriodStart: new Date("2024-04-21T14:18:59.007Z"),
  currentPeriodEnd: new Date("2025-12-07T04:48:23.043Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-08-30T05:51:37.577Z"),
  endedAt: new Date("2025-06-02T04:49:52.259Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-04-22T19:20:53.019Z"),
    modifiedAt: new Date("2024-03-16T20:09:33.162Z"),
    id: "<value>",
    name: "<value>",
    description: "tough reboot terribly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-04-26T00:53:32.713Z"),
        modifiedAt: new Date("2023-03-14T09:10:45.829Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 383981,
        maximumAmount: 925252,
        presetAmount: 226263,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-04-07T18:37:14.280Z"),
        modifiedAt: new Date("2024-12-04T06:57:20.808Z"),
        id: "<value>",
        type: "discord",
        description: "descriptive seemingly allegation",
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
        path: "/opt/include",
        mimeType: "<value>",
        size: 306995,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-04-17T22:12:43.442Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-02-15T18:50:40.902Z"),
        sizeReadable: "<value>",
        publicUrl: "https://lone-seafood.biz/",
      },
    ],
    organization: {
      createdAt: new Date("2025-08-04T14:21:14.678Z"),
      modifiedAt: new Date("2025-10-19T12:33:56.667Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://clean-parsnip.name/",
      bio: "<value>",
      company: "Schmitt, Kuvalis and Bernhard",
      blog: "<value>",
      location: "<value>",
      email: "Isidro_Welch@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 80782,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 249688,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2023-07-09T02:51:12.374Z"),
    modifiedAt: new Date("2025-01-12T04:38:24.107Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 117649,
    maximumAmount: 894127,
    presetAmount: 626437,
    recurringInterval: "year",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the object.                                                                                                   |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `recurringInterval`                                                                                                     | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `status`                                                                                                                | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodStart`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodEnd`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `cancelAtPeriodEnd`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `price`                                                                                                                 | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |