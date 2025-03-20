# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2025-03-02T11:27:13.468Z"),
  modifiedAt: new Date("2023-05-04T14:46:57.065Z"),
  id: "<value>",
  amount: 990454,
  currency: "Pa'anga",
  recurringInterval: "year",
  status: "trialing",
  currentPeriodStart: new Date("2023-11-10T23:09:56.492Z"),
  currentPeriodEnd: new Date("2024-07-03T17:51:43.386Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2025-08-21T20:11:48.916Z"),
  startedAt: new Date("2023-10-29T09:46:06.110Z"),
  endsAt: new Date("2024-07-02T14:08:14.339Z"),
  endedAt: new Date("2023-09-15T01:36:02.246Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "missing_features",
  customerCancellationComment: "<value>",
  priceId: "<value>",
  metadata: {
    "key": "<value>",
  },
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-12-21T15:08:34.645Z"),
    modifiedAt: new Date("2024-09-18T08:40:07.794Z"),
    metadata: {
      "key": false,
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
    deletedAt: new Date("2025-09-05T07:59:50.566Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Cassandra_Mueller93@gmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2023-10-12T06:34:08.121Z"),
    modifiedAt: new Date("2024-04-13T11:56:41.335Z"),
    id: "<value>",
    name: "<value>",
    description: "er yahoo indeed",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 887865,
    },
    prices: [
      {
        createdAt: new Date("2025-11-01T03:26:54.317Z"),
        modifiedAt: new Date("2025-03-09T07:16:52.030Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 777193,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-05-24T01:57:15.304Z"),
        modifiedAt: new Date("2023-05-10T14:04:59.269Z"),
        id: "<value>",
        description: "sightseeing drat than sailor",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          note: "<value>",
        },
        isTaxApplicable: false,
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/libexec",
        mimeType: "<value>",
        size: 30288,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-22T00:19:05.206Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-02-18T18:46:52.437Z"),
        sizeReadable: "<value>",
        publicUrl: "https://digital-cutover.info/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-11-20T15:48:38.836Z"),
          modifiedAt: new Date("2024-01-22T05:43:00.785Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 181041,
        required: false,
      },
    ],
  },
  discount: {
    duration: "once",
    durationInMonths: 462761,
    type: "fixed",
    basisPoints: 810291,
    createdAt: new Date("2025-11-07T17:35:04.891Z"),
    modifiedAt: new Date("2023-02-08T11:27:51.416Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-04-28T03:27:09.943Z"),
    endsAt: new Date("2024-01-29T07:29:41.887Z"),
    maxRedemptions: 908877,
    redemptionsCount: 296257,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  price: {
    createdAt: new Date("2024-12-21T00:07:20.834Z"),
    modifiedAt: new Date("2023-02-02T10:37:12.717Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
    priceCurrency: "<value>",
    minimumAmount: 683192,
    maximumAmount: 821238,
    presetAmount: 149941,
  },
  prices: [
    {
      createdAt: new Date("2024-09-05T06:56:35.986Z"),
      modifiedAt: new Date("2024-10-02T18:29:29.401Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
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
| `metadata`                                                                                                                    | Record<string, *components.Metadata*>                                                                                         | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customFieldData`                                                                                                             | Record<string, *components.CustomFieldData*>                                                                                  | :heavy_minus_sign:                                                                                                            | Key-value object storing custom field values.                                                                                 |
| `customer`                                                                                                                    | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                            | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| ~~`userId`~~                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| `user`                                                                                                                        | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `product`                                                                                                                     | [components.Product](../../models/components/product.md)                                                                      | :heavy_check_mark:                                                                                                            | A product.                                                                                                                    |
| `discount`                                                                                                                    | *components.SubscriptionDiscount*                                                                                             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| ~~`price`~~                                                                                                                   | *components.Price*                                                                                                            | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| `prices`                                                                                                                      | *components.SubscriptionPrices*[]                                                                                             | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |