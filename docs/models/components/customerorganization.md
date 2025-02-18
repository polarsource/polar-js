# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-04-10T01:39:52.504Z"),
    modifiedAt: new Date("2025-10-22T20:05:01.882Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://gaseous-cardboard.com",
    bio: "<value>",
    company: "Adams LLC",
    blog: "<value>",
    location: "<value>",
    email: "Moshe_Armstrong@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 699166,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 60670,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
  },
  products: [
    {
      createdAt: new Date("2023-04-03T01:32:48.709Z"),
      modifiedAt: new Date("2023-12-18T14:00:14.551Z"),
      id: "<value>",
      name: "<value>",
      description: "pfft taro but roughly despite",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-11-20T23:20:38.345Z"),
          modifiedAt: new Date("2025-03-25T18:58:01.050Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 771011,
          maximumAmount: 981484,
          presetAmount: 919857,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-04-06T08:26:53.676Z"),
          modifiedAt: new Date("2025-05-14T04:56:14.610Z"),
          id: "<value>",
          type: "ads",
          description:
            "including aggressive till underpants which but solidly outsource conversation gosh",
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
          path: "/opt",
          mimeType: "<value>",
          size: 846377,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-03-01T11:26:54.478Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-22T05:01:16.388Z"),
          sizeReadable: "<value>",
          publicUrl: "https://bleak-suspension.info",
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