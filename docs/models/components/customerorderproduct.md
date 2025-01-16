# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components";

let value: CustomerOrderProduct = {
  createdAt: new Date("2023-01-28T12:07:26.307Z"),
  modifiedAt: new Date("2025-02-01T00:48:58.397Z"),
  id: "<value>",
  name: "<value>",
  description:
    "tightly behest beside stage sermon though anti ouch microchip gadzooks",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-04-26T14:02:50.441Z"),
      modifiedAt: new Date("2023-05-07T06:25:47.840Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-11-26T05:48:10.660Z"),
      modifiedAt: new Date("2025-06-27T20:05:24.919Z"),
      id: "<value>",
      type: "license_keys",
      description: "ew happily bashfully gosh husband",
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
      path: "/rescue",
      mimeType: "<value>",
      size: 455517,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-01-01T05:26:36.862Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-08-02T23:12:56.433Z"),
      sizeReadable: "<value>",
      publicUrl: "https://unconscious-slipper.org/",
    },
  ],
  organization: {
    createdAt: new Date("2023-12-11T02:29:40.537Z"),
    modifiedAt: new Date("2023-07-16T23:00:46.513Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://roasted-cleaner.biz/",
    bio: "<value>",
    company: "Gottlieb - Emard",
    blog: "<value>",
    location: "<value>",
    email: "Johnny_Nitzsche@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 385941,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 789265,
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