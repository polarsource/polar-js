# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2022-12-10T19:21:53.360Z"),
  modifiedAt: new Date("2022-08-22T18:57:29.475Z"),
  id: "<value>",
  amount: 957451,
  taxAmount: 518201,
  currency: "Sri Lanka Rupee",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2022-01-29T03:01:55.252Z"),
    modifiedAt: new Date("2024-02-19T21:30:03.033Z"),
    id: "<value>",
    name: "<value>",
    description: "Diverse bottom-line hardware",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [
      {
        createdAt: new Date("2023-12-10T07:20:22.916Z"),
        modifiedAt: new Date("2023-05-24T01:53:16.513Z"),
        id: "<value>",
        priceAmount: 214880,
        priceCurrency: "<value>",
        isArchived: false,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-07-24T08:35:49.136Z"),
        modifiedAt: new Date("2023-10-06T02:46:31.511Z"),
        id: "<value>",
        type: "downloadables",
        description: "Synergistic optimizing attitude",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr",
        mimeType: "<value>",
        size: 517379,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-10-31T11:24:47.724Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-05-25T17:55:10.407Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-02-25T16:16:37.273Z"),
    modifiedAt: new Date("2024-02-12T02:29:27.530Z"),
    id: "<value>",
    priceAmount: 396060,
    priceCurrency: "<value>",
    isArchived: false,
  },
  subscription: {
    createdAt: new Date("2023-05-23T14:42:09.965Z"),
    modifiedAt: new Date("2023-09-12T16:50:31.479Z"),
    id: "<value>",
    status: "canceled",
    currentPeriodStart: new Date("2022-07-20T20:59:34.441Z"),
    currentPeriodEnd: new Date("2022-08-13T12:47:20.372Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-06-08T18:04:31.965Z"),
    endedAt: new Date("2022-06-30T19:04:41.355Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.UserOrderProduct](../../models/components/userorderproduct.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPriceOutput*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.UserOrderSubscription](../../models/components/userordersubscription.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |