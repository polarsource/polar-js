# CheckoutProductInput

Product data for a checkout session.

## Example Usage

```typescript
import { CheckoutProductInput } from "@polar-sh/sdk/models/components";

let value: CheckoutProductInput = {
  createdAt: new Date("2024-01-13T22:28:31.850Z"),
  modifiedAt: new Date("2022-11-08T19:50:53.693Z"),
  id: "<value>",
  name: "<value>",
  description: "why hmph whoever recent aha crossly unfortunate toward",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-03-27T18:09:35.560Z"),
      modifiedAt: new Date("2023-02-06T10:05:18.965Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-02-10T05:06:21.763Z"),
      modifiedAt: new Date("2024-10-07T00:51:30.483Z"),
      id: "<value>",
      description: "when seal cannon",
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
      path: "/usr/ports",
      mimeType: "<value>",
      size: 678419,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-02-20T05:44:31.280Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-06-19T05:19:44.942Z"),
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Creation timestamp of the object.                                                              |
| `modifiedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Last modification timestamp of the object.                                                     |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the product.                                                                         |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | The name of the product.                                                                       |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The description of the product.                                                                |
| `isRecurring`                                                                                  | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether the product is a subscription tier.                                                    |
| `isArchived`                                                                                   | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether the product is archived and no longer available.                                       |
| `organizationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the organization owning the product.                                                 |
| `prices`                                                                                       | *components.ProductPrice*[]                                                                    | :heavy_check_mark:                                                                             | List of prices for this product.                                                               |
| `benefits`                                                                                     | *components.CheckoutProductBenefits*[]                                                         | :heavy_check_mark:                                                                             | List of benefits granted by the product.                                                       |
| `medias`                                                                                       | [components.ProductMediaFileReadInput](../../models/components/productmediafilereadinput.md)[] | :heavy_check_mark:                                                                             | List of medias associated to the product.                                                      |