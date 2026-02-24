# CustomerOrganizationData

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganizationData } from "@polar-sh/sdk/models/components/customerorganizationdata.js";

let value: CustomerOrganizationData = {
  organization: {
    createdAt: new Date("2026-09-30T11:33:49.764Z"),
    modifiedAt: new Date("2024-03-13T19:22:24.375Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://forceful-grass.com/",
    prorationBehavior: "invoice",
    allowCustomerUpdates: true,
    customerPortalSettings: {
      usage: {
        show: false,
      },
      subscription: {
        updateSeats: true,
        updatePlan: false,
      },
    },
  },
  products: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `organization`                                                                     | [components.CustomerOrganization](../../models/components/customerorganization.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `products`                                                                         | [components.CustomerProduct](../../models/components/customerproduct.md)[]         | :heavy_check_mark:                                                                 | N/A                                                                                |