# CheckoutProduct

Product data for a checkout session.

## Example Usage

```typescript
import { CheckoutProduct } from "@polar-sh/sdk/models/components";

let value: CheckoutProduct = {
  createdAt: new Date("2024-12-16T18:47:24.230Z"),
  modifiedAt: new Date("2024-01-01T11:35:03.806Z"),
  id: "<value>",
  name: "<value>",
  description: "helpful submitter woot",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-06-19T17:26:23.980Z"),
      modifiedAt: new Date("2023-12-06T02:22:06.346Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 569604,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-01-20T16:48:57.666Z"),
      modifiedAt: new Date("2024-06-23T05:40:17.320Z"),
      id: "<value>",
      description:
        "supportive patiently contrast spectacles positively that till uh-huh",
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
      path: "/usr/libdata",
      mimeType: "<value>",
      size: 95862,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-08-25T15:14:01.863Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-02-18T20:51:07.229Z"),
      sizeReadable: "<value>",
      publicUrl: "https://odd-fog.net/",
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
| `benefits`                                                                                    | *components.CheckoutProductBenefits*[]                                                        | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |