# CustomerOrganizationData

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganizationData } from "@polar-sh/sdk/models/components/customerorganizationdata.js";

let value: CustomerOrganizationData = {
  organization: {
    createdAt: new Date("2024-11-13T04:56:58.190Z"),
    modifiedAt: new Date("2025-02-17T06:08:03.827Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: null,
    prorationBehavior: "invoice",
    allowCustomerUpdates: false,
    customerPortalSettings: {
      usage: {
        show: true,
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