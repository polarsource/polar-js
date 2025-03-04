# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2024-08-17T14:27:20.338Z"),
  modifiedAt: new Date("2025-09-05T06:46:41.583Z"),
  id: "<value>",
  amount: 106781,
  currency: "Colombian Peso",
  recurringInterval: "year",
  status: "trialing",
  currentPeriodStart: new Date("2023-03-18T03:29:56.846Z"),
  currentPeriodEnd: new Date("2025-02-09T14:02:15.752Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2023-05-29T17:59:10.197Z"),
  startedAt: new Date("2023-05-11T15:16:30.860Z"),
  endsAt: new Date("2024-07-05T02:56:26.157Z"),
  endedAt: new Date("2024-03-27T12:59:41.406Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "low_quality",
  customerCancellationComment: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-01-04T22:35:21.598Z"),
    modifiedAt: new Date("2024-03-31T08:59:52.910Z"),
    id: "<value>",
    name: "<value>",
    description: "despite safe yogurt psst readies until under belabor",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-09-24T06:04:53.029Z"),
        modifiedAt: new Date("2024-09-28T00:16:41.299Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-08-26T03:06:52.368Z"),
        modifiedAt: new Date("2023-05-30T01:40:11.174Z"),
        id: "<value>",
        type: "downloadables",
        description: "nippy geez howl ah",
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
        path: "/usr/local/src",
        mimeType: "<value>",
        size: 72288,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-08-18T01:01:53.905Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-04-05T04:10:03.608Z"),
        sizeReadable: "<value>",
        publicUrl: "https://elderly-mythology.org/",
      },
    ],
    organization: {
      createdAt: new Date("2024-01-22T06:01:41.855Z"),
      modifiedAt: new Date("2023-09-10T19:30:29.998Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://brown-derby.name/",
      bio: "<value>",
      company: "Johnson, Welch and Cummerata",
      blog: "<value>",
      location: "<value>",
      email: "Gus.Dietrich@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 608138,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 432370,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
  },
  price: {
    createdAt: new Date("2024-12-03T22:36:50.794Z"),
    modifiedAt: new Date("2025-11-27T19:52:31.566Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "month",
    priceCurrency: "<value>",
    priceAmount: 610935,
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
| `price`                                                                                                                 | *components.Price*                                                                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |