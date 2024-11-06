# ProductInput

A product.

## Example Usage

```typescript
import { ProductInput } from "@polar-sh/sdk/models/components";

let value: ProductInput = {
  createdAt: new Date("2023-03-27T21:41:18.396Z"),
  modifiedAt: new Date("2023-07-17T16:35:31.351Z"),
  id: "<value>",
  name: "<value>",
  description: "chunter meh although",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-08-19T03:07:08.900Z"),
      modifiedAt: new Date("2022-12-10T22:08:06.542Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 701423,
      maximumAmount: 940098,
      presetAmount: 179367,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-02-24T19:52:51.740Z"),
      modifiedAt: new Date("2022-11-04T23:36:35.403Z"),
      id: "<value>",
      description:
        "tarragon given phew surprise whether swill futon eyeglasses minus",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 700207,
          timeframe: "year",
        },
        activations: {
          limit: 516070,
          enableUserAdmin: false,
        },
        limitUsage: 387649,
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
      size: 120507,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-03-19T10:26:27.496Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-01-04T20:41:50.241Z"),
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2022-02-28T09:04:13.801Z"),
        modifiedAt: new Date("2024-04-18T21:08:09.093Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 889398,
      required: false,
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
| `benefits`                                                                                     | *components.BenefitInput*[]                                                                    | :heavy_check_mark:                                                                             | List of benefits granted by the product.                                                       |
| `medias`                                                                                       | [components.ProductMediaFileReadInput](../../models/components/productmediafilereadinput.md)[] | :heavy_check_mark:                                                                             | List of medias associated to the product.                                                      |
| `attachedCustomFields`                                                                         | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]             | :heavy_check_mark:                                                                             | List of custom fields attached to the product.                                                 |