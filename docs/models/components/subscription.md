# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2023-11-05T18:54:25.507Z"),
  modifiedAt: new Date("2022-02-10T16:39:25.562Z"),
  id: "<value>",
  amount: 14251,
  currency: "Hong Kong Dollar",
  recurringInterval: "year",
  status: "unpaid",
  currentPeriodStart: new Date("2024-11-19T01:12:45.930Z"),
  currentPeriodEnd: new Date("2022-03-13T08:57:18.391Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2022-02-18T20:23:54.612Z"),
  endedAt: new Date("2024-09-27T23:00:42.188Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  metadata: {
    "key": "<value>",
  },
  user: {
    email: "Willow.OReilly@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://firm-disk.name/",
  },
  product: {
    createdAt: new Date("2024-02-10T16:41:01.958Z"),
    modifiedAt: new Date("2024-11-06T09:51:30.567Z"),
    id: "<value>",
    name: "<value>",
    description: "ah speedily showy wealthy how onto vamoose genuine",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 201266,
    },
    prices: [
      {
        createdAt: new Date("2024-09-26T17:13:07.205Z"),
        modifiedAt: new Date("2022-05-10T17:03:48.644Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-08-12T17:43:22.964Z"),
        modifiedAt: new Date("2022-08-08T09:47:41.350Z"),
        id: "<value>",
        description:
          "culminate fondly hammock rusty thigh upright whine enormously",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 671528,
            timeframe: "day",
          },
          activations: {
            limit: 16252,
            enableUserAdmin: false,
          },
          limitUsage: 642804,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/opt/share",
        mimeType: "<value>",
        size: 898088,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-12-19T08:01:26.303Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-06-04T16:57:26.286Z"),
        sizeReadable: "<value>",
        publicUrl: "https://cooperative-promise.net",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-11-16T08:41:29.527Z"),
          modifiedAt: new Date("2022-02-11T16:43:38.291Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 667169,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2023-08-06T12:25:31.790Z"),
    modifiedAt: new Date("2024-05-29T01:36:37.629Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
  },
  discount: {
    duration: "forever",
    durationInMonths: 657862,
    type: "fixed",
    amount: 900368,
    currency: "Namibia Dollar",
    createdAt: new Date("2022-02-03T08:20:20.613Z"),
    modifiedAt: new Date("2022-08-01T05:04:01.310Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2022-02-16T10:20:38.020Z"),
    endsAt: new Date("2022-09-07T14:29:56.720Z"),
    maxRedemptions: 446793,
    redemptionsCount: 836991,
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