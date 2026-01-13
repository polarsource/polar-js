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
  currentPeriodEnd: new Date("2026-04-26T12:14:05.888Z"),
  trialStart: new Date("2024-05-20T15:44:39.020Z"),
  trialEnd: new Date("2024-04-05T00:49:40.768Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2026-07-14T08:13:59.069Z"),
  startedAt: new Date("2024-02-27T19:32:42.165Z"),
  endsAt: null,
  endedAt: new Date("2024-01-08T23:04:09.508Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "unused",
  customerCancellationComment: null,
  metadata: {},
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
    recurringInterval: "year",
    recurringIntervalCount: null,
    isRecurring: true,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 9159.56,
    },
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-11-20T23:12:51.407Z"),
        modifiedAt: new Date("2024-01-07T14:45:36.833Z"),
        type: "meter_credit",
        description: "yowza revoke in heavenly cautious wearily",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        properties: {
          units: 76669,
          rollover: false,
          meterId: "<value>",
        },
      },
    ],
    medias: [],
    attachedCustomFields: [],
  },
  discount: null,
  prices: [
    {
      createdAt: new Date("2024-02-09T14:10:32.360Z"),
      modifiedAt: new Date("2026-08-31T04:18:20.273Z"),
      id: "<value>",
      source: "ad_hoc",
      amountType: "fixed",
      isArchived: true,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 832052,
      legacy: true,
    },
  ],
  meters: [
    {
      createdAt: new Date("2025-06-25T13:41:11.193Z"),
      modifiedAt: new Date("2024-03-10T20:38:31.600Z"),
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