# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-04-15T05:48:03.283Z"),
    modifiedAt: new Date("2023-01-12T08:10:46.211Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://bony-arcade.info/",
    email: "Antoinette48@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "facebook",
        url: "https://alert-version.org",
      },
    ],
    detailsSubmittedAt: new Date("2025-11-16T11:40:38.402Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
  },
  products: [
    {
      createdAt: new Date("2023-06-30T22:41:56.321Z"),
      modifiedAt: new Date("2025-06-29T00:00:03.852Z"),
      id: "<value>",
      name: "<value>",
      description: "total beneath fatally after couch brr",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-10-01T07:47:51.681Z"),
          modifiedAt: new Date("2025-01-02T06:07:27.570Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: "<value>",
          capAmount: 120123,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-11-01T19:01:21.082Z"),
          modifiedAt: new Date("2023-09-12T10:07:57.606Z"),
          type: "custom",
          description: "gnaw upright overproduce oh uh-huh categorise shameful",
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
          size: 888796,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-06T17:24:41.128Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-11T07:48:38.254Z"),
          sizeReadable: "<value>",
          publicUrl: "https://dependable-restaurant.com",
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