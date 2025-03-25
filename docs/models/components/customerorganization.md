# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2024-06-07T11:50:26.753Z"),
    modifiedAt: new Date("2024-07-11T11:04:29.844Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://purple-palate.net/",
    email: "Cierra2@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "facebook",
        url: "https://last-making.biz/",
      },
    ],
    detailsSubmittedAt: new Date("2024-06-30T14:06:00.507Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Lubowitz - Wiza",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 479767,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 905121,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2023-02-11T15:02:00.343Z"),
      modifiedAt: new Date("2024-07-28T05:07:27.507Z"),
      id: "<value>",
      name: "<value>",
      description: "impeccable but potentially",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-04-29T08:16:33.102Z"),
          modifiedAt: new Date("2023-11-09T21:59:58.532Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 130265,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-06-03T10:10:43.292Z"),
          modifiedAt: new Date("2025-03-09T20:13:31.276Z"),
          id: "<value>",
          type: "github_repository",
          description: "hamburger help on drat woot carelessly preclude",
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
          path: "/etc/periodic",
          mimeType: "<value>",
          size: 171654,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-03-15T19:09:10.567Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-22T14:36:35.854Z"),
          sizeReadable: "<value>",
          publicUrl: "https://precious-doubter.biz",
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