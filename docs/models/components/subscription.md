# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2024-03-10T05:14:19.198Z"),
  modifiedAt: new Date("2024-10-21T17:31:37.327Z"),
  id: "<value>",
  amount: 63369,
  currency: "Jamaican Dollar",
  recurringInterval: "year",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2025-10-31T10:26:27.251Z"),
  currentPeriodEnd: new Date("2025-01-22T17:08:58.929Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2023-11-12T04:22:58.334Z"),
  startedAt: new Date("2025-04-22T19:44:51.587Z"),
  endsAt: new Date("2023-04-02T03:33:58.167Z"),
  endedAt: new Date("2025-12-04T08:27:59.075Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "customer_service",
  customerCancellationComment: "<value>",
  metadata: {
    "key": false,
  },
  customer: {
    createdAt: new Date("2023-10-05T03:04:06.241Z"),
    modifiedAt: new Date("2025-04-10T13:48:19.184Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Nellie.Buckridge@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Norway",
    },
    taxId: [
      "in_gst",
    ],
    organizationId: "<value>",
    avatarUrl: "https://corrupt-shadowbox.net/",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Joshua.Cruickshank@yahoo.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2024-06-17T07:41:11.850Z"),
    modifiedAt: new Date("2025-01-29T00:57:24.858Z"),
    id: "<value>",
    name: "<value>",
    description: "with ick enlightened wide solemnly lest onto closely arcade",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    prices: [
      {
        createdAt: new Date("2023-09-04T08:32:34.245Z"),
        modifiedAt: new Date("2025-07-18T02:56:07.362Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 981865,
        maximumAmount: 428199,
        presetAmount: 881067,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-02-06T14:44:43.529Z"),
        modifiedAt: new Date("2024-10-08T22:43:23.020Z"),
        id: "<value>",
        description: "sweet majority wonderfully bah with",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          imageHeight: 400,
          imageWidth: 400,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/var/spool",
        mimeType: "<value>",
        size: 650200,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-08T11:24:13.011Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-05-25T18:14:09.419Z"),
        sizeReadable: "<value>",
        publicUrl: "https://ambitious-cap.com",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-01-08T06:10:49.913Z"),
          modifiedAt: new Date("2024-11-30T05:07:28.563Z"),
          id: "<value>",
          metadata: {
            "key": 385828,
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
        order: 531568,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2024-09-22T21:28:43.149Z"),
    modifiedAt: new Date("2024-11-04T08:19:22.907Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "year",
  },
  discount: {
    duration: "repeating",
    type: "fixed",
    basisPoints: 420910,
    createdAt: new Date("2023-10-09T15:28:56.919Z"),
    modifiedAt: new Date("2023-10-20T14:32:02.541Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-11-14T18:11:25.229Z"),
    endsAt: new Date("2024-04-26T23:03:38.458Z"),
    maxRedemptions: 10585,
    redemptionsCount: 964928,
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
| `price`                                                                                                                 | *components.Price*                                                                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.SubscriptionDiscount*                                                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |