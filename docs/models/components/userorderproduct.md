# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2023-06-02T05:09:47.593Z"),
  modifiedAt: new Date("2023-02-26T15:33:00.987Z"),
  id: "<value>",
  name: "<value>",
  description: "rowdy whenever following",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-05-10T06:11:55.200Z"),
      modifiedAt: new Date("2022-01-19T09:36:37.534Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 939214,
      maximumAmount: 197700,
      presetAmount: 169589,
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-01-18T03:14:08.223Z"),
      modifiedAt: new Date("2023-11-02T06:10:06.959Z"),
      id: "<value>",
      type: "custom",
      description: "likewise excitedly ugh bakeware warmly boo",
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
      size: 764854,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-12-20T13:50:06.096Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-05-12T05:00:44.703Z"),
      sizeReadable: "<value>",
      publicUrl: "https://sleepy-mythology.org/",
    },
  ],
  organization: {
    createdAt: new Date("2022-04-22T22:51:59.592Z"),
    modifiedAt: new Date("2023-08-18T14:15:01.488Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://subdued-statue.info",
    bio: "<value>",
    company: "Adams LLC",
    blog: "<value>",
    location: "<value>",
    email: "Luther38@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 514095,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 814625,
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