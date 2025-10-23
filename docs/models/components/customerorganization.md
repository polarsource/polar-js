# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2024-03-27T03:55:24.068Z"),
    modifiedAt: new Date("2025-02-03T21:10:18.351Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://huge-lid.net/",
    email: "Dalton_Anderson49@hotmail.com",
    website: "<value>",
    socials: [],
    status: "under_review",
    detailsSubmittedAt: new Date("2024-02-22T02:01:31.430Z"),
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
    customerEmailSettings: {
      orderConfirmation: true,
      subscriptionCancellation: true,
      subscriptionConfirmation: true,
      subscriptionCycled: false,
      subscriptionPastDue: true,
      subscriptionRevoked: false,
      subscriptionUncanceled: false,
      subscriptionUpdated: false,
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
      recurringIntervalCount: 488155,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-12-05T08:57:02.731Z"),
          modifiedAt: new Date("2025-01-03T02:00:53.913Z"),
          id: "<value>",
          amountType: "free",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          legacy: true,
        },
      ],
      benefits: [],
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