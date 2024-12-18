# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2022-12-15T22:38:22.380Z"),
  modifiedAt: new Date("2022-07-04T06:48:36.981Z"),
  id: "<value>",
  amount: 556133,
  currency: "Dalasi",
  recurringInterval: "year",
  status: "unpaid",
  currentPeriodStart: new Date("2023-11-11T15:47:28.185Z"),
  currentPeriodEnd: new Date("2023-11-08T18:38:53.264Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-12-15T23:23:51.945Z"),
  endedAt: new Date("2024-08-30T11:05:45.637Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  metadata: {
    "key": false,
  },
  customer: {
    createdAt: new Date("2022-12-10T16:41:14.824Z"),
    modifiedAt: new Date("2023-02-05T15:08:18.944Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Yolanda.Carroll@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Comoros",
    },
    taxId: [
      "my_itn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://far-off-bandwidth.biz/",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Clemens.Beatty13@gmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2022-11-24T10:19:41.436Z"),
    modifiedAt: new Date("2022-10-07T13:11:52.112Z"),
    id: "<value>",
    name: "<value>",
    description:
      "beneath lumpy per firm table restfully intent arrogantly inquisitively",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 657862,
    },
    prices: [
      {
        createdAt: new Date("2024-12-13T16:03:43.381Z"),
        modifiedAt: new Date("2022-02-03T08:20:20.613Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-02-16T10:20:38.020Z"),
        modifiedAt: new Date("2022-09-07T14:29:56.720Z"),
        id: "<value>",
        description: "nervous save uncommon likewise separately content",
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
        path: "/home",
        mimeType: "<value>",
        size: 481042,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-11-23T21:03:26.961Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-08-03T08:45:30.623Z"),
        sizeReadable: "<value>",
        publicUrl: "https://guilty-steak.net",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-07-17T15:34:53.162Z"),
          modifiedAt: new Date("2023-03-31T05:51:52.889Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 840641,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2023-01-19T21:32:01.817Z"),
    modifiedAt: new Date("2024-10-05T00:47:16.247Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 960767,
    recurringInterval: "year",
  },
  discount: {
    duration: "once",
    type: "percentage",
    basisPoints: 546868,
    createdAt: new Date("2023-01-08T18:00:36.094Z"),
    modifiedAt: new Date("2022-03-17T04:22:16.108Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-01-28T08:24:34.111Z"),
    endsAt: new Date("2023-04-22T21:58:29.328Z"),
    maxRedemptions: 590927,
    redemptionsCount: 722392,
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
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `metadata`                                                                                                              | Record<string, *components.Metadata*>                                                                                   | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customFieldData`                                                                                                       | [components.SubscriptionCustomFieldData](../../models/components/subscriptioncustomfielddata.md)                        | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |
| `customer`                                                                                                              | [components.SubscriptionCustomer](../../models/components/subscriptioncustomer.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `user`                                                                                                                  | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `product`                                                                                                               | [components.Product](../../models/components/product.md)                                                                | :heavy_check_mark:                                                                                                      | A product.                                                                                                              |
| `price`                                                                                                                 | *components.ProductPriceRecurring*                                                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.SubscriptionDiscount*                                                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |