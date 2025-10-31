# CustomerOrganization

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  organization: {
    createdAt: new Date("2024-04-23T21:20:15.611Z"),
    modifiedAt: new Date("2024-05-22T15:08:17.767Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://late-cutover.org",
    email: "Phyllis_Romaguera@gmail.com",
    website: "<value>",
    socials: [],
    status: "denied",
    detailsSubmittedAt: new Date("2025-03-30T02:02:42.344Z"),
    featureSettings: null,
    subscriptionSettings: {
      allowMultipleSubscriptions: true,
      allowCustomerUpdates: true,
      prorationBehavior: "invoice",
      benefitRevocationGracePeriod: 916709,
    },
    notificationSettings: {
      newOrder: true,
      newSubscription: true,
    },
    customerEmailSettings: {
      orderConfirmation: true,
      subscriptionCancellation: true,
      subscriptionConfirmation: false,
      subscriptionCycled: true,
      subscriptionPastDue: false,
      subscriptionRevoked: false,
      subscriptionUncanceled: false,
      subscriptionUpdated: true,
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