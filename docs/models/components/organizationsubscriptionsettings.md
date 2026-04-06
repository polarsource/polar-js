# OrganizationSubscriptionSettings

## Example Usage

```typescript
import { OrganizationSubscriptionSettings } from "@polar-sh/sdk/models/components/organizationsubscriptionsettings.js";

let value: OrganizationSubscriptionSettings = {
  allowMultipleSubscriptions: true,
  prorationBehavior: "invoice",
  benefitRevocationGracePeriod: 987523,
  preventTrialAbuse: false,
  allowCustomerUpdates: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `allowMultipleSubscriptions`                                                 | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `prorationBehavior`                                                          | [components.ProrationBehavior](../../models/components/prorationbehavior.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `benefitRevocationGracePeriod`                                               | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `preventTrialAbuse`                                                          | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `allowCustomerUpdates`                                                       | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |