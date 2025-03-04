# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js";

let value: Subscription = {
  createdAt: new Date("2025-03-02T20:38:32.287Z"),
  modifiedAt: new Date("2023-09-19T15:47:11.283Z"),
  id: "<value>",
  amount: 943828,
  currency: "Zloty",
  recurringInterval: "month",
  status: "canceled",
  currentPeriodStart: new Date("2023-04-02T03:33:58.167Z"),
  currentPeriodEnd: new Date("2025-12-04T08:27:59.075Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2023-02-24T00:23:58.036Z"),
  startedAt: new Date("2025-10-20T01:37:25.539Z"),
  endsAt: new Date("2023-10-05T03:04:06.241Z"),
  endedAt: new Date("2025-04-10T13:48:19.184Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "customer_service",
  customerCancellationComment: "<value>",
  metadata: {
    "key": "<value>",
  },
  customer: {
    createdAt: new Date("2025-04-01T00:20:32.487Z"),
    modifiedAt: new Date("2024-08-06T10:34:04.832Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    externalId: "<id>",
    email: "Garrett_Orn@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Burkina Faso",
    },
    taxId: [
      "nz_gst",
    ],
    organizationId: "<value>",
    avatarUrl: "https://minty-pick.com/",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Emiliano_Kuhlman@gmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2023-05-28T03:45:35.250Z"),
    modifiedAt: new Date("2025-07-21T06:55:08.065Z"),
    id: "<value>",
    name: "<value>",
    description: "aha barring wise finally enlightened aha reiterate",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2023-08-11T22:07:27.220Z"),
        modifiedAt: new Date("2023-07-13T00:14:07.257Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-14T07:58:15.099Z"),
        modifiedAt: new Date("2023-02-20T06:02:51.866Z"),
        id: "<value>",
        description: "per beside sweet majority wonderfully bah",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 538877,
            timeframe: "year",
          },
          activations: {
            limit: 540223,
            enableCustomerAdmin: false,
          },
          limitUsage: 631904,
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
        size: 585051,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-11-26T06:30:19.542Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-11-19T22:05:14.154Z"),
        sizeReadable: "<value>",
        publicUrl: "https://measly-insolence.org",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-05-05T17:36:39.027Z"),
          modifiedAt: new Date("2023-04-22T20:53:41.146Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 339651,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2024-02-27T20:49:08.098Z"),
    modifiedAt: new Date("2024-08-05T14:21:26.517Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "year",
    priceCurrency: "<value>",
    minimumAmount: 575634,
    maximumAmount: 614368,
    presetAmount: 67855,
  },
  discount: {
    duration: "forever",
    durationInMonths: 801274,
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
| `metadata`                                                                                                              | Record<string, *components.SubscriptionMetadata*>                                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customFieldData`                                                                                                       | Record<string, *components.SubscriptionCustomFieldData*>                                                                | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |
| `customer`                                                                                                              | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `user`                                                                                                                  | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `product`                                                                                                               | [components.Product](../../models/components/product.md)                                                                | :heavy_check_mark:                                                                                                      | A product.                                                                                                              |
| `price`                                                                                                                 | *components.SubscriptionPrice*                                                                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.SubscriptionDiscount*                                                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |