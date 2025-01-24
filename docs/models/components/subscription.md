# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2023-10-25T14:52:48.050Z"),
  modifiedAt: new Date("2024-10-27T20:52:23.318Z"),
  id: "<value>",
  amount: 526584,
  currency: "Malagasy Ariary",
  recurringInterval: "year",
  status: "trialing",
  currentPeriodStart: new Date("2025-12-13T20:14:50.509Z"),
  currentPeriodEnd: new Date("2025-09-15T17:39:34.108Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2024-05-17T18:14:48.703Z"),
  startedAt: new Date("2025-06-14T22:17:26.327Z"),
  endsAt: new Date("2025-04-22T21:00:43.699Z"),
  endedAt: new Date("2025-01-12T23:20:57.411Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "missing_features",
  customerCancellationComment: "<value>",
  metadata: {
    "key": "<value>",
  },
  customer: {
    createdAt: new Date("2025-01-05T23:51:52.329Z"),
    modifiedAt: new Date("2025-07-12T21:34:10.519Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Imelda.Hand51@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Poland",
    },
    taxId: [
      "au_arn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://apprehensive-vanadyl.net/",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Justyn.Hirthe@hotmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2024-01-29T23:03:20.464Z"),
    modifiedAt: new Date("2025-09-13T19:15:55.610Z"),
    id: "<value>",
    name: "<value>",
    description:
      "times worldly hover nimble whoever mmm boohoo straight innocently management",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 68596,
    },
    prices: [
      {
        createdAt: new Date("2024-04-21T21:58:29.328Z"),
        modifiedAt: new Date("2024-10-09T15:44:11.718Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 722392,
        maximumAmount: 317632,
        presetAmount: 328954,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-10-10T13:44:30.649Z"),
        modifiedAt: new Date("2025-03-22T07:24:15.908Z"),
        id: "<value>",
        description:
          "outrageous yahoo amongst peony despite energetically quixotic efface",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {},
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/private",
        mimeType: "<value>",
        size: 638363,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-04-22T12:57:54.328Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-01-07T14:51:30.818Z"),
        sizeReadable: "<value>",
        publicUrl: "https://dependent-heartache.name",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-05-26T14:43:35.408Z"),
          modifiedAt: new Date("2025-11-18T17:34:52.177Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 77992,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2023-03-14T23:44:59.723Z"),
    modifiedAt: new Date("2023-09-16T14:57:54.048Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
  },
  discount: {
    duration: "forever",
    type: "percentage",
    amount: 470321,
    currency: "CFP Franc",
    createdAt: new Date("2023-09-21T08:38:57.070Z"),
    modifiedAt: new Date("2025-04-16T09:38:26.220Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-09-08T00:35:13.118Z"),
    endsAt: new Date("2024-05-15T00:28:36.090Z"),
    maxRedemptions: 596185,
    redemptionsCount: 428810,
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
| `customFieldData`                                                                                                       | Record<string, *components.CustomFieldData*>                                                                            | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |
| `customer`                                                                                                              | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `user`                                                                                                                  | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `product`                                                                                                               | [components.Product](../../models/components/product.md)                                                                | :heavy_check_mark:                                                                                                      | A product.                                                                                                              |
| `price`                                                                                                                 | *components.ProductPriceRecurring*                                                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.SubscriptionDiscount*                                                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |