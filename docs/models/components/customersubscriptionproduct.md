# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2025-07-14T10:56:14.102Z"),
  modifiedAt: new Date("2024-03-28T06:43:43.157Z"),
  id: "<value>",
  name: "<value>",
  description:
    "gastropod community seemingly eternity jet accidentally fatherly aw whoa see",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-01-01T15:52:46.782Z"),
      modifiedAt: new Date("2023-12-15T08:19:24.644Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 728858,
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-06-29T12:53:20.591Z"),
      modifiedAt: new Date("2024-08-27T04:32:02.162Z"),
      id: "<value>",
      type: "discord",
      description: "likewise cute pure badly meanwhile disclosure mount",
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
      path: "/selinux",
      mimeType: "<value>",
      size: 779581,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-02-01T06:48:50.620Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-09-27T09:38:02.312Z"),
      sizeReadable: "<value>",
      publicUrl: "https://unsteady-sock.com/",
    },
  ],
  organization: {
    createdAt: new Date("2023-01-26T16:13:32.465Z"),
    modifiedAt: new Date("2024-06-19T18:06:49.644Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://valuable-corporation.net",
    bio: "<value>",
    company: "O'Hara Inc",
    blog: "<value>",
    location: "<value>",
    email: "Melisa_Bartell42@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 812427,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 848605,
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