# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components";

let value: CustomerOrderProduct = {
  createdAt: new Date("2023-07-09T21:40:19.769Z"),
  modifiedAt: new Date("2022-09-12T04:43:40.792Z"),
  id: "<value>",
  name: "<value>",
  description:
    "ugh conversation er vice outnumber daily but triumphantly team yum",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-03-25T14:39:48.268Z"),
      modifiedAt: new Date("2024-06-13T13:52:47.549Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-01-13T15:47:28.412Z"),
      modifiedAt: new Date("2024-05-13T07:35:58.550Z"),
      id: "<value>",
      type: "github_repository",
      description:
        "negligible yearly headline arrogantly priesthood absentmindedly knickers forenenst shudder",
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
      path: "/usr/sbin",
      mimeType: "<value>",
      size: 944836,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-11-29T02:24:30.639Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-05-05T03:19:00.639Z"),
      sizeReadable: "<value>",
      publicUrl: "https://moral-disadvantage.com",
    },
  ],
  organization: {
    createdAt: new Date("2024-04-12T13:54:50.989Z"),
    modifiedAt: new Date("2022-06-02T04:11:20.372Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://fuzzy-heartbeat.org/",
    bio: "<value>",
    company: "Veum and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Emilie97@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 611872,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 46238,
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