# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2024-07-11T02:04:41.072Z"),
    modifiedAt: new Date("2025-11-26T13:33:51.948Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://french-lid.com",
    email: "Hannah_Price@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://expert-elevation.org",
      },
    ],
    detailsSubmittedAt: new Date("2025-12-07T19:21:48.818Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
  },
  products: [
    {
      createdAt: new Date("2023-01-12T08:10:46.211Z"),
      modifiedAt: new Date("2023-03-29T13:07:50.292Z"),
      id: "<value>",
      name: "<value>",
      description: null,
      recurringInterval: "month",
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-06-15T18:59:10.339Z"),
          modifiedAt: new Date("2023-11-08T08:03:26.336Z"),
          id: "<value>",
          isArchived: true,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 861129,
        },
      ],
      benefits: [],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/private",
          mimeType: "<value>",
          size: 782007,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: null,
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-07-08T02:43:14.288Z"),
          sizeReadable: "<value>",
          publicUrl: "https://aged-fellow.net",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `organization`                                                             | [components.Organization](../../models/components/organization.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `products`                                                                 | [components.CustomerProduct](../../models/components/customerproduct.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |