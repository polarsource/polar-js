# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2023-06-27T06:28:05.282Z"),
    modifiedAt: new Date("2023-12-17T08:51:22.729Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://miserable-palate.info/",
    bio: "<value>",
    company: "Terry LLC",
    blog: "<value>",
    location: "<value>",
    email: "Emmanuel_Gleason63@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 539732,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 860632,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
  },
  products: [
    {
      createdAt: new Date("2023-01-28T06:52:10.820Z"),
      modifiedAt: new Date("2023-10-30T14:10:23.904Z"),
      id: "<value>",
      name: "<value>",
      description:
        "bonfire respray decide deplore whenever self-reliant if supposing meanwhile phew",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-09-17T15:39:07.023Z"),
          modifiedAt: new Date("2025-06-23T21:30:05.288Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 23427,
          maximumAmount: 488827,
          presetAmount: 838340,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-10-11T04:07:28.860Z"),
          modifiedAt: new Date("2023-08-01T13:56:23.679Z"),
          id: "<value>",
          type: "license_keys",
          description: "with but probe spirit blah following",
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
          path: "/System",
          mimeType: "<value>",
          size: 980988,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-10-27T06:01:39.364Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-09-04T21:23:13.781Z"),
          sizeReadable: "<value>",
          publicUrl: "https://discrete-sanity.info/",
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