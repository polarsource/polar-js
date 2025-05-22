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
        type: "downloadables",
        description: "distinct until yahoo meh alert unless swing",
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
        path: "/home/user/dir",
        mimeType: "<value>",
        size: 19904,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-02-20T17:16:24.937Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-01-23T08:06:58.238Z"),
        sizeReadable: "<value>",
        publicUrl: "https://physical-impostor.com",
      },
    ],
    organization: {
      createdAt: new Date("2024-09-24T20:10:23.246Z"),
      modifiedAt: new Date("2024-03-18T21:42:16.614Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://made-up-fat.com/",
      email: "Ozella33@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "instagram",
          url: "https://ashamed-cleaner.org",
        },
      ],
      detailsSubmittedAt: new Date("2025-07-28T04:05:51.068Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  },
  prices: [
    {
      createdAt: new Date("2025-10-24T09:22:55.592Z"),
      modifiedAt: new Date("2025-01-19T06:52:40.723Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 333869,
    },
  ],
  meters: [
    {
      createdAt: new Date("2024-09-20T17:59:15.069Z"),
      modifiedAt: new Date("2024-07-13T02:22:57.874Z"),
      id: "<value>",
      consumedUnits: 25,
      creditedUnits: 100,
      amount: 0,
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      meter: {
        createdAt: new Date("2024-01-19T13:23:53.796Z"),
        modifiedAt: new Date("2025-01-11T03:27:53.050Z"),
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
| `product`                                                                                                                     | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `prices`                                                                                                                      | *components.CustomerSubscriptionPrices*[]                                                                                     | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |
| `meters`                                                                                                                      | [components.CustomerSubscriptionMeter](../../models/components/customersubscriptionmeter.md)[]                                | :heavy_check_mark:                                                                                                            | List of meters associated with the subscription.                                                                              |