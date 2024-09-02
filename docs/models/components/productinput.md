# ProductInput

A product.

## Example Usage

```typescript
import { ProductInput } from "@polar-sh/sdk/models/components";

let value: ProductInput = {
    createdAt: new Date("2023-09-26T04:04:07.045Z"),
    modifiedAt: new Date("2023-02-17T02:09:11.357Z"),
    id: "<value>",
    name: "<value>",
    description: "Robust content-based project",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [
        {
            createdAt: new Date("2024-01-04T11:36:32.816Z"),
            modifiedAt: new Date("2024-04-24T21:02:13.053Z"),
            id: "<value>",
            priceAmount: 963741,
            priceCurrency: "<value>",
            isArchived: false,
        },
    ],
    benefits: [
        {
            createdAt: new Date("2024-08-20T22:42:15.265Z"),
            modifiedAt: new Date("2022-06-05T02:11:11.335Z"),
            id: "<value>",
            description: "Vision-oriented systemic frame",
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
            size: 45234,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-06-18T02:32:25.845Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-12-23T12:36:25.838Z"),
        },
    ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the product.                                                                                                  |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The name of the product.                                                                                                |
| `description`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The description of the product.                                                                                         |
| `isRecurring`                                                                                                           | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the product is a subscription tier.                                                                             |
| `isArchived`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the product is archived and no longer available.                                                                |
| `organizationId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the organization owning the product.                                                                          |
| ~~`type`~~                                                                                                              | [components.SubscriptionTierType](../../models/components/subscriptiontiertype.md)                                      | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| ~~`isHighlighted`~~                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `prices`                                                                                                                | *components.ProductPriceInput*[]                                                                                        | :heavy_check_mark:                                                                                                      | List of available prices for this product.                                                                              |
| `benefits`                                                                                                              | *components.ProductInputBenefits*[]                                                                                     | :heavy_check_mark:                                                                                                      | The benefits granted by the product.                                                                                    |
| `medias`                                                                                                                | [components.ProductMediaFileReadInput](../../models/components/productmediafilereadinput.md)[]                          | :heavy_check_mark:                                                                                                      | The medias associated to the product.                                                                                   |