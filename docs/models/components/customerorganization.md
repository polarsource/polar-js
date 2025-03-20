# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2023-06-18T13:56:03.333Z"),
    modifiedAt: new Date("2023-04-20T02:36:06.073Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://musty-reboot.name",
    email: "William_Schiller@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "other",
        url: "https://scornful-newsletter.info/",
      },
    ],
    detailsSubmittedAt: new Date("2023-09-07T18:14:29.053Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Jacobi, Boyer and Goyette",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 400653,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 407058,
    profileSettings: {},
  },
  products: [
    {
      createdAt: new Date("2024-11-29T21:24:18.009Z"),
      modifiedAt: new Date("2023-05-07T04:54:40.908Z"),
      id: "<value>",
      name: "<value>",
      description: "yet freckle broadly",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-07-04T12:35:37.251Z"),
          modifiedAt: new Date("2023-08-10T16:11:12.564Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-06-06T00:17:15.191Z"),
          modifiedAt: new Date("2023-06-06T20:01:07.651Z"),
          id: "<value>",
          type: "license_keys",
          description: "zowie nor fit wretched mob hefty",
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
          path: "/private/tmp",
          mimeType: "<value>",
          size: 466235,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-17T08:36:55.539Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-04-22T13:46:31.465Z"),
          sizeReadable: "<value>",
          publicUrl: "https://unused-reporter.biz",
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