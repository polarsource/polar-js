# CustomerOrganizationData

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganizationData } from "@polar-sh/sdk/models/components/customerorganizationdata.js";

let value: CustomerOrganizationData = {
  organization: {
    createdAt: new Date("2025-06-19T16:24:01.921Z"),
    modifiedAt: new Date("2025-05-12T15:42:22.268Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://joyous-trick.biz",
    prorationBehavior: "invoice",
    allowCustomerUpdates: true,
    customerPortalSettings: {
      usage: {
        show: true,
      },
      subscription: {
        updateSeats: false,
        updatePlan: true,
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