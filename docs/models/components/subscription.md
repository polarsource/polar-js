# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2023-08-01T20:43:13.861Z"),
  modifiedAt: new Date("2024-06-06T01:41:03.635Z"),
  id: "<value>",
  amount: 636180,
  currency: "Nakfa",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2023-09-18T19:50:05.034Z"),
  currentPeriodEnd: new Date("2025-12-24T04:01:55.073Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2025-04-26T12:14:05.888Z"),
  startedAt: new Date("2023-07-18T13:08:55.704Z"),
  endsAt: new Date("2023-05-21T15:44:39.020Z"),
  endedAt: new Date("2024-12-01T07:13:21.079Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "customer_service",
  customerCancellationComment: "<value>",
  metadata: {
    "key": 6542.35,
  },
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-07-14T08:13:59.069Z"),
    modifiedAt: new Date("2024-11-17T12:28:40.687Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2023-01-08T23:04:09.508Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  product: {
    createdAt: new Date("2025-04-05T05:10:54.629Z"),
    modifiedAt: new Date("2024-01-20T02:42:04.239Z"),
    id: "<value>",
    name: "<value>",
    description: "ew less gadzooks armchair new unit",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 940861,
    },
    prices: [
      {
        createdAt: new Date("2025-05-23T20:40:37.708Z"),
        modifiedAt: new Date("2023-12-02T19:18:27.422Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2024-09-19T13:39:25.849Z"),
        modifiedAt: new Date("2024-07-21T20:55:28.613Z"),
        description: "final convoke scaly phew siege",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {
          "key": 931.52,
        },
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "push",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/opt/include",
        mimeType: "<value>",
        size: 615195,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-04T14:15:01.091Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-02-17T13:48:01.906Z"),
        sizeReadable: "<value>",
        publicUrl: "https://shameless-laughter.info",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-09-24T14:32:13.939Z"),
          modifiedAt: new Date("2023-05-25T14:59:09.071Z"),
          id: "<value>",
          metadata: {
            "key": 308808,
          },
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
        order: 585371,
        required: false,
      },
    ],
  },
  discount: {
    duration: "once",
    type: "fixed",
    amount: 185916,
    currency: "Brunei Dollar",
    createdAt: new Date("2024-11-30T12:11:39.373Z"),
    modifiedAt: new Date("2025-04-15T03:44:19.963Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-06-28T13:01:17.162Z"),
    endsAt: new Date("2025-01-06T18:30:57.108Z"),
    maxRedemptions: 375525,
    redemptionsCount: 785363,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  prices: [
    {
      createdAt: new Date("2023-04-26T17:31:07.183Z"),
      modifiedAt: new Date("2025-10-09T23:42:21.091Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 168279,
    },
  ],
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