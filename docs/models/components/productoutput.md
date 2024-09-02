# ProductOutput

A product.

## Example Usage

```typescript
import { ProductOutput } from "@polar-sh/sdk/models/components";

let value: ProductOutput = {
    createdAt: new Date("2022-10-25T17:33:16.041Z"),
    modifiedAt: new Date("2022-10-27T05:13:34.310Z"),
    id: "<value>",
    name: "<value>",
    description: "Multi-channelled well-modulated Graphic Interface",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "free",
    isHighlighted: false,
    prices: [
        {
            createdAt: new Date("2024-08-31T07:06:05.899Z"),
            modifiedAt: new Date("2023-07-09T10:18:33.748Z"),
            id: "<value>",
            priceAmount: 708609,
            priceCurrency: "<value>",
            isArchived: false,
        },
    ],
    benefits: [
        {
            createdAt: new Date("2022-11-01T10:33:31.317Z"),
            modifiedAt: new Date("2023-02-13T20:18:32.578Z"),
            id: "<value>",
            type: "license_keys",
            description: "Open-source 3rd generation pricing structure",
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
            path: "/System",
            mimeType: "<value>",
            size: 333507,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-12-28T04:17:28.909Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-10-09T21:04:19.713Z"),
            sizeReadable: "<value>",
            publicUrl: "<value>",
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
| `prices`                                                                                                                | *components.ProductPriceOutput*[]                                                                                       | :heavy_check_mark:                                                                                                      | List of available prices for this product.                                                                              |
| `benefits`                                                                                                              | *components.ProductOutputBenefits*[]                                                                                    | :heavy_check_mark:                                                                                                      | The benefits granted by the product.                                                                                    |
| `medias`                                                                                                                | [components.ProductMediaFileReadOutput](../../models/components/productmediafilereadoutput.md)[]                        | :heavy_check_mark:                                                                                                      | The medias associated to the product.                                                                                   |