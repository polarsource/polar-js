# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
    createdAt: new Date("2022-09-12T12:41:12.694Z"),
    modifiedAt: new Date("2024-10-12T03:06:17.933Z"),
    id: "<value>",
    name: "<value>",
    description: "Customer-focused eco-centric analyzer",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [
        {
            createdAt: new Date("2022-01-16T06:53:55.196Z"),
            modifiedAt: new Date("2022-01-13T12:35:16.005Z"),
            id: "<value>",
            priceAmount: 533466,
            priceCurrency: "<value>",
            isArchived: false,
            recurringInterval: "year",
        },
    ],
    benefits: [
        {
            createdAt: new Date("2022-06-11T01:17:04.060Z"),
            modifiedAt: new Date("2024-08-25T14:44:57.831Z"),
            id: "<value>",
            type: "custom",
            description: "Exclusive asynchronous neural-net",
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
            size: 810424,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-09-26T22:08:20.985Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-04-19T15:13:20.090Z"),
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
| `benefits`                                                                                                              | *components.UserSubscriptionProductBenefits*[]                                                                          | :heavy_check_mark:                                                                                                      | The benefits granted by the product.                                                                                    |
| `medias`                                                                                                                | [components.ProductMediaFileReadOutput](../../models/components/productmediafilereadoutput.md)[]                        | :heavy_check_mark:                                                                                                      | The medias associated to the product.                                                                                   |