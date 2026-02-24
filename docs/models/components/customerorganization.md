# CustomerOrganization

## Example Usage

```typescript
import { CustomerOrganization } from "@polar-sh/sdk/models/components/customerorganization.js";

let value: CustomerOrganization = {
  createdAt: new Date("2026-04-15T05:48:03.283Z"),
  modifiedAt: null,
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://astonishing-foodstuffs.biz/",
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
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the object.                                                                                            |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Organization name shown in checkout, customer portal, emails etc.                                                |
| `slug`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Unique organization slug in checkout, customer portal and credit card statements.                                |
| `avatarUrl`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Avatar URL shown in checkout, customer portal, emails etc.                                                       |
| `prorationBehavior`                                                                                              | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `allowCustomerUpdates`                                                                                           | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether customers can update their subscriptions from the customer portal.                                       |
| `customerPortalSettings`                                                                                         | [components.OrganizationCustomerPortalSettings](../../models/components/organizationcustomerportalsettings.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `organizationFeatures`                                                                                           | [components.CustomerOrganizationFeatureSettings](../../models/components/customerorganizationfeaturesettings.md) | :heavy_minus_sign:                                                                                               | Feature flags exposed to the customer portal.                                                                    |