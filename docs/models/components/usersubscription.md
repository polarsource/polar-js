# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
    createdAt: new Date("2022-06-12T08:41:49.855Z"),
    modifiedAt: new Date("2024-05-05T08:20:33.285Z"),
    id: "<value>",
    status: "unpaid",
    currentPeriodStart: new Date("2024-12-15T14:17:20.778Z"),
    currentPeriodEnd: new Date("2023-06-09T07:03:09.156Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-04-05T21:53:41.566Z"),
    endedAt: new Date("2023-06-30T03:22:57.117Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    product: {
        createdAt: new Date("2022-01-05T10:28:52.927Z"),
        modifiedAt: new Date("2023-12-02T20:41:06.265Z"),
        id: "<value>",
        name: "<value>",
        description: "Expanded explicit groupware",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "free",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2024-06-20T00:59:05.639Z"),
                modifiedAt: new Date("2022-11-23T10:25:52.610Z"),
                id: "<value>",
                priceAmount: 189848,
                priceCurrency: "<value>",
                isArchived: false,
            },
        ],
        benefits: [
            {
                createdAt: new Date("2023-07-15T09:44:04.242Z"),
                modifiedAt: new Date("2022-05-13T05:45:41.889Z"),
                id: "<value>",
                type: "articles",
                description: "Visionary asynchronous groupware",
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
                path: "/usr/sbin",
                mimeType: "<value>",
                size: 569211,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-12-02T07:40:27.372Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-01-12T14:11:56.610Z"),
                sizeReadable: "<value>",
                publicUrl: "<value>",
            },
        ],
    },
    price: {
        createdAt: new Date("2024-05-14T14:30:34.010Z"),
        modifiedAt: new Date("2024-09-20T14:02:08.952Z"),
        id: "<value>",
        priceAmount: 411372,
        priceCurrency: "<value>",
        isArchived: false,
        recurringInterval: "year",
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodStart`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodEnd`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelAtPeriodEnd`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *components.ProductPriceOutput*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |