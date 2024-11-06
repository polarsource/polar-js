# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2022-01-03T21:02:39.550Z"),
  modifiedAt: new Date("2023-06-15T22:08:56.852Z"),
  id: "<value>",
  amount: 756343,
  currency: "Cape Verde Escudo",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2022-10-13T09:29:12.610Z"),
  currentPeriodEnd: new Date("2024-08-21T02:40:22.469Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-10-10T23:18:29.379Z"),
  endedAt: new Date("2024-04-01T06:33:23.449Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  checkoutId: "<value>",
  metadata: {
    "key": "<value>",
  },
  user: {
    email: "Logan.Gleichner@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://violent-design.net/",
  },
  product: {
    createdAt: new Date("2022-01-28T01:28:09.985Z"),
    modifiedAt: new Date("2022-07-21T02:15:38.786Z"),
    id: "<value>",
    name: "<value>",
    description:
      "up heating avaricious vainly considering gadzooks viability individual specific",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-12-05T19:52:32.444Z"),
        modifiedAt: new Date("2024-08-07T07:44:13.681Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-07-22T20:45:22.257Z"),
        modifiedAt: new Date("2024-08-31T14:34:42.904Z"),
        id: "<value>",
        description: "out experienced sunbathe whose synthesise",
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
        path: "/srv",
        mimeType: "<value>",
        size: 163928,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-11-08T08:55:48.564Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-08-07T14:30:02.776Z"),
        sizeReadable: "<value>",
        publicUrl: "https://inborn-pupil.org/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-06-03T18:10:10.891Z"),
          modifiedAt: new Date("2024-08-13T11:33:11.689Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 590167,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2023-05-24T22:42:36.749Z"),
    modifiedAt: new Date("2024-05-20T21:27:59.894Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 844775,
    maximumAmount: 657897,
    presetAmount: 58461,
    recurringInterval: "year",
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
| `checkoutId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *string*>                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customFieldData`                                                                                    | [components.SubscriptionCustomFieldData](../../models/components/subscriptioncustomfielddata.md)     | :heavy_minus_sign:                                                                                   | Key-value object storing custom field values.                                                        |
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.Product](../../models/components/product.md)                                             | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceRecurring*                                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |