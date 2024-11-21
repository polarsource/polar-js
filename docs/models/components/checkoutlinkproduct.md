# CheckoutLinkProduct

Product data for a checkout link.

## Example Usage

```typescript
import { CheckoutLinkProduct } from "@polar-sh/sdk/models/components";

let value: CheckoutLinkProduct = {
  createdAt: new Date("2024-05-09T00:02:08.000Z"),
  modifiedAt: new Date("2022-07-31T11:53:51.195Z"),
  id: "<value>",
  name: "<value>",
  description: "airbrush sorrowful ah atop obnoxiously",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-08-29T03:33:02.823Z"),
      modifiedAt: new Date("2023-09-14T00:27:16.676Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 10389,
      maximumAmount: 904289,
      presetAmount: 210787,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-11-26T05:58:39.491Z"),
      modifiedAt: new Date("2023-09-06T22:49:00.223Z"),
      id: "<value>",
      type: "custom",
      description:
        "pro hence happy outside into unless video upwardly till ouch",
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
      path: "/private/tmp",
      mimeType: "<value>",
      size: 610379,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-08-05T18:16:23.124Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-04-12T17:44:59.979Z"),
      sizeReadable: "<value>",
      publicUrl: "https://steel-tuber.org",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the product.                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the product.                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the product.                                                               |
| `isRecurring`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the product is a subscription tier.                                                   |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the product is archived and no longer available.                                      |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the product.                                                |
| `prices`                                                                                      | *components.ProductPrice*[]                                                                   | :heavy_check_mark:                                                                            | List of prices for this product.                                                              |
| `benefits`                                                                                    | *components.CheckoutLinkProductBenefits*[]                                                    | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |