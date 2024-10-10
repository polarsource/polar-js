# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2022-02-12T18:37:20.813Z"),
  modifiedAt: new Date("2022-04-14T03:03:06.965Z"),
  id: "<value>",
  name: "<value>",
  description: "gee supposing fooey snow pace illustrious whoa",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-09-17T17:07:40.230Z"),
      modifiedAt: new Date("2024-07-23T11:23:06.312Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 909354,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-11-25T09:09:38.900Z"),
      modifiedAt: new Date("2022-07-12T19:51:48.720Z"),
      id: "<value>",
      type: "downloadables",
      description:
        "except entire queasily reasoning embody until barring per fen through",
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
      size: 797304,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-11-20T20:44:10.098Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-07-21T15:47:00.097Z"),
      sizeReadable: "<value>",
      publicUrl: "https://cute-tomb.biz/",
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
| `prices`                                                                                      | *components.ProductPrice*[]                                                                   | :heavy_check_mark:                                                                            | List of available prices for this product.                                                    |
| `benefits`                                                                                    | *components.Benefits*[]                                                                       | :heavy_check_mark:                                                                            | The benefits granted by the product.                                                          |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | The medias associated to the product.                                                         |