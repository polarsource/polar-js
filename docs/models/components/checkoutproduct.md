# CheckoutProduct

Product data for a checkout session.

## Example Usage

```typescript
import { CheckoutProduct } from "@polar-sh/sdk/models/components";

let value: CheckoutProduct = {
  createdAt: new Date("2024-05-16T02:48:20.581Z"),
  modifiedAt: new Date("2025-11-09T06:06:22.459Z"),
  id: "<value>",
  name: "<value>",
  description: "as by summer horde whoa once hence",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-04-09T19:14:12.306Z"),
      modifiedAt: new Date("2024-08-30T22:30:29.229Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 287051,
      maximumAmount: 706575,
      presetAmount: 414857,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-01-31T03:47:25.523Z"),
      modifiedAt: new Date("2025-06-27T04:59:29.330Z"),
      id: "<value>",
      type: "license_keys",
      description: "frequent and everlasting",
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
      path: "/etc/ppp",
      mimeType: "<value>",
      size: 449292,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-11-30T16:44:13.155Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-07-08T18:01:50.419Z"),
      sizeReadable: "<value>",
      publicUrl: "https://meager-typeface.name/",
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
| `benefits`                                                                                    | [components.BenefitBase](../../models/components/benefitbase.md)[]                            | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |