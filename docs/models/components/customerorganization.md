# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2024-01-20T01:15:53.582Z"),
    modifiedAt: new Date("2025-11-17T07:20:20.409Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://willing-midwife.com",
    email: "Chyna.Towne37@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "x",
        url: "https://snappy-hovercraft.biz",
      },
    ],
    detailsSubmittedAt: new Date("2025-12-10T12:32:37.706Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Blanda Inc",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 262334,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 139024,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2025-09-07T00:37:34.890Z"),
      modifiedAt: new Date("2023-08-01T10:13:09.305Z"),
      id: "<value>",
      name: "<value>",
      description: "unimpressively garage whereas",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-06-13T10:46:10.763Z"),
          modifiedAt: new Date("2025-10-12T11:41:32.180Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 252622,
          maximumAmount: 89184,
          presetAmount: 504198,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-04-27T08:11:20.065Z"),
          modifiedAt: new Date("2025-12-11T21:08:23.117Z"),
          id: "<value>",
          type: "license_keys",
          description: "despite bah oh",
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
          path: "/usr/ports",
          mimeType: "<value>",
          size: 290128,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-02-04T19:24:29.006Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-05-14T06:17:05.573Z"),
          sizeReadable: "<value>",
          publicUrl: "https://exalted-kiss.org",
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