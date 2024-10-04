# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2022-04-09T06:29:36.990Z"),
  modifiedAt: new Date("2024-11-07T09:51:45.663Z"),
  id: "<value>",
  amount: 994496,
  taxAmount: 374495,
  currency: "North Korean Won",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2022-06-09T06:51:23.859Z"),
    modifiedAt: new Date("2024-02-18T08:35:44.064Z"),
    id: "<value>",
    name: "<value>",
    description: "outset hollow guzzle what knottily apostrophize",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-06-13T17:09:10.644Z"),
        modifiedAt: new Date("2022-07-24T21:59:04.978Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 674548,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-10-16T14:29:18.954Z"),
        modifiedAt: new Date("2023-10-15T03:31:38.977Z"),
        id: "<value>",
        type: "license_keys",
        description: "yet unsung contradict dampen vice",
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
        path: "/opt/include",
        mimeType: "<value>",
        size: 607407,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-08-25T12:45:17.173Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-08-02T04:16:12.146Z"),
        sizeReadable: "<value>",
        publicUrl: "https://exotic-thunderbolt.com",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-07-04T15:55:26.085Z"),
    modifiedAt: new Date("2023-05-26T04:08:34.395Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 65582,
    maximumAmount: 226545,
    presetAmount: 994375,
  },
  subscription: {
    createdAt: new Date("2023-01-02T06:12:27.588Z"),
    modifiedAt: new Date("2022-06-25T16:40:06.343Z"),
    id: "<value>",
    amount: 805831,
    currency: "Argentine Peso",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2022-02-21T22:50:06.852Z"),
    currentPeriodEnd: new Date("2024-12-27T07:13:35.174Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-01-28T11:27:15.190Z"),
    endedAt: new Date("2023-07-24T11:12:06.265Z"),
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
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.UserOrderSubscription](../../models/components/userordersubscription.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |