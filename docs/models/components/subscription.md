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
  status: "past_due",
  currentPeriodStart: new Date("2024-09-17T19:50:05.034Z"),
  currentPeriodEnd: new Date("2026-12-24T04:01:55.073Z"),
  currentMeterPeriodStart: new Date("2024-07-17T13:08:55.704Z"),
  currentMeterPeriodEnd: new Date("2025-12-01T07:13:21.079Z"),
  trialStart: null,
  trialEnd: new Date("2025-12-18T00:59:29.267Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2024-02-27T19:32:42.165Z"),
  startedAt: null,
  endsAt: new Date("2024-01-08T23:04:09.508Z"),
  endedAt: new Date("2025-01-19T02:42:04.239Z"),
  pauseAtPeriodEnd: true,
  pausedAt: new Date("2024-01-22T18:31:00.136Z"),
  resumesAt: new Date("2024-04-03T11:16:59.643Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "customer_service",
  customerCancellationComment: "<value>",
  metadata: {
    "key": 2784.53,
  },
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-09-11T22:43:44.126Z"),
    modifiedAt: new Date("2024-11-20T04:38:53.340Z"),
    metadata: {},
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingName: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-09-01T19:21:53.135Z"),
    firstUserEventAt: new Date("2024-04-06T20:53:24.313Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  product: {
    id: "<value>",
    createdAt: new Date("2026-09-10T22:17:40.637Z"),
    modifiedAt: new Date("2026-02-16T12:29:23.294Z"),
    trialInterval: "day",
    trialIntervalCount: 389704,
    name: "<value>",
    description:
      "formula zowie familiarize ceramic joyously unique why deck fluctuate",
    visibility: "private",
    recurringInterval: "day",
    recurringIntervalCount: 186229,
    meterInterval: "month",
    meterIntervalCount: 976880,
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2026-10-14T01:53:23.230Z"),
        modifiedAt: new Date("2025-01-05T02:03:02.818Z"),
        type: "custom",
        description:
          "importance usefully breed plus patiently lazy pulp ick healthily e-mail",
        selectable: true,
        deletable: true,
        isDeleted: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        visibility: "private",
        properties: {
          note: null,
        },
        visibilityConfigurable: false,
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/var/yp",
        mimeType: "<value>",
        size: 772025,
        storageVersion: null,
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-10-14T04:04:24.781Z"),
        version: "<value>",
        service: "product_media",
        isUploaded: false,
        createdAt: new Date("2026-03-20T16:38:16.465Z"),
        sizeReadable: "<value>",
        publicUrl: "https://esteemed-coal.com",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-06-02T04:10:19.278Z"),
          modifiedAt: new Date("2025-08-16T21:21:02.814Z"),
          id: "<value>",
          metadata: {
            "key": 488238,
          },
          type: "number",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 275070,
        required: true,
      },
    ],
  },
  discount: {
    duration: "repeating",
    durationInMonths: 832052,
    type: "percentage",
    amount: 1000,
    currency: "usd",
    amounts: {
      "eur": 900,
      "usd": 1000,
    },
    createdAt: new Date("2025-06-25T13:41:11.193Z"),
    modifiedAt: new Date("2024-03-10T20:38:31.600Z"),
    id: "<value>",
    metadata: {
      "key": 1984.38,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-08-06T08:10:45.405Z"),
    endsAt: new Date("2024-02-21T14:45:53.075Z"),
    maxRedemptions: 844036,
    maxRedemptionsPerCustomer: 891168,
    redemptionsCount: 515748,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  prices: [
    {
      createdAt: new Date("2025-03-24T05:52:48.816Z"),
      modifiedAt: new Date("2024-11-14T16:14:31.196Z"),
      id: "<value>",
      source: "ad_hoc",
      amountType: "custom",
      priceCurrency: "<value>",
      taxBehavior: "exclusive",
      isArchived: true,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "week",
      minimumAmount: 375432,
      maximumAmount: 301035,
      presetAmount: 797319,
      legacy: true,
    },
  ],
  meters: [],
  pendingUpdate: {
    createdAt: new Date("2025-08-18T08:06:18.153Z"),
    modifiedAt: new Date("2024-09-18T15:34:20.197Z"),
    id: "<value>",
    appliesAt: new Date("2024-04-09T10:02:05.072Z"),
    productId: "<value>",
    seats: 333931,
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
| `recurringInterval`                                                                                                                                                              | [components.RecurringInterval](../../models/components/recurringinterval.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `recurringIntervalCount`                                                                                                                                                         | *number*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. |                                                                                                                                                                                  |
| `status`                                                                                                                                                                         | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |
| `currentPeriodStart`                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The start timestamp of the current billing period.                                                                                                                               |                                                                                                                                                                                  |
| `currentPeriodEnd`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The end timestamp of the current billing period.                                                                                                                                 |                                                                                                                                                                                  |
| `currentMeterPeriodStart`                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The start timestamp of the current meter period, if the product has a meter cycle set. Metered credits are granted and overage is settled on this cadence.                       |                                                                                                                                                                                  |
| `currentMeterPeriodEnd`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The end timestamp of the current meter period, if the product has a meter cycle set. This is when credits next renew.                                                            |                                                                                                                                                                                  |
| `trialStart`                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The start timestamp of the trial period, if any.                                                                                                                                 |                                                                                                                                                                                  |
| `trialEnd`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The end timestamp of the trial period, if any.                                                                                                                                   |                                                                                                                                                                                  |
| `cancelAtPeriodEnd`                                                                                                                                                              | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | Whether the subscription will be canceled at the end of the current period.                                                                                                      |                                                                                                                                                                                  |
| `canceledAt`                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`.                                                    |                                                                                                                                                                                  |
| `startedAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription started.                                                                                                                                     |                                                                                                                                                                                  |
| `endsAt`                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription will end.                                                                                                                                    |                                                                                                                                                                                  |
| `endedAt`                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription ended.                                                                                                                                       |                                                                                                                                                                                  |
| `pastDueAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_minus_sign:                                                                                                                                                               | The timestamp when the subscription entered `past_due` status.                                                                                                                   |                                                                                                                                                                                  |
| `pauseAtPeriodEnd`                                                                                                                                                               | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | Whether the subscription will be paused at the end of the current period.                                                                                                        |                                                                                                                                                                                  |
| `pausedAt`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when the subscription was paused.                                                                                                                                  |                                                                                                                                                                                  |
| `resumesAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | The timestamp when a paused subscription is scheduled to automatically resume, if set.                                                                                           |                                                                                                                                                                                  |
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