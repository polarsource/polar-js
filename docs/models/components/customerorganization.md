# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-02-20T19:17:02.763Z"),
    modifiedAt: new Date("2024-10-22T04:57:04.113Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://enchanted-pneumonia.org/",
    email: "Autumn.Jacobs63@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "x",
        url: "https://darling-complication.com/",
      },
    ],
    detailsSubmittedAt: new Date("2023-10-28T12:38:34.300Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Jenkins, Stamm and Ebert",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 939770,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 17020,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2023-01-30T17:42:43.078Z"),
      modifiedAt: new Date("2024-02-01T19:51:27.876Z"),
      id: "<value>",
      name: "<value>",
      description:
        "whoever cruelly brr finally dispense zealous sentimental superb er even",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-11-01T05:47:42.686Z"),
          modifiedAt: new Date("2023-11-16T09:23:24.153Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-08-13T04:05:41.912Z"),
          modifiedAt: new Date("2023-08-15T19:08:33.127Z"),
          id: "<value>",
          type: "github_repository",
          description: "kit bus pfft impolite",
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
          path: "/lost+found",
          mimeType: "<value>",
          size: 934489,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-08-25T12:31:12.659Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-09-13T01:01:31.367Z"),
          sizeReadable: "<value>",
          publicUrl: "https://massive-bonfire.com/",
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