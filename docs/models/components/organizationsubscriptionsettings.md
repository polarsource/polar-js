# OrganizationSubscriptionSettings

## Example Usage

```typescript
import { OrganizationSubscriptionSettings } from "@polar-sh/sdk/models/components/organizationsubscriptionsettings.js";

let value: OrganizationSubscriptionSettings = {
  allowMultipleSubscriptions: false,
  allowCustomerUpdates: false,
  prorationBehavior: "prorate",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `allowMultipleSubscriptions`                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `allowCustomerUpdates`                                                                               | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `prorationBehavior`                                                                                  | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |