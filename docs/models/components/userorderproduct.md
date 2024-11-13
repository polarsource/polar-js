# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2023-08-31T01:40:43.170Z"),
  modifiedAt: new Date("2024-04-30T16:47:28.347Z"),
  id: "<value>",
  name: "<value>",
  description:
    "carelessly memorise considering verbally furthermore yet minority persecute hoick",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-03-02T07:06:59.765Z"),
      modifiedAt: new Date("2022-12-23T18:40:43.978Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 390583,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-10-01T11:56:46.049Z"),
      modifiedAt: new Date("2022-09-07T07:22:34.884Z"),
      id: "<value>",
      type: "ads",
      description: "defiantly rightfully behind tuxedo",
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
      path: "/opt/include",
      mimeType: "<value>",
      size: 904131,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-01-03T06:05:43.351Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-12-22T18:16:42.157Z"),
      sizeReadable: "<value>",
      publicUrl: "https://well-groomed-deed.org",
    },
  ],
  organization: {
    createdAt: new Date("2023-01-11T08:00:43.248Z"),
    modifiedAt: new Date("2024-12-09T06:01:03.753Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://unsung-millet.biz",
    bio: "<value>",
    company: "Legros - Osinski",
    blog: "<value>",
    location: "<value>",
    email: "Cecile.Kertzmann55@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 535055,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 200109,
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
| `benefits`                                                                                    | *components.Benefits*[]                                                                       | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |