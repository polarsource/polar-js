# SubscriptionInput

## Example Usage

```typescript
import { SubscriptionInput } from "@polar-sh/sdk/models/components";

let value: SubscriptionInput = {
    createdAt: new Date("2024-10-24T01:55:36.487Z"),
    modifiedAt: new Date("2022-09-20T07:31:13.949Z"),
    id: "<value>",
    status: "unpaid",
    currentPeriodStart: new Date("2023-11-23T10:25:56.996Z"),
    currentPeriodEnd: new Date("2022-11-06T23:44:25.988Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-01-31T08:17:14.176Z"),
    endedAt: new Date("2023-01-08T05:39:18.359Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
        email: "Layla_Kreiger14@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
    },
    product: {
        createdAt: new Date("2022-10-05T23:22:14.259Z"),
        modifiedAt: new Date("2022-10-09T13:56:07.921Z"),
        id: "<value>",
        name: "<value>",
        description: "Diverse system-worthy model",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "individual",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2024-09-12T06:16:21.396Z"),
                modifiedAt: new Date("2023-01-29T14:02:48.210Z"),
                id: "<value>",
                priceAmount: 185518,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "year",
            },
        ],
        benefits: [
            {
                createdAt: new Date("2023-10-06T18:19:12.733Z"),
                modifiedAt: new Date("2022-12-24T14:11:46.817Z"),
                id: "<value>",
                description: "Self-enabling dynamic concept",
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
                path: "/opt/share",
                mimeType: "<value>",
                size: 796397,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-04-20T15:40:09.449Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2022-10-19T23:35:36.777Z"),
            },
        ],
    },
    price: {
        createdAt: new Date("2022-11-23T21:32:50.393Z"),
        modifiedAt: new Date("2024-09-29T19:23:27.577Z"),
        id: "<value>",
        priceAmount: 978173,
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