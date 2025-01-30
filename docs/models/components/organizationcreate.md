# OrganizationCreate

## Example Usage

```typescript
import { OrganizationCreate } from "@polar-sh/sdk/models/components/organizationcreate.js";

let value: OrganizationCreate = {
  name: "<value>",
  slug: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `avatarUrl`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `featureSettings`                                                                                          | [components.OrganizationFeatureSettings](../../models/components/organizationfeaturesettings.md)           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `subscriptionSettings`                                                                                     | [components.OrganizationSubscriptionSettings](../../models/components/organizationsubscriptionsettings.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |