# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2025-01-12T23:20:57.411Z"),
  modifiedAt: new Date("2023-12-17T12:54:38.255Z"),
  id: "<value>",
  amount: 196451,
  currency: "Philippine Peso",
  recurringInterval: "year",
  status: "incomplete",
  currentPeriodStart: new Date("2024-12-05T12:17:59.943Z"),
  currentPeriodEnd: new Date("2024-04-30T09:19:55.343Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2025-09-11T07:18:01.119Z"),
  startedAt: new Date("2023-12-19T08:01:26.303Z"),
  endsAt: new Date("2024-06-03T16:57:26.286Z"),
  endedAt: new Date("2024-07-18T04:26:02.056Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "low_quality",
  customerCancellationComment: "<value>",
  metadata: {
    "key": false,
  },
  customer: {
    createdAt: new Date("2025-06-29T04:50:59.216Z"),
    modifiedAt: new Date("2023-03-05T11:14:44.230Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Vern_Wintheiser@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Grenada",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://hateful-tenement.org",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Clement44@gmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2023-09-01T02:51:33.474Z"),
    modifiedAt: new Date("2024-06-25T08:44:09.618Z"),
    id: "<value>",
    name: "<value>",
    description:
      "around glaring untrue suspension expatiate whether inexperienced palate geez afterwards",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2024-11-19T15:10:01.179Z"),
        modifiedAt: new Date("2025-04-23T16:31:49.440Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-02-28T11:16:40.701Z"),
        modifiedAt: new Date("2025-12-08T23:54:11.569Z"),
        id: "<value>",
        description:
          "whereas tomatillo disloyal jovially cleverly wrong abnegate convection bogus till",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 470321,
            timeframe: "day",
          },
          activations: {
            limit: 240292,
            enableCustomerAdmin: false,
          },
          limitUsage: 763140,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/share",
        mimeType: "<value>",
        size: 562066,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-05-15T00:28:36.090Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-15T10:02:08.477Z"),
        sizeReadable: "<value>",
        publicUrl: "https://nimble-heartbeat.info/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-04-12T18:21:29.910Z"),
          modifiedAt: new Date("2023-07-02T12:43:21.651Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 771078,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2024-02-18T11:40:55.217Z"),
    modifiedAt: new Date("2025-10-11T22:12:04.430Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 818078,
    recurringInterval: "year",
  },
  discount: {
    duration: "once",
    type: "fixed",
    amount: 672627,
    currency: "Somoni",
    createdAt: new Date("2025-07-23T13:07:53.786Z"),
    modifiedAt: new Date("2023-02-05T22:08:14.307Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-01-07T15:32:38.599Z"),
    endsAt: new Date("2023-07-26T20:24:43.477Z"),
    maxRedemptions: 802976,
    redemptionsCount: 767466,
    organizationId: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the object.                                                                                                   |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `recurringInterval`                                                                                                     | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `status`                                                                                                                | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodStart`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodEnd`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `cancelAtPeriodEnd`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `canceledAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endsAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationReason`                                                                                            | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationComment`                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `metadata`                                                                                                              | Record<string, *components.Metadata*>                                                                                   | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customFieldData`                                                                                                       | [components.SubscriptionCustomFieldData](../../models/components/subscriptioncustomfielddata.md)                        | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |
| `customer`                                                                                                              | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `user`                                                                                                                  | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `product`                                                                                                               | [components.Product](../../models/components/product.md)                                                                | :heavy_check_mark:                                                                                                      | A product.                                                                                                              |
| `price`                                                                                                                 | *components.ProductPriceRecurring*                                                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.SubscriptionDiscount*                                                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |