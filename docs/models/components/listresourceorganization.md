# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-10-31T04:26:04.861Z"),
      modifiedAt: null,
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://stark-premier.com/",
      prorationBehavior: "invoice",
      allowCustomerUpdates: true,
      email: "Gudrun10@hotmail.com",
      website: "<value>",
      socials: [],
      status: "created",
      detailsSubmittedAt: new Date("2025-06-05T05:24:43.996Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: true,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
        benefitRevocationGracePeriod: 164496,
      },
      notificationSettings: {
        newOrder: true,
        newSubscription: false,
      },
      customerEmailSettings: {
        orderConfirmation: true,
        subscriptionCancellation: true,
        subscriptionConfirmation: true,
        subscriptionCycled: true,
        subscriptionPastDue: false,
        subscriptionRevoked: true,
        subscriptionUncanceled: false,
        subscriptionUpdated: false,
      },
    },
  ],
  pagination: {
    totalCount: 279990,
    maxPage: 718643,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |