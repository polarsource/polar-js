# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-02-03T21:10:18.351Z"),
    modifiedAt: new Date("2024-01-24T22:47:46.870Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://super-ocelot.org",
    email: "Adolph.Kuhn40@gmail.com",
    website: "<value>",
    socials: [],
    status: "onboarding_started",
    detailsSubmittedAt: new Date("2023-06-02T11:26:30.723Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: true,
      allowCustomerUpdates: true,
      prorationBehavior: "invoice",
    },
    notificationSettings: {
      newOrder: false,
      newSubscription: true,
    },
  },
  products: [
    {
      id: "<value>",
      createdAt: new Date("2023-01-12T08:10:46.211Z"),
      modifiedAt: new Date("2023-03-29T13:07:50.292Z"),
      trialInterval: null,
      trialIntervalCount: 272335,
      name: "<value>",
      description: null,
      recurringInterval: "month",
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-01-25T03:51:25.596Z"),
          modifiedAt: new Date("2025-12-05T08:57:02.731Z"),
          id: "<value>",
          amountType: "free",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          legacy: true,
        },
      ],
      benefits: [],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/media",
          mimeType: "<value>",
          size: 824371,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-18T19:01:12.258Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2024-07-19T01:58:20.240Z"),
          sizeReadable: "<value>",
          publicUrl: "https://dim-apparatus.biz/",
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