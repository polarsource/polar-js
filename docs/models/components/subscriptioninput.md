# SubscriptionInput

## Example Usage

```typescript
import { SubscriptionInput } from "@polar-sh/sdk/models/components";

let value: SubscriptionInput = {
  createdAt: new Date("2023-12-14T18:14:41.004Z"),
  modifiedAt: new Date("2024-08-13T17:10:17.807Z"),
  id: "<value>",
  amount: 815315,
  currency: "Surinam Dollar",
  recurringInterval: "year",
  status: "incomplete",
  currentPeriodStart: new Date("2024-01-24T18:32:15.375Z"),
  currentPeriodEnd: new Date("2022-11-28T08:15:52.623Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-05-08T14:24:55.853Z"),
  endedAt: new Date("2023-02-06T21:19:44.981Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  checkoutId: "<value>",
  metadata: {
    "key": "<value>",
  },
  user: {
    email: "Leland26@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://joyous-giant.net/",
  },
  product: {
    createdAt: new Date("2023-04-27T14:18:23.756Z"),
    modifiedAt: new Date("2022-09-30T19:12:28.413Z"),
    id: "<value>",
    name: "<value>",
    description: "tenement amidst decent",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-07-20T04:32:07.356Z"),
        modifiedAt: new Date("2024-12-27T12:13:46.111Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 778597,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-06-01T17:57:52.601Z"),
        modifiedAt: new Date("2023-02-20T00:47:22.305Z"),
        id: "<value>",
        description: "thorn underneath drat typify brood",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          archived: {
            "key": false,
          },
          files: [
            "<value>",
          ],
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/etc/defaults",
        mimeType: "<value>",
        size: 364915,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-02-02T20:11:50.129Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-06-25T06:53:42.834Z"),
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-11-17T06:19:22.427Z"),
          modifiedAt: new Date("2022-06-24T21:14:12.329Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 112104,
        required: false,
      },
    ],
  },
  price: {
    createdAt: new Date("2024-08-01T16:53:54.476Z"),
    modifiedAt: new Date("2023-11-19T23:10:11.193Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 681544,
    maximumAmount: 393166,
    presetAmount: 266880,
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
| `product`                                                                                            | [components.ProductInput](../../models/components/productinput.md)                                   | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceRecurring*                                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |