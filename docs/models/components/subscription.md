# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2023-09-06T19:28:31.689Z"),
  modifiedAt: new Date("2023-05-18T04:15:08.103Z"),
  id: "<value>",
  amount: 964210,
  currency: "Somali Shilling",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2024-03-29T11:45:32.202Z"),
  currentPeriodEnd: new Date("2023-06-16T00:41:16.617Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2023-06-27T15:10:04.073Z"),
  startedAt: new Date("2025-11-21T23:06:53.071Z"),
  endsAt: new Date("2023-12-01T05:46:40.326Z"),
  endedAt: new Date("2025-10-28T19:37:08.863Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "customer_service",
  customerCancellationComment: "<value>",
  metadata: {
    "key": 129619,
  },
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-01-06T05:55:38.572Z"),
    modifiedAt: new Date("2024-08-29T22:15:46.090Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Trudie_Gulgowski@gmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2024-02-16T15:28:53.569Z"),
    modifiedAt: new Date("2024-01-29T13:56:15.278Z"),
    id: "<value>",
    name: "<value>",
    description: "where nicely heating for perfectly midwife loyalty",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 601944,
    },
    prices: [
      {
        createdAt: new Date("2025-03-02T20:38:32.287Z"),
        modifiedAt: new Date("2023-09-19T15:47:11.283Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 686784,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-04-22T19:44:51.587Z"),
        modifiedAt: new Date("2023-04-02T03:33:58.167Z"),
        id: "<value>",
        description:
          "request times nervously unless presume incidentally soybean showy contractor seemingly",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          guildId: "<id>",
          roleId: "<id>",
          guildToken: "<value>",
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
        size: 29270,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-04-21T17:03:43.493Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-09-22T11:12:54.955Z"),
        sizeReadable: "<value>",
        publicUrl: "https://granular-wombat.name/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-04-22T19:31:18.310Z"),
          modifiedAt: new Date("2025-05-13T11:35:30.480Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 921916,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2025-03-04T14:00:13.445Z"),
    modifiedAt: new Date("2023-08-11T22:07:27.220Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
    priceCurrency: "<value>",
    minimumAmount: 319807,
    maximumAmount: 816825,
    presetAmount: 539537,
  },
  discount: {
    duration: "forever",
    type: "percentage",
    amount: 538368,
    currency: "Mauritius Rupee",
    createdAt: new Date("2023-09-04T08:32:34.245Z"),
    modifiedAt: new Date("2025-07-18T02:56:07.362Z"),
    id: "<value>",
    metadata: {
      "key": 713246,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-12-12T02:57:22.912Z"),
    endsAt: new Date("2024-04-14T07:20:14.969Z"),
    maxRedemptions: 881067,
    redemptionsCount: 7281,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
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
| `priceId`                                                                                                                     | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the subscribed price.                                                                                               |
| `discountId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the applied discount, if any.                                                                                       |
| `checkoutId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customerCancellationReason`                                                                                                  | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customerCancellationComment`                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `metadata`                                                                                                                    | Record<string, *components.SubscriptionMetadata*>                                                                             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customFieldData`                                                                                                             | Record<string, *components.SubscriptionCustomFieldData*>                                                                      | :heavy_minus_sign:                                                                                                            | Key-value object storing custom field values.                                                                                 |
| `customer`                                                                                                                    | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                            | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| ~~`userId`~~                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| `user`                                                                                                                        | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `product`                                                                                                                     | [components.Product](../../models/components/product.md)                                                                      | :heavy_check_mark:                                                                                                            | A product.                                                                                                                    |
| `price`                                                                                                                       | *components.SubscriptionPrice*                                                                                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `discount`                                                                                                                    | *components.SubscriptionDiscount*                                                                                             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |