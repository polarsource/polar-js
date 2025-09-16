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
        platform: "github",
        url: "https://scratchy-midwife.net/",
      },
    ],
    status: "denied",
    detailsSubmittedAt: new Date("2024-02-17T13:14:03.864Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: true,
      allowCustomerUpdates: true,
      prorationBehavior: "invoice",
    },
    notificationSettings: {
      newOrder: false,
      newSubscription: true,
    },
  },
  products: [
    {
      createdAt: new Date("2023-01-12T08:10:46.211Z"),
      modifiedAt: new Date("2023-03-29T13:07:50.292Z"),
      id: "<value>",
      name: "<value>",
      description: null,
      recurringInterval: "week",
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-05-27T11:53:33.166Z"),
          modifiedAt: new Date("2025-02-15T05:46:47.784Z"),
          id: "<value>",
          amountType: "fixed",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 668872,
          legacy: true,
        },
      ],
      benefits: [],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/X11R6",
          mimeType: "<value>",
          size: 327832,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: null,
          version: "<value>",
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2023-11-10T03:13:37.813Z"),
          sizeReadable: "<value>",
          publicUrl: "https://warlike-tinderbox.com",
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