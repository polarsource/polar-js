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
    bio: "<value>",
    company: "Simonis - Kilback",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
  },
  products: [
    {
      createdAt: new Date("2024-03-26T11:49:23.934Z"),
      modifiedAt: new Date("2025-06-15T18:59:10.339Z"),
      id: "<value>",
      name: "<value>",
      description:
        "folklore bracelet unless between meh whoever famously cheese ha",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-12-12T20:48:42.997Z"),
          modifiedAt: new Date("2024-05-22T03:07:26.638Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 714622,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-01T19:24:08.463Z"),
          modifiedAt: new Date("2025-10-30T18:21:36.565Z"),
          id: "<value>",
          type: "meter_credit",
          description: "alongside finally guilt grimy healthily",
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
          path: "/var/tmp",
          mimeType: "<value>",
          size: 565302,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-10-24T05:29:13.413Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-03-06T19:27:54.908Z"),
          sizeReadable: "<value>",
          publicUrl: "https://short-term-reservation.com",
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