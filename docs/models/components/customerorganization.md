# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2024-03-31T07:55:07.200Z"),
    modifiedAt: new Date("2024-05-22T11:45:49.634Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://showy-guacamole.name/",
    email: "Mia_Wiza@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "tiktok",
        url: "https://nifty-vision.com/",
      },
    ],
    detailsSubmittedAt: new Date("2024-10-13T21:14:28.454Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "McGlynn - Ryan",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 285508,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 977011,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2023-05-23T18:30:24.585Z"),
      modifiedAt: new Date("2024-06-03T10:10:43.292Z"),
      id: "<value>",
      name: "<value>",
      description:
        "sometimes jacket unlike clearly beneath carefully oh readily",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-03-31T12:33:05.474Z"),
          modifiedAt: new Date("2024-06-08T17:30:09.345Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 677492,
          maximumAmount: 319975,
          presetAmount: 765552,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-04-30T03:38:37.774Z"),
          modifiedAt: new Date("2024-10-07T23:37:13.021Z"),
          id: "<value>",
          type: "downloadables",
          description: "unethically vicinity aggravating seemingly provided",
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
          path: "/usr/lib",
          mimeType: "<value>",
          size: 217602,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-05-17T14:59:44.284Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-20T20:13:03.820Z"),
          sizeReadable: "<value>",
          publicUrl: "https://far-flung-ocelot.info",
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