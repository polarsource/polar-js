# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2024-10-31T14:02:30.154Z"),
    modifiedAt: new Date("2024-05-08T14:23:40.928Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://noxious-reasoning.biz",
    email: "Korbin18@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "x",
        url: "https://super-pneumonia.org",
      },
    ],
    detailsSubmittedAt: new Date("2025-02-18T23:58:07.398Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Frami, Sipes and McKenzie",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 512653,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 578983,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2024-03-07T09:08:30.448Z"),
      modifiedAt: new Date("2023-10-24T10:27:09.993Z"),
      id: "<value>",
      name: "<value>",
      description: "miscalculate wetly ick times mythology underneath",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-11-16T06:10:32.593Z"),
          modifiedAt: new Date("2023-04-06T21:56:28.637Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 801806,
          maximumAmount: 769067,
          presetAmount: 817366,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-05-02T15:28:19.816Z"),
          modifiedAt: new Date("2024-01-06T18:04:00.281Z"),
          id: "<value>",
          type: "license_keys",
          description:
            "inasmuch wriggler brr morning circa around underneath yowza",
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
          path: "/opt/share",
          mimeType: "<value>",
          size: 47672,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-10-23T09:17:13.863Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-10-18T07:47:44.539Z"),
          sizeReadable: "<value>",
          publicUrl: "https://coarse-guide.com/",
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