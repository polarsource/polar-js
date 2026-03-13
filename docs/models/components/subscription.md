# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2024-07-31T20:43:13.861Z"),
  modifiedAt: new Date("2025-11-28T06:04:05.260Z"),
  id: "<value>",
  amount: 10000,
  currency: "usd",
  recurringInterval: "week",
  recurringIntervalCount: 218416,
  status: "active",
  currentPeriodStart: new Date("2024-09-17T19:50:05.034Z"),
  currentPeriodEnd: new Date("2026-12-24T04:01:55.073Z"),
  trialStart: new Date("2024-07-17T13:08:55.704Z"),
  trialEnd: new Date("2025-12-01T07:13:21.079Z"),
  cancelAtPeriodEnd: true,
  canceledAt: new Date("2025-12-18T00:59:29.267Z"),
  startedAt: new Date("2025-11-17T12:28:40.687Z"),
  endsAt: null,
  endedAt: null,
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: null,
  customerCancellationReason: "missing_features",
  customerCancellationComment: "<value>",
  metadata: {
    "key": "<value>",
  },
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-05-06T20:26:26.597Z"),
    modifiedAt: new Date("2024-10-26T12:38:37.731Z"),
    metadata: {
      "key": 612623,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-09-11T22:43:44.126Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  product: {
    id: "<value>",
    createdAt: new Date("2025-02-03T10:44:12.276Z"),
    modifiedAt: new Date("2025-01-02T02:01:45.933Z"),
    trialInterval: "week",
    trialIntervalCount: 889423,
    name: "<value>",
    description: "joyously biodegrade beside",
    visibility: "public",
    recurringInterval: "day",
    recurringIntervalCount: 763611,
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 543181,
    },
    prices: [
      {
        createdAt: new Date("2024-01-07T14:45:36.833Z"),
        modifiedAt: new Date("2024-05-24T07:08:25.699Z"),
        id: "<value>",
        source: "ad_hoc",
        amountType: "fixed",
        priceCurrency: "<value>",
        isArchived: true,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "day",
        priceAmount: 479731,
        legacy: true,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2024-06-04T18:32:44.963Z"),
        modifiedAt: new Date("2026-04-07T05:04:30.181Z"),
        type: "custom",
        description: "cap permafrost treble",
        selectable: true,
        deletable: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        properties: {
          note: "<value>",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/private/tmp",
        mimeType: "<value>",
        size: 16733,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2026-12-06T15:49:55.309Z"),
        version: "<value>",
        service: "product_media",
        isUploaded: true,
        createdAt: new Date("2025-07-11T05:48:37.631Z"),
        sizeReadable: "<value>",
        publicUrl: "https://impressionable-viability.com/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-09-17T23:34:10.111Z"),
          modifiedAt: new Date("2025-04-12T21:32:26.120Z"),
          id: "<value>",
          metadata: {},
          type: "select",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 797456,
        required: false,
      },
    ],
  },
  discount: {
    duration: "forever",
    type: "percentage",
    amount: 1000,
    currency: "usd",
    amounts: {
      "eur": 900,
      "usd": 1000,
    },
    createdAt: new Date("2024-10-29T07:44:49.101Z"),
    modifiedAt: null,
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-04-21T02:20:18.592Z"),
    endsAt: new Date("2026-06-30T22:17:36.877Z"),
    maxRedemptions: 494133,
    redemptionsCount: 318308,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  prices: [],
  meters: [
    {
      createdAt: new Date("2026-03-20T19:43:53.594Z"),
      modifiedAt: new Date("2024-01-29T13:10:13.616Z"),
      id: "<value>",
      consumedUnits: 25,
      creditedUnits: 100,
      amount: 0,
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      meter: {
        metadata: {},
        createdAt: new Date("2026-01-05T19:13:23.632Z"),
        modifiedAt: new Date("2026-10-09T02:26:38.751Z"),
        id: "<value>",
        name: "<value>",
        filter: {
          conjunction: "or",
          clauses: [],
        },
        aggregation: {
          func: "unique",
          property: "<value>",
        },
        organizationId: "<value>",
      },
    },
  ],
  pendingUpdate: {
    createdAt: new Date("2025-09-20T17:34:26.219Z"),
    modifiedAt: new Date("2025-05-26T00:52:37.759Z"),
    id: "<value>",
    appliesAt: new Date("2025-07-13T01:01:57.978Z"),
    productId: "<value>",
    seats: 704811,
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      | Example                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | Creation timestamp of the object.                                                                                                                                                |                                                                                                                                                                                  |
| `modifiedAt`                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | Last modification timestamp of the object.                                                                                                                                       |                                                                                                                                                                                  |
| `id`                                                                                                                                                                             | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The ID of the object.                                                                                                                                                            |                                                                                                                                                                                  |
| `amount`                                                                                                                                                                         | *number*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The amount of the subscription.                                                                                                                                                  | 10000                                                                                                                                                                            |
| `currency`                                                                                                                                                                       | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The currency of the subscription.                                                                                                                                                | usd                                                                                                                                                                              |
| `recurringInterval`                                                                                                                                                              | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                                             | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `recurringIntervalCount`                                                                                                                                                         | *number*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. |                                                                                                                                                                                  |
| `status`                                                                                                                                                                         | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `currentPeriodStart`                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The start timestamp of the current billing period.                                                                                                                               |                                                                                                                                                                                  |
| `currentPeriodEnd`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The end timestamp of the current billing period.                                                                                                                                 |                                                                                                                                                                                  |
| `trialStart`                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The start timestamp of the trial period, if any.                                                                                                                                 |                                                                                                                                                                                  |
| `trialEnd`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The end timestamp of the trial period, if any.                                                                                                                                   |                                                                                                                                                                                  |
| `cancelAtPeriodEnd`                                                                                                                                                              | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | Whether the subscription will be canceled at the end of the current period.                                                                                                      |                                                                                                                                                                                  |
| `canceledAt`                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.                                                    |                                                                                                                                                                                  |
| `startedAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription started.                                                                                                                                     |                                                                                                                                                                                  |
| `endsAt`                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription will end.                                                                                                                                    |                                                                                                                                                                                  |
| `endedAt`                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription ended.                                                                                                                                       |                                                                                                                                                                                  |
| `customerId`                                                                                                                                                                     | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The ID of the subscribed customer.                                                                                                                                               |                                                                                                                                                                                  |
| `productId`                                                                                                                                                                      | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The ID of the subscribed product.                                                                                                                                                |                                                                                                                                                                                  |
| `discountId`                                                                                                                                                                     | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The ID of the applied discount, if any.                                                                                                                                          |                                                                                                                                                                                  |
| `checkoutId`                                                                                                                                                                     | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `seats`                                                                                                                                                                          | *number*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | The number of seats for seat-based subscriptions. None for non-seat subscriptions.                                                                                               |                                                                                                                                                                                  |
| `customerCancellationReason`                                                                                                                                                     | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                                                                                   | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `customerCancellationComment`                                                                                                                                                    | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                       | Record<string, *components.MetadataOutputType*>                                                                                                                                  | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `customFieldData`                                                                                                                                                                | Record<string, *components.CustomFieldData*>                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                               | Key-value object storing custom field values.                                                                                                                                    |                                                                                                                                                                                  |
| `customer`                                                                                                                                                                       | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                                                                               | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `product`                                                                                                                                                                        | [components.Product](../../models/components/product.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | A product.                                                                                                                                                                       |                                                                                                                                                                                  |
| `discount`                                                                                                                                                                       | *components.SubscriptionDiscount*                                                                                                                                                | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `prices`                                                                                                                                                                         | *components.SubscriptionPrices*[]                                                                                                                                                | :heavy_check_mark:                                                                                                                                                               | List of enabled prices for the subscription.                                                                                                                                     |                                                                                                                                                                                  |
| `meters`                                                                                                                                                                         | [components.SubscriptionMeter](../../models/components/subscriptionmeter.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                               | List of meters associated with the subscription.                                                                                                                                 |                                                                                                                                                                                  |
| `pendingUpdate`                                                                                                                                                                  | [components.PendingSubscriptionUpdate](../../models/components/pendingsubscriptionupdate.md)                                                                                     | :heavy_check_mark:                                                                                                                                                               | Pending subscription update that will be applied at the beginning of the next period. If `null`, there is no pending update.                                                     |                                                                                                                                                                                  |