# OrganizationCustomerPortalSettings

## Example Usage

```typescript
import { OrganizationCustomerPortalSettings } from "@polar-sh/sdk/models/components/organizationcustomerportalsettings.js";

let value: OrganizationCustomerPortalSettings = {
  usage: {
    show: false,
  },
  subscription: {
    updateSeats: true,
    updatePlan: true,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `usage`                                                                                                        | [components.CustomerPortalUsageSettings](../../models/components/customerportalusagesettings.md)               | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `subscription`                                                                                                 | [components.CustomerPortalSubscriptionSettings](../../models/components/customerportalsubscriptionsettings.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `customer`                                                                                                     | [components.CustomerPortalCustomerSettings](../../models/components/customerportalcustomersettings.md)         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |