# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-10-05T12:57:48.267Z"),
    modifiedAt: new Date("2025-09-05T05:45:42.406Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://medium-object.org",
    email: "Elena.Barton@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://expert-elevation.org",
      },
    ],
    detailsSubmittedAt: new Date("2024-01-24T22:47:46.870Z"),
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
          path: "/usr/include",
          mimeType: "<value>",
          size: 496688,
          storageVersion: null,
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-02-05T19:40:37.393Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-17T07:41:12.479Z"),
          sizeReadable: "<value>",
          publicUrl: "https://lumpy-baseboard.biz/",
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