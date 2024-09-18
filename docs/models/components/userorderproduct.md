# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2023-06-19T21:49:57.037Z"),
  modifiedAt: new Date("2022-05-17T19:36:31.801Z"),
  id: "<value>",
  name: "<value>",
  description: "Grass-roots non-volatile task-force",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  type: "free",
  isHighlighted: false,
  prices: [],
  benefits: [
    {
      createdAt: new Date("2024-03-29T16:56:11.138Z"),
      modifiedAt: new Date("2024-03-31T12:50:52.726Z"),
      id: "<value>",
      description: "Compatible transitional conglomeration",
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
      path: "/etc",
      mimeType: "<value>",
      size: 749255,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-08-29T04:52:14.769Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-03-12T22:28:21.435Z"),
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
| `benefits`                                                                                                              | *components.Benefits*[]                                                                                                 | :heavy_check_mark:                                                                                                      | The benefits granted by the product.                                                                                    |
| `medias`                                                                                                                | [components.ProductMediaFileReadOutput](../../models/components/productmediafilereadoutput.md)[]                        | :heavy_check_mark:                                                                                                      | The medias associated to the product.                                                                                   |