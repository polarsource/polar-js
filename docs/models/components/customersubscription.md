# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2025-11-05T00:11:06.002Z"),
  modifiedAt: new Date("2025-06-30T11:37:55.414Z"),
  id: "<value>",
  amount: 451522,
  currency: "Kip",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2023-06-05T02:07:02.116Z"),
  currentPeriodEnd: new Date("2023-10-24T23:58:31.091Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2023-07-22T20:54:17.146Z"),
  startedAt: new Date("2025-08-23T11:21:19.841Z"),
  endsAt: new Date("2025-01-26T05:03:14.787Z"),
  endedAt: new Date("2023-05-27T03:14:14.894Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "switched_service",
  customerCancellationComment: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-12-23T21:42:12.315Z"),
    modifiedAt: new Date("2023-01-17T09:03:28.369Z"),
    id: "<value>",
    name: "<value>",
    description:
      "atop rarely advancement sorrowful harvest awkwardly sizzling forenenst",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-01-12T14:50:02.595Z"),
        modifiedAt: new Date("2024-06-28T23:12:27.155Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-10-21T06:32:36.312Z"),
        modifiedAt: new Date("2023-07-04T16:50:18.446Z"),
        id: "<value>",
        type: "discord",
        description: "pantyhose who sardonic",
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
        path: "/srv",
        mimeType: "<value>",
        size: 65709,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-02T11:17:12.972Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-05-16T04:57:49.424Z"),
        sizeReadable: "<value>",
        publicUrl: "https://wry-spirit.info",
      },
    ],
    organization: {
      createdAt: new Date("2024-07-17T18:36:12.171Z"),
      modifiedAt: new Date("2023-02-15T06:35:32.210Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://husky-alb.org",
      bio: "<value>",
      company: "Padberg LLC",
      blog: "<value>",
      location: "<value>",
      email: "Vilma_Carroll@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 73988,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 285710,
      profileSettings: {},
      featureSettings: {},
    },
  },
  price: {
    createdAt: new Date("2025-05-07T15:08:34.450Z"),
    modifiedAt: new Date("2024-03-10T10:40:48.230Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 369207,
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
| `canceledAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endsAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationReason`                                                                                            | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationComment`                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `price`                                                                                                                 | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |