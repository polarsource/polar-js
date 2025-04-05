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
    pledgeMinimumAmount: 411033,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 818240,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2025-06-10T05:28:55.195Z"),
      modifiedAt: new Date("2023-11-08T08:03:26.336Z"),
      id: "<value>",
      name: "<value>",
      description: "before whereas old-fashioned sweatshop oblong realistic",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-11-01T19:01:21.082Z"),
          modifiedAt: new Date("2023-09-12T10:07:57.606Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 730116,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-07-02T00:07:23.572Z"),
          modifiedAt: new Date("2023-03-11T22:33:37.993Z"),
          id: "<value>",
          type: "downloadables",
          description: "ha settler inasmuch even",
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
          path: "/var/mail",
          mimeType: "<value>",
          size: 814599,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-07-05T02:01:33.623Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-13T12:31:35.091Z"),
          sizeReadable: "<value>",
          publicUrl: "https://shameless-freight.com/",
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