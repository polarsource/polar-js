# ProductOutput

A product.

## Example Usage

```typescript
import { ProductOutput } from "@polar-sh/sdk/models/components";

let value: ProductOutput = {
  createdAt: new Date("2024-02-06T17:37:20.699Z"),
  modifiedAt: new Date("2022-06-13T02:48:20.931Z"),
  id: "<value>",
  name: "<value>",
  description: "Versatile bi-directional workforce",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  type: "business",
  isHighlighted: false,
  prices: [],
  benefits: [
    {
      createdAt: new Date("2024-02-17T03:25:58.918Z"),
      modifiedAt: new Date("2022-03-19T16:09:31.264Z"),
      id: "<value>",
      type: "github_repository",
      description: "Focused multi-tasking capability",
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
      path: "/opt/share",
      mimeType: "<value>",
      size: 417486,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-02-02T21:36:49.821Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-05-24T21:26:04.360Z"),
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