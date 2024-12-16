# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2023-08-07T10:09:14.092Z"),
  modifiedAt: new Date("2024-02-10T16:41:01.958Z"),
  id: "<value>",
  amount: 949280,
  currency: "Guarani",
  recurringInterval: "year",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2023-02-14T23:20:35.837Z"),
  currentPeriodEnd: new Date("2023-03-30T12:04:29.651Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-01-23T06:32:44.052Z"),
  endedAt: new Date("2022-11-21T07:08:33.168Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  metadata: {
    "key": "<value>",
  },
  customer: {
    createdAt: new Date("2023-01-26T01:18:29.965Z"),
    modifiedAt: new Date("2024-06-07T02:11:09.431Z"),
    id: "<value>",
    metadata: {
      "key": 75277,
    },
    email: "Gabriel_Pfeffer76@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Mali",
    },
    taxId: [
      "pe_ruc",
    ],
    organizationId: "<value>",
    avatarUrl: "https://flawless-seagull.name",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Opal.Bashirian75@yahoo.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2023-07-20T16:07:04.167Z"),
    modifiedAt: new Date("2022-08-29T23:13:04.327Z"),
    id: "<value>",
    name: "<value>",
    description: "onto vamoose genuine aboard barring",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2022-07-31T18:53:14.774Z"),
        modifiedAt: new Date("2024-01-22T06:31:40.102Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 49499,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-12-13T22:17:51.524Z"),
        modifiedAt: new Date("2022-11-24T10:19:41.436Z"),
        id: "<value>",
        description: "hammock rusty thigh upright whine",
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
        path: "/var",
        mimeType: "<value>",
        size: 458723,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-06-14T22:17:26.327Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-04-22T21:00:43.699Z"),
        sizeReadable: "<value>",
        publicUrl: "https://gleaming-costume.net",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-01-18T19:30:48.072Z"),
          modifiedAt: new Date("2023-12-06T12:17:59.943Z"),
          id: "<value>",
          metadata: {
            "key": 898088,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 321473,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2023-07-19T04:26:02.056Z"),
    modifiedAt: new Date("2022-06-03T22:07:16.212Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 712893,
    maximumAmount: 830477,
    presetAmount: 57909,
    recurringInterval: "month",
  },
  discount: {
    duration: "repeating",
    type: "percentage",
    amount: 964201,
    currency: "Moldovan Leu",
    createdAt: new Date("2024-05-29T01:36:37.629Z"),
    modifiedAt: new Date("2023-02-15T08:35:07.555Z"),
    id: "<value>",
    metadata: {
      "key": 378268,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-12-23T00:24:20.036Z"),
    endsAt: new Date("2023-01-29T23:03:20.464Z"),
    maxRedemptions: 900368,
    redemptionsCount: 983275,
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