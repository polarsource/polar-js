# CheckoutOrganization

## Example Usage

```typescript
import { CheckoutOrganization } from "@polar-sh/sdk/models/components/checkoutorganization.js";

let value: CheckoutOrganization = {
  createdAt: new Date("2024-12-15T13:26:37.014Z"),
  modifiedAt: new Date("2025-02-13T18:17:21.202Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://unsightly-hunt.org",
  prorationBehavior: "prorate",
  allowCustomerUpdates: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Organization name shown in checkout, customer portal, emails etc.                                    |
| `slug`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique organization slug in checkout, customer portal and credit card statements.                    |
| `avatarUrl`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Avatar URL shown in checkout, customer portal, emails etc.                                           |
| `prorationBehavior`                                                                                  | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `allowCustomerUpdates`                                                                               | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether customers can update their subscriptions from the customer portal.                           |