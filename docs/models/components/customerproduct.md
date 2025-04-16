# CustomerProduct

Schema of a product for customer portal.

## Example Usage

```typescript
import { CustomerProduct } from "@polar-sh/sdk/models/components/customerproduct.js";

let value: CustomerProduct = {
  createdAt: new Date("2023-08-02T14:57:17.701Z"),
  modifiedAt: new Date("2023-01-27T08:34:14.408Z"),
  id: "<value>",
  name: "<value>",
  description: "geez nougat around decryption wherever council",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-12-18T13:12:35.966Z"),
      modifiedAt: new Date("2023-06-08T12:42:20.813Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 197283,
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-06-09T17:45:59.840Z"),
      modifiedAt: new Date("2023-05-12T03:22:19.560Z"),
      metadata: {
        "key": 4868.88,
      },
      type: "downloadables",
      description:
        "whenever yum fence scenario ha who grade loftily draft roadway",
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
      path: "/home",
      mimeType: "<value>",
      size: 410543,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-11-03T22:13:58.264Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-06-30T22:35:36.381Z"),
      sizeReadable: "<value>",
      publicUrl: "https://filthy-charlatan.name",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product.                                                                               |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the product.                                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the product.                                                                      |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | The recurring interval of the product. If `None`, the product is a one-time purchase.                |
| `isRecurring`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is a subscription.                                                               |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is archived and no longer available.                                             |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the product.                                                       |
| `prices`                                                                                             | *components.CustomerProductPrices*[]                                                                 | :heavy_check_mark:                                                                                   | List of available prices for this product.                                                           |
| `benefits`                                                                                           | [components.BenefitBase](../../models/components/benefitbase.md)[]                                   | :heavy_check_mark:                                                                                   | The benefits granted by the product.                                                                 |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | The medias associated to the product.                                                                |