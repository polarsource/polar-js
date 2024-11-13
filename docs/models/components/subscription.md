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
    email: "Darion_Deckow44@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://evil-sauerkraut.com",
  },
  product: {
    createdAt: new Date("2022-07-21T02:15:38.786Z"),
    modifiedAt: new Date("2024-06-16T11:27:10.944Z"),
    id: "<value>",
    name: "<value>",
    description: "jaywalk kissingly worriedly hunt retool space informal",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2024-12-01T04:15:48.042Z"),
        modifiedAt: new Date("2022-11-10T06:10:54.367Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-11-11T12:00:22.100Z"),
        modifiedAt: new Date("2022-09-28T20:54:23.206Z"),
        id: "<value>",
        description:
          "towards saturate though when plus save dapper untimely spark once",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryId: "<value>",
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "triage",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/opt/sbin",
        mimeType: "<value>",
        size: 787299,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-10-25T07:23:29.621Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-06-10T07:44:52.955Z"),
        sizeReadable: "<value>",
        publicUrl: "https://corny-translation.info/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-11-01T01:05:57.542Z"),
          modifiedAt: new Date("2023-05-15T18:48:33.124Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 347962,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2023-11-19T23:14:44.002Z"),
    modifiedAt: new Date("2024-08-30T01:05:50.247Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 492506,
    maximumAmount: 104737,
    presetAmount: 113553,
    recurringInterval: "month",
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
| `metadata`                                                                                           | Record<string, *components.Metadata*>                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customFieldData`                                                                                    | [components.SubscriptionCustomFieldData](../../models/components/subscriptioncustomfielddata.md)     | :heavy_minus_sign:                                                                                   | Key-value object storing custom field values.                                                        |
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.Product](../../models/components/product.md)                                             | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceRecurring*                                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |