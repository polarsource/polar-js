# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2025-01-01T18:22:02.718Z"),
    modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: null,
    email: "Hannah_Price@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://expert-elevation.org",
      },
    ],
    detailsSubmittedAt: new Date("2025-12-07T19:21:48.818Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    notificationSettings: {
      newOrder: true,
      newSubscription: true,
    },
  },
  products: [
    {
      createdAt: new Date("2023-01-12T08:10:46.211Z"),
      modifiedAt: new Date("2023-03-29T13:07:50.292Z"),
      id: "<value>",
      name: "<value>",
      description: null,
      recurringInterval: "month",
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-05-27T11:53:33.166Z"),
          modifiedAt: new Date("2025-02-15T05:46:47.784Z"),
          id: "<value>",
          amountType: "custom",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 165096,
          maximumAmount: 445471,
          presetAmount: 818240,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-01-02T09:29:19.773Z"),
          modifiedAt: new Date("2025-02-05T18:27:31.976Z"),
          type: "downloadables",
          description:
            "considering superior about toward fortunately eek internationalize wedge enrage",
          selectable: true,
          deletable: false,
          organizationId: "<value>",
        },
      ],
      medias: [],
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `organization`                                                             | [components.Organization](../../models/components/organization.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `products`                                                                 | [components.CustomerProduct](../../models/components/customerproduct.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |