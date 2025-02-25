# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2023-03-10T17:53:13.416Z"),
    modifiedAt: new Date("2023-09-23T10:49:31.106Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://wee-desk.net/",
    bio: "<value>",
    company: "Nitzsche - Fahey",
    blog: "<value>",
    location: "<value>",
    email: "Kari.Breitenberg@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 69476,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 703089,
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
      createdAt: new Date("2023-05-11T15:16:30.860Z"),
      modifiedAt: new Date("2024-07-05T02:56:26.157Z"),
      id: "<value>",
      name: "<value>",
      description: "optimal controvert innocent venture seldom yahoo",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-09-16T06:41:00.610Z"),
          modifiedAt: new Date("2024-01-02T17:03:51.334Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-10-26T14:19:18.817Z"),
          modifiedAt: new Date("2024-08-24T18:04:57.857Z"),
          id: "<value>",
          type: "downloadables",
          description:
            "which but solidly outsource conversation gosh pish defendant typewriter weep",
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
          path: "/opt/include",
          mimeType: "<value>",
          size: 608138,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-04-18T21:02:57.554Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-06-07T19:35:38.599Z"),
          sizeReadable: "<value>",
          publicUrl: "https://athletic-pants.org",
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