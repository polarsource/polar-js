# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2024-12-27T19:31:25.752Z"),
  modifiedAt: new Date("2025-06-24T21:11:51.746Z"),
  id: "<value>",
  amount: 505501,
  currency: "Uganda Shilling",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2024-09-05T20:42:48.893Z"),
  currentPeriodEnd: new Date("2023-03-10T15:25:48.651Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2025-06-15T16:33:22.796Z"),
  startedAt: new Date("2025-09-11T13:49:33.195Z"),
  endsAt: new Date("2023-01-23T06:52:39.776Z"),
  endedAt: new Date("2025-02-15T18:01:25.134Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "too_expensive",
  customerCancellationComment: "<value>",
  priceId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-05-05T19:36:14.043Z"),
    modifiedAt: new Date("2023-09-02T14:51:23.839Z"),
    id: "<value>",
    name: "<value>",
    description: "rebuff halt ick handful astride delightfully blah",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-03-08T13:08:56.742Z"),
        modifiedAt: new Date("2023-04-22T04:47:32.707Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 367154,
        maximumAmount: 896239,
        presetAmount: 834860,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-05-03T11:42:13.951Z"),
        modifiedAt: new Date("2023-06-28T04:37:45.918Z"),
        metadata: {
          "key": 6027.29,
        },
        type: "downloadables",
        description: "transom hyena nor digestive surprisingly yuck",
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
        path: "/boot",
        mimeType: "<value>",
        size: 520845,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-29T21:44:48.329Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-05-29T19:06:14.998Z"),
        sizeReadable: "<value>",
        publicUrl: "https://elementary-aftermath.com",
      },
    ],
    organization: {
      createdAt: new Date("2023-01-23T08:06:58.238Z"),
      modifiedAt: new Date("2025-05-17T04:06:01.172Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://lavish-aftermath.name",
      email: "Jazmin22@yahoo.com",
      website: "<value>",
      socials: [
        {
          platform: "linkedin",
          url: "https://cruel-finer.org",
        },
      ],
      detailsSubmittedAt: new Date("2024-06-29T22:25:57.195Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Crona - Wyman",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
    },
  },
  price: {
    createdAt: new Date("2025-09-19T16:24:40.393Z"),
    modifiedAt: new Date("2024-03-25T09:32:53.194Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 223838,
  },
  prices: [
    {
      createdAt: new Date("2024-09-20T17:59:15.069Z"),
      modifiedAt: new Date("2024-07-13T02:22:57.874Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 676227,
    },
  ],
  meters: [
    {
      createdAt: new Date("2025-03-06T20:20:40.637Z"),
      modifiedAt: new Date("2023-06-06T08:03:21.211Z"),
      id: "<value>",
      consumedUnits: 25,
      creditedUnits: 100,
      amount: 0,
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      meter: {
        createdAt: new Date("2024-01-15T01:20:02.189Z"),
        modifiedAt: new Date("2025-06-06T09:10:59.722Z"),
        id: "<value>",
        name: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | Creation timestamp of the object.                                                                                             |
| `modifiedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | Last modification timestamp of the object.                                                                                    |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the object.                                                                                                         |
| `amount`                                                                                                                      | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The amount of the subscription.                                                                                               |
| `currency`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The currency of the subscription.                                                                                             |
| `recurringInterval`                                                                                                           | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                          | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `status`                                                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `currentPeriodStart`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The start timestamp of the current billing period.                                                                            |
| `currentPeriodEnd`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The end timestamp of the current billing period.                                                                              |
| `cancelAtPeriodEnd`                                                                                                           | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Whether the subscription will be canceled at the end of the current period.                                                   |
| `canceledAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. |
| `startedAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription started.                                                                                  |
| `endsAt`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription will end.                                                                                 |
| `endedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription ended.                                                                                    |
| `customerId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the subscribed customer.                                                                                            |
| `productId`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the subscribed product.                                                                                             |
| `discountId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the applied discount, if any.                                                                                       |
| `checkoutId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customerCancellationReason`                                                                                                  | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customerCancellationComment`                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| ~~`priceId`~~                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| ~~`userId`~~                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| `product`                                                                                                                     | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| ~~`price`~~                                                                                                                   | *components.CustomerSubscriptionPrice*                                                                                        | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| `prices`                                                                                                                      | *components.CustomerSubscriptionPrices*[]                                                                                     | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |
| `meters`                                                                                                                      | [components.CustomerSubscriptionMeter](../../models/components/customersubscriptionmeter.md)[]                                | :heavy_check_mark:                                                                                                            | List of meters associated with the subscription.                                                                              |