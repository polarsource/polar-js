# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components";

let value: CustomerOrderProduct = {
  createdAt: new Date("2024-11-12T13:13:35.041Z"),
  modifiedAt: new Date("2023-07-15T16:45:43.480Z"),
  id: "<value>",
  name: "<value>",
  description: "impressive spook submitter cinder outside towards",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-01-13T15:47:28.412Z"),
      modifiedAt: new Date("2024-05-13T07:35:58.550Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-07-02T18:24:18.411Z"),
      modifiedAt: new Date("2022-09-03T13:09:52.861Z"),
      id: "<value>",
      type: "discord",
      description: "idolized closely uh-huh now whoa mid failing beside",
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
      path: "/usr/src",
      mimeType: "<value>",
      size: 27532,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-11-03T19:09:54.192Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-06-08T16:42:11.724Z"),
      sizeReadable: "<value>",
      publicUrl: "https://wealthy-event.net",
    },
  ],
  organization: {
    createdAt: new Date("2024-12-15T16:52:02.932Z"),
    modifiedAt: new Date("2023-08-01T14:21:58.397Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://apprehensive-ribbon.com/",
    bio: "<value>",
    company: "Hagenes Inc",
    blog: "<value>",
    location: "<value>",
    email: "Herminio.Schneider@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 605647,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 674063,
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