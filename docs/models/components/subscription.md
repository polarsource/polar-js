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
  recurringInterval: "year",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2025-12-24T04:01:55.073Z"),
  currentPeriodEnd: new Date("2023-07-18T13:08:55.704Z"),
  cancelAtPeriodEnd: true,
  canceledAt: new Date("2023-04-06T00:49:40.768Z"),
  startedAt: new Date("2024-12-18T00:59:29.267Z"),
  endsAt: new Date("2024-11-17T12:28:40.687Z"),
  endedAt: null,
  customerId: "<value>",
  productId: "<value>",
  discountId: null,
  checkoutId: "<value>",
  customerCancellationReason: null,
  customerCancellationComment: "<value>",
  metadata: {},
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-03-21T22:53:47.601Z"),
    modifiedAt: new Date("2025-08-17T22:26:31.092Z"),
    metadata: {
      "key": 5317.17,
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
    deletedAt: new Date("2025-03-15T06:51:53.014Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  product: {
    createdAt: new Date("2025-05-29T06:38:49.802Z"),
    modifiedAt: new Date("2024-09-23T10:26:31.492Z"),
    id: "<value>",
    name: "<value>",
    description: "hm sense busily outside extremely challenge",
    recurringInterval: "year",
    isRecurring: true,
    isArchived: false,
    organizationId: "<value>",
    metadata: {},
    prices: [
      {
        createdAt: new Date("2024-10-12T20:51:20.798Z"),
        modifiedAt: new Date("2023-02-09T14:10:32.360Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 510457,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-01-16T01:29:59.311Z"),
        modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
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
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 327832,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: null,
        version: "<value>",
        isUploaded: true,
        createdAt: new Date("2023-11-10T03:13:37.813Z"),
        sizeReadable: "<value>",
        publicUrl: "https://warlike-tinderbox.com",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-07-28T05:12:23.569Z"),
          modifiedAt: null,
          id: "<value>",
          metadata: {},
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {
            options: [],
          },
        },
        order: 650710,
        required: true,
      },
    ],
  },
  discount: {
    duration: "forever",
    durationInMonths: 75972,
    type: "fixed",
    basisPoints: 318562,
    createdAt: new Date("2025-11-15T04:46:36.215Z"),
    modifiedAt: new Date("2025-12-18T11:14:27.994Z"),
    id: "<value>",
    metadata: {},
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-04-27T01:57:17.453Z"),
    endsAt: null,
    maxRedemptions: 416834,
    redemptionsCount: 667167,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  prices: [],
  meters: [],
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
| `metadata`                                                                                                                    | Record<string, *components.Metadata*>                                                                                         | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customFieldData`                                                                                                             | Record<string, *components.CustomFieldData*>                                                                                  | :heavy_minus_sign:                                                                                                            | Key-value object storing custom field values.                                                                                 |
| `customer`                                                                                                                    | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                            | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `product`                                                                                                                     | [components.Product](../../models/components/product.md)                                                                      | :heavy_check_mark:                                                                                                            | A product.                                                                                                                    |
| `discount`                                                                                                                    | *components.SubscriptionDiscount*                                                                                             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `prices`                                                                                                                      | *components.SubscriptionPrices*[]                                                                                             | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |
| `meters`                                                                                                                      | [components.SubscriptionMeter](../../models/components/subscriptionmeter.md)[]                                                | :heavy_check_mark:                                                                                                            | List of meters associated with the subscription.                                                                              |