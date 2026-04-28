# OrganizationCapabilities

## Example Usage

```typescript
import { OrganizationCapabilities } from "@polar-sh/sdk/models/components/organizationcapabilities.js";

let value: OrganizationCapabilities = {
  checkoutPayments: true,
  subscriptionRenewals: false,
  payouts: false,
  refunds: true,
  apiAccess: false,
  dashboardAccess: true,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `checkoutPayments`                                          | *boolean*                                                   | :heavy_check_mark:                                          | Whether the organization can accept new checkout payments.  |
| `subscriptionRenewals`                                      | *boolean*                                                   | :heavy_check_mark:                                          | Whether the organization can process subscription renewals. |
| `payouts`                                                   | *boolean*                                                   | :heavy_check_mark:                                          | Whether the organization can withdraw its balance.          |
| `refunds`                                                   | *boolean*                                                   | :heavy_check_mark:                                          | Whether the organization can issue refunds.                 |
| `apiAccess`                                                 | *boolean*                                                   | :heavy_check_mark:                                          | Whether the organization can access the API.                |
| `dashboardAccess`                                           | *boolean*                                                   | :heavy_check_mark:                                          | Whether the organization can access the dashboard.          |