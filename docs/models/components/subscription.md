# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2023-08-01T20:43:13.861Z"),
  modifiedAt: new Date("2024-11-28T06:04:05.260Z"),
  id: "<value>",
  amount: 254340,
  currency: "Czech Koruna",
  recurringInterval: "month",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2025-12-24T04:01:55.073Z"),
  currentPeriodEnd: new Date("2023-07-18T13:08:55.704Z"),
  trialStart: new Date("2024-12-01T07:13:21.079Z"),
  trialEnd: null,
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
    isRecurring: true,
    isArchived: false,
    organizationId: "<value>",
    metadata: {},
    prices: [
      {
        createdAt: new Date("2024-12-14T23:57:12.104Z"),
        modifiedAt: new Date("2025-02-07T10:27:56.492Z"),
        id: "<value>",
        amountType: "custom",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "week",
        priceCurrency: "<value>",
        minimumAmount: 232490,
        maximumAmount: null,
        presetAmount: 922780,
        legacy: true,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-01-16T01:29:59.311Z"),
        modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
        type: "license_keys",
        description: "out beneath off phew",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {},
        properties: {
          prefix: null,
          expires: {
            ttl: 56931,
            timeframe: "month",
          },
          activations: {
            limit: 936323,
            enableCustomerAdmin: false,
          },
          limitUsage: 702937,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/sbin",
        mimeType: "<value>",
        size: 498972,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
        version: "<value>",
        service: "product_media",
        isUploaded: false,
        createdAt: new Date("2024-08-06T00:24:30.544Z"),
        sizeReadable: "<value>",
        publicUrl: "https://enchanting-bell.net/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-01-17T02:26:08.207Z"),
          modifiedAt: new Date("2025-04-09T14:51:17.764Z"),
          id: "<value>",
          metadata: {
            "key": true,
          },
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
        order: 252765,
        required: false,
      },
    ],
  },
  discount: null,
  prices: [
    {
      createdAt: new Date("2023-02-09T14:10:32.360Z"),
      modifiedAt: new Date("2025-08-31T04:18:20.273Z"),
      id: "<value>",
      amountType: "custom",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "week",
      priceCurrency: "<value>",
      minimumAmount: 832052,
      maximumAmount: 494133,
      presetAmount: 63741,
      legacy: true,
    },
  ],
  meters: [
    {
      createdAt: new Date("2024-07-10T16:58:33.224Z"),
      modifiedAt: new Date("2025-02-06T15:53:25.753Z"),
      id: "<value>",
      consumedUnits: 25,
      creditedUnits: 100,
      amount: 0,
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      meter: {
        metadata: {},
        createdAt: new Date("2023-08-07T08:10:45.405Z"),
        modifiedAt: new Date("2023-02-21T14:45:53.075Z"),
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
        aggregation: {
          func: "sum",
          property: "<value>",
        },
        organizationId: "<value>",
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
| `trialStart`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The start timestamp of the trial period, if any.                                                                              |
| `trialEnd`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The end timestamp of the trial period, if any.                                                                                |
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
| `metadata`                                                                                                                    | Record<string, *components.Metadata*>                                                                                         | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customFieldData`                                                                                                             | Record<string, *components.CustomFieldData*>                                                                                  | :heavy_minus_sign:                                                                                                            | Key-value object storing custom field values.                                                                                 |
| `customer`                                                                                                                    | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                            | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `product`                                                                                                                     | [components.Product](../../models/components/product.md)                                                                      | :heavy_check_mark:                                                                                                            | A product.                                                                                                                    |
| `discount`                                                                                                                    | *components.SubscriptionDiscount*                                                                                             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `prices`                                                                                                                      | *components.SubscriptionPrices*[]                                                                                             | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |
| `meters`                                                                                                                      | [components.SubscriptionMeter](../../models/components/subscriptionmeter.md)[]                                                | :heavy_check_mark:                                                                                                            | List of meters associated with the subscription.                                                                              |