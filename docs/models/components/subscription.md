# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2023-08-01T20:43:13.861Z"),
  modifiedAt: new Date("2024-11-28T06:04:05.260Z"),
  id: "<value>",
  amount: 10000,
  currency: "usd",
  recurringInterval: "week",
  recurringIntervalCount: 218416,
  status: "active",
  currentPeriodStart: new Date("2023-09-18T19:50:05.034Z"),
  currentPeriodEnd: new Date("2025-04-26T12:14:05.888Z"),
  trialStart: new Date("2023-05-21T15:44:39.020Z"),
  trialEnd: new Date("2023-04-06T00:49:40.768Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2025-07-14T08:13:59.069Z"),
  startedAt: new Date("2023-02-27T19:32:42.165Z"),
  endsAt: null,
  endedAt: new Date("2023-01-08T23:04:09.508Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "unused",
  customerCancellationComment: null,
  metadata: {},
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-10-21T10:07:05.567Z"),
    modifiedAt: new Date("2025-10-06T23:18:15.275Z"),
    metadata: {
      "key": 8022.6,
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
    deletedAt: new Date("2025-09-25T13:44:27.391Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  product: {
    id: "<value>",
    createdAt: new Date("2024-06-29T11:55:37.867Z"),
    modifiedAt: null,
    trialInterval: "week",
    trialIntervalCount: 279574,
    name: "<value>",
    description: "sense busily outside extremely challenge",
    recurringInterval: "month",
    recurringIntervalCount: null,
    isRecurring: false,
    isArchived: true,
    organizationId: "<value>",
    metadata: {
      "key": 3270.53,
    },
    prices: [
      {
        createdAt: new Date("2024-08-30T00:59:04.800Z"),
        modifiedAt: new Date("2023-11-19T07:09:34.058Z"),
        id: "<value>",
        amountType: "free",
        isArchived: true,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "week",
        legacy: true,
      },
    ],
    benefits: [],
    medias: [],
    attachedCustomFields: [],
  },
  discount: null,
  prices: [
    {
      createdAt: new Date("2023-02-09T14:10:32.360Z"),
      modifiedAt: new Date("2025-08-31T04:18:20.273Z"),
      id: "<value>",
      amountType: "fixed",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "week",
      priceCurrency: "<value>",
      priceAmount: 848542,
      legacy: true,
    },
  ],
  meters: [
    {
      createdAt: new Date("2025-07-24T18:19:06.074Z"),
      modifiedAt: new Date("2024-09-19T00:13:29.723Z"),
      id: "<value>",
      consumedUnits: 25,
      creditedUnits: 100,
      amount: 0,
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      meter: {
        metadata: {},
        createdAt: new Date("2024-10-27T01:55:18.902Z"),
        modifiedAt: new Date("2024-06-09T17:37:57.976Z"),
        id: "<value>",
        name: "<value>",
        filter: {
          conjunction: "and",
          clauses: [
            {
              conjunction: "or",
              clauses: [],
            },
          ],
        },
        aggregation: {},
        organizationId: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | Creation timestamp of the object.                                                                                                                                              |                                                                                                                                                                                |
| `modifiedAt`                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | Last modification timestamp of the object.                                                                                                                                     |                                                                                                                                                                                |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the object.                                                                                                                                                          |                                                                                                                                                                                |
| `amount`                                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The amount of the subscription.                                                                                                                                                | 10000                                                                                                                                                                          |
| `currency`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The currency of the subscription.                                                                                                                                              | usd                                                                                                                                                                            |
| `recurringInterval`                                                                                                                                                            | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `recurringIntervalCount`                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Number of interval units of the subscription.If this is set to 1 the charge will happen every interval (e.g. every month),if set to 2 it will be every other month, and so on. |                                                                                                                                                                                |
| `status`                                                                                                                                                                       | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `currentPeriodStart`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The start timestamp of the current billing period.                                                                                                                             |                                                                                                                                                                                |
| `currentPeriodEnd`                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The end timestamp of the current billing period.                                                                                                                               |                                                                                                                                                                                |
| `trialStart`                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The start timestamp of the trial period, if any.                                                                                                                               |                                                                                                                                                                                |
| `trialEnd`                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The end timestamp of the trial period, if any.                                                                                                                                 |                                                                                                                                                                                |
| `cancelAtPeriodEnd`                                                                                                                                                            | *boolean*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | Whether the subscription will be canceled at the end of the current period.                                                                                                    |                                                                                                                                                                                |
| `canceledAt`                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.                                                  |                                                                                                                                                                                |
| `startedAt`                                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The timestamp when the subscription started.                                                                                                                                   |                                                                                                                                                                                |
| `endsAt`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The timestamp when the subscription will end.                                                                                                                                  |                                                                                                                                                                                |
| `endedAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The timestamp when the subscription ended.                                                                                                                                     |                                                                                                                                                                                |
| `customerId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the subscribed customer.                                                                                                                                             |                                                                                                                                                                                |
| `productId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the subscribed product.                                                                                                                                              |                                                                                                                                                                                |
| `discountId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the applied discount, if any.                                                                                                                                        |                                                                                                                                                                                |
| `checkoutId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `customerCancellationReason`                                                                                                                                                   | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `customerCancellationComment`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `metadata`                                                                                                                                                                     | Record<string, *components.Metadata*>                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `customFieldData`                                                                                                                                                              | Record<string, *components.CustomFieldData*>                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Key-value object storing custom field values.                                                                                                                                  |                                                                                                                                                                                |
| `customer`                                                                                                                                                                     | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `product`                                                                                                                                                                      | [components.Product](../../models/components/product.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A product.                                                                                                                                                                     |                                                                                                                                                                                |
| `discount`                                                                                                                                                                     | *components.SubscriptionDiscount*                                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `prices`                                                                                                                                                                       | *components.SubscriptionPrices*[]                                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | List of enabled prices for the subscription.                                                                                                                                   |                                                                                                                                                                                |
| `meters`                                                                                                                                                                       | [components.SubscriptionMeter](../../models/components/subscriptionmeter.md)[]                                                                                                 | :heavy_check_mark:                                                                                                                                                             | List of meters associated with the subscription.                                                                                                                               |                                                                                                                                                                                |