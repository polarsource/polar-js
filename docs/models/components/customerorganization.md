# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-03-21T10:59:46.035Z"),
    modifiedAt: new Date("2024-03-12T09:34:16.987Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://best-pronoun.name",
    email: "Sasha_Hintz@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "other",
        url: "https://parallel-planula.biz/",
      },
    ],
    detailsSubmittedAt: new Date("2024-10-04T08:38:09.184Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Wolff - Christiansen",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 473927,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 728871,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2024-04-27T10:46:43.536Z"),
      modifiedAt: new Date("2024-07-17T21:09:57.433Z"),
      id: "<value>",
      name: "<value>",
      description: "when pish with even aha deeply",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-01-27T02:39:42.747Z"),
          modifiedAt: new Date("2023-12-23T04:48:04.278Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-08T03:11:19.331Z"),
          modifiedAt: new Date("2023-03-15T19:09:10.567Z"),
          id: "<value>",
          type: "custom",
          description:
            "remarkable psst wherever excluding reproachfully slump mmm indeed",
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
          size: 855174,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-15T18:32:23.984Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-03T21:20:38.344Z"),
          sizeReadable: "<value>",
          publicUrl: "https://gigantic-requirement.net",
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