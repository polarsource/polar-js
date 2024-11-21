# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
  createdAt: new Date("2023-03-14T10:14:52.824Z"),
  modifiedAt: new Date("2023-08-17T23:24:42.450Z"),
  id: "<value>",
  name: "<value>",
  description: "whale wherever even instead ew roger wash whereas drag",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-03-26T14:55:05.183Z"),
      modifiedAt: new Date("2024-03-25T08:28:26.995Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 906775,
      maximumAmount: 295651,
      presetAmount: 649901,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-11-06T12:20:27.709Z"),
      modifiedAt: new Date("2023-02-03T14:49:56.249Z"),
      id: "<value>",
      type: "custom",
      description: "relieve minus ashamed apricot adjudge fibre",
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
      path: "/bin",
      mimeType: "<value>",
      size: 636019,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-02-05T11:00:40.920Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-05-01T20:48:13.554Z"),
      sizeReadable: "<value>",
      publicUrl: "https://corrupt-riser.com/",
    },
  ],
  organization: {
    createdAt: new Date("2022-06-12T21:52:06.305Z"),
    modifiedAt: new Date("2023-05-05T22:17:51.096Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://similar-joy.org/",
    bio: "<value>",
    company: "Steuber - Cremin",
    blog: "<value>",
    location: "<value>",
    email: "Erica21@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 661787,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 283619,
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
| `benefits`                                                                                    | *components.UserSubscriptionProductBenefits*[]                                                | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |