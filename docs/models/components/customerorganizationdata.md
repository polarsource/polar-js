# CustomerOrganizationData

Schema of an organization and related data for customer portal.

## Example Usage

```typescript
import { CustomerOrganizationData } from "@polar-sh/sdk/models/components/customerorganizationdata.js";

let value: CustomerOrganizationData = {
  organization: {
    createdAt: new Date("2023-09-17T13:02:40.897Z"),
    modifiedAt: null,
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://peaceful-address.net",
    prorationBehavior: "invoice",
    allowCustomerUpdates: false,
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