# SubscriptionInput

## Example Usage

```typescript
import { SubscriptionInput } from "@polar-sh/sdk/models/components";

let value: SubscriptionInput = {
    createdAt: new Date("2022-07-13T23:57:35.752Z"),
    modifiedAt: new Date("2024-07-14T23:01:43.155Z"),
    id: "<value>",
    status: "active",
    currentPeriodStart: new Date("2023-07-14T02:24:25.197Z"),
    currentPeriodEnd: new Date("2022-06-03T18:52:21.655Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-05-20T22:43:19.573Z"),
    endedAt: new Date("2023-01-29T11:00:42.421Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
        email: "Tressa_Fisher28@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
    },
    product: {
        createdAt: new Date("2024-01-31T08:17:14.176Z"),
        modifiedAt: new Date("2023-01-08T05:39:18.359Z"),
        id: "<value>",
        name: "<value>",
        description: "Configurable methodical info-mediaries",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "business",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2022-06-11T23:45:58.690Z"),
                modifiedAt: new Date("2022-10-05T23:22:14.259Z"),
                id: "<value>",
                priceAmount: 256916,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "month",
            },
        ],
        benefits: [
            {
                createdAt: new Date("2023-12-01T02:09:27.780Z"),
                modifiedAt: new Date("2023-06-24T02:43:59.783Z"),
                id: "<value>",
                description: "Right-sized tertiary frame",
                selectable: false,
                deletable: false,
                organizationId: "<value>",
                properties: {
                    paidArticles: false,
                },
            },
        ],
        medias: [
            {
                id: "<value>",
                organizationId: "<value>",
                name: "<value>",
                path: "/home",
                mimeType: "<value>",
                size: 708898,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-08-07T19:18:51.919Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-10-06T18:19:12.733Z"),
            },
        ],
    },
    price: {
        createdAt: new Date("2024-06-06T07:32:39.338Z"),
        modifiedAt: new Date("2022-12-13T22:20:08.235Z"),
        id: "<value>",
        priceAmount: 204072,
        priceCurrency: "<value>",
        isArchived: false,
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `status`                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodStart`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodEnd`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelAtPeriodEnd`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.ProductInput](../../models/components/productinput.md)                            | :heavy_check_mark:                                                                            | A product.                                                                                    |
| `price`                                                                                       | *components.ProductPriceInput*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |