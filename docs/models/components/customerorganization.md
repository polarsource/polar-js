# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-01-01T18:22:02.718Z"),
    modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: null,
    email: "Hannah_Price@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "github",
        url: "https://scratchy-midwife.net/",
      },
    ],
    status: "denied",
    detailsSubmittedAt: new Date("2023-09-01T05:50:45.596Z"),
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
      id: "<value>",
      createdAt: new Date("2023-01-12T08:10:46.211Z"),
      modifiedAt: new Date("2023-03-29T13:07:50.292Z"),
      trialInterval: null,
      trialIntervalCount: 272335,
      name: "<value>",
      description: null,
      recurringInterval: "month",
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-01-25T03:51:25.596Z"),
          modifiedAt: new Date("2025-12-05T08:57:02.731Z"),
          id: "<value>",
          amountType: "free",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          legacy: true,
        },
      ],
      benefits: [],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/sbin",
          mimeType: "<value>",
          size: 498972,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2024-08-06T00:24:30.544Z"),
          sizeReadable: "<value>",
          publicUrl: "https://enchanting-bell.net/",
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