# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2023-07-05T00:33:17.947Z"),
    modifiedAt: new Date("2025-12-10T12:32:37.706Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://necessary-beret.biz/",
    bio: "<value>",
    company: "Conn - Trantow",
    blog: "<value>",
    location: "<value>",
    email: "Alexandra_Weimann-Reichert15@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 864218,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 358485,
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
      createdAt: new Date("2025-01-24T19:26:08.928Z"),
      modifiedAt: new Date("2025-04-09T17:11:45.598Z"),
      id: "<value>",
      name: "<value>",
      description: "deceivingly whoever tomatillo what puff woot dicker",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-08-26T10:02:28.026Z"),
          modifiedAt: new Date("2025-12-02T12:41:20.649Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 37980,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-07-28T05:07:27.507Z"),
          modifiedAt: new Date("2023-01-04T03:36:40.213Z"),
          id: "<value>",
          type: "discord",
          description:
            "best though aside pro sometimes jacket unlike clearly beneath carefully",
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
          size: 96177,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-28T05:50:08.011Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-02-04T05:36:24.325Z"),
          sizeReadable: "<value>",
          publicUrl: "https://stiff-airline.biz",
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