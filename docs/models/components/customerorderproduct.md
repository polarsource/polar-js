# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components";

let value: CustomerOrderProduct = {
  createdAt: new Date("2023-05-15T08:58:24.746Z"),
  modifiedAt: new Date("2024-09-22T02:19:05.190Z"),
  id: "<value>",
  name: "<value>",
  description: "trick home yet",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-12-18T01:08:14.559Z"),
      modifiedAt: new Date("2024-04-06T08:58:17.552Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-03-24T17:37:09.177Z"),
      modifiedAt: new Date("2023-02-02T01:48:16.382Z"),
      id: "<value>",
      type: "license_keys",
      description: "continually impossible until so elver very",
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
      path: "/home/user/dir",
      mimeType: "<value>",
      size: 422241,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-12-04T06:57:20.808Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-06-28T09:14:44.543Z"),
      sizeReadable: "<value>",
      publicUrl: "https://royal-tool.name/",
    },
  ],
  organization: {
    createdAt: new Date("2024-09-28T03:10:30.785Z"),
    modifiedAt: new Date("2025-07-04T11:41:05.814Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://descriptive-hexagon.net",
    bio: "<value>",
    company: "Sporer, Christiansen and Kessler",
    blog: "<value>",
    location: "<value>",
    email: "Moriah_Rath34@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 29009,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 391990,
    profileSettings: {},
    featureSettings: {},
  },
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
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |