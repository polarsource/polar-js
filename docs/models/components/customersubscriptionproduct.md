# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components/customersubscriptionproduct.js";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2025-01-09T14:23:44.216Z"),
  modifiedAt: new Date("2025-12-04T03:13:51.971Z"),
  id: "<value>",
  name: "<value>",
  description: "among cannibalise below ack fond uh-huh till lazy cemetery",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-10-12T18:11:53.175Z"),
      modifiedAt: new Date("2023-01-29T06:07:04.295Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 697365,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-05-18T00:02:04.577Z"),
      modifiedAt: new Date("2024-03-27T23:35:54.981Z"),
      id: "<value>",
      type: "discord",
      description: "frankly absent stiff once",
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
      path: "/lib",
      mimeType: "<value>",
      size: 22997,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-08-29T09:37:49.436Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-05-10T02:47:53.663Z"),
      sizeReadable: "<value>",
      publicUrl: "https://minor-captain.org/",
    },
  ],
  organization: {
    createdAt: new Date("2025-03-22T02:32:08.991Z"),
    modifiedAt: new Date("2024-02-03T18:19:11.088Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://carefree-swanling.name",
    bio: "<value>",
    company: "Kertzmann - Metz",
    blog: "<value>",
    location: "<value>",
    email: "Myra2@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 430261,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 284396,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
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