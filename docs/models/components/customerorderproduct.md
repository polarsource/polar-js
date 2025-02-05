# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components/customerorderproduct.js";

let value: CustomerOrderProduct = {
  createdAt: new Date("2025-02-10T01:04:09.916Z"),
  modifiedAt: new Date("2024-04-07T10:03:51.865Z"),
  id: "<value>",
  name: "<value>",
  description: "repeatedly lest modulo since",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-12-23T23:52:06.888Z"),
      modifiedAt: new Date("2023-12-29T13:25:29.981Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 454779,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-04-08T12:59:09.276Z"),
      modifiedAt: new Date("2025-10-29T06:23:43.138Z"),
      id: "<value>",
      type: "downloadables",
      description:
        "alongside idealistic colorfully below accompany coaxingly and minus why",
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
      path: "/sbin",
      mimeType: "<value>",
      size: 805841,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-04-22T19:20:53.019Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-03-16T20:09:33.162Z"),
      sizeReadable: "<value>",
      publicUrl: "https://closed-wriggler.org/",
    },
  ],
  organization: {
    createdAt: new Date("2024-01-14T21:46:23.229Z"),
    modifiedAt: new Date("2025-07-01T17:27:09.272Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://vague-suspension.biz",
    bio: "<value>",
    company: "Bednar, Schoen and Mayer",
    blog: "<value>",
    location: "<value>",
    email: "Katheryn.Bashirian81@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 807215,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 703504,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
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