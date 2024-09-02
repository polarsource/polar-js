# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
    createdAt: new Date("2024-08-22T19:20:53.478Z"),
    modifiedAt: new Date("2022-10-06T07:40:51.744Z"),
    id: "<value>",
    amount: 313692,
    taxAmount: 213312,
    currency: "Platinum",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    product: {
        createdAt: new Date("2023-07-22T22:45:05.441Z"),
        modifiedAt: new Date("2023-06-02T00:57:12.422Z"),
        id: "<value>",
        name: "<value>",
        description: "Ameliorated next generation concept",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "free",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2024-03-11T13:33:04.020Z"),
                modifiedAt: new Date("2023-02-15T02:10:01.616Z"),
                id: "<value>",
                priceAmount: 646265,
                priceCurrency: "<value>",
                isArchived: false,
            },
        ],
        benefits: [
            {
                createdAt: new Date("2022-08-24T12:13:22.418Z"),
                modifiedAt: new Date("2022-11-01T06:44:43.964Z"),
                id: "<value>",
                type: "articles",
                description: "Persevering scalable standardization",
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
                path: "/usr/lib",
                mimeType: "<value>",
                size: 117531,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-01-10T15:11:04.436Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-07-22T01:08:24.502Z"),
                sizeReadable: "<value>",
                publicUrl: "<value>",
            },
        ],
    },
    productPrice: {
        createdAt: new Date("2022-05-25T17:55:10.407Z"),
        modifiedAt: new Date("2022-07-11T16:48:10.710Z"),
        id: "<value>",
        priceAmount: 716860,
        priceCurrency: "<value>",
        isArchived: false,
    },
    subscription: {
        createdAt: new Date("2024-02-12T02:29:27.530Z"),
        modifiedAt: new Date("2023-03-11T01:57:16.014Z"),
        id: "<value>",
        status: "active",
        currentPeriodStart: new Date("2023-09-12T16:50:31.479Z"),
        currentPeriodEnd: new Date("2024-07-10T02:37:55.899Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-07-20T20:59:34.441Z"),
        endedAt: new Date("2022-08-13T12:47:20.372Z"),
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