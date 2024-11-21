# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2024-03-12T00:37:19.394Z"),
  modifiedAt: new Date("2024-07-10T10:39:26.328Z"),
  id: "<value>",
  amount: 11332,
  currency: "Lebanese Pound",
  recurringInterval: "month",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2023-12-31T14:43:18.767Z"),
  currentPeriodEnd: new Date("2024-07-04T18:11:33.164Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2023-08-20T16:02:56.231Z"),
  endedAt: new Date("2022-08-01T09:33:41.426Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  metadata: {
    "key": false,
  },
  user: {
    email: "Quincy69@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://lean-minor.org/",
  },
  product: {
    createdAt: new Date("2022-09-28T20:54:23.206Z"),
    modifiedAt: new Date("2024-11-19T22:47:37.652Z"),
    id: "<value>",
    name: "<value>",
    description: "source overcharge shear astride dearest factorise unlearn",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 239427,
    },
    prices: [
      {
        createdAt: new Date("2024-10-22T02:08:30.992Z"),
        modifiedAt: new Date("2024-09-20T14:50:47.405Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-10-09T19:45:27.040Z"),
        modifiedAt: new Date("2023-03-26T00:12:31.127Z"),
        id: "<value>",
        description: "joyously through nor cheerfully neatly juvenile",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 614775,
            timeframe: "month",
          },
          activations: {
            limit: 269577,
            enableUserAdmin: false,
          },
          limitUsage: 178017,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/rescue",
        mimeType: "<value>",
        size: 307263,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-02-27T05:06:06.011Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-01-02T19:45:35.845Z"),
        sizeReadable: "<value>",
        publicUrl: "https://baggy-receptor.biz",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-10-21T05:01:51.503Z"),
          modifiedAt: new Date("2024-12-13T21:16:19.781Z"),
          id: "<value>",
          metadata: {
            "key": 869319,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 61840,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2024-01-18T05:10:09.456Z"),
    modifiedAt: new Date("2023-02-16T10:14:16.859Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 129469,
    maximumAmount: 15406,
    presetAmount: 386742,
    recurringInterval: "year",
  },
  discount: {
    duration: "forever",
    durationInMonths: 294917,
    type: "fixed",
    basisPoints: 91931,
    createdAt: new Date("2023-05-09T07:46:42.461Z"),
    modifiedAt: new Date("2023-11-19T07:59:28.683Z"),
    id: "<value>",
    metadata: {
      "key": 12769,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-11-26T13:41:08.143Z"),
    endsAt: new Date("2023-12-31T14:12:56.950Z"),
    maxRedemptions: 502025,
    redemptionsCount: 944880,
    organizationId: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currency`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cancelAtPeriodEnd`                                                                                  | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `startedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `discountId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `checkoutId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *components.Metadata*>                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customFieldData`                                                                                    | [components.SubscriptionCustomFieldData](../../models/components/subscriptioncustomfielddata.md)     | :heavy_minus_sign:                                                                                   | Key-value object storing custom field values.                                                        |
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.Product](../../models/components/product.md)                                             | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceRecurring*                                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `discount`                                                                                           | *components.SubscriptionDiscount*                                                                    | :heavy_check_mark:                                                                                   | N/A                                                                                                  |