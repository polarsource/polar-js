# BenefitSubscriberOrganization

## Example Usage

```typescript
import { BenefitSubscriberOrganization } from "@polar-sh/sdk/models/components/benefitsubscriberorganization.js";

let value: BenefitSubscriberOrganization = {
  createdAt: new Date("2026-03-16T15:05:34.839Z"),
  modifiedAt: new Date("2024-10-23T02:32:03.396Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://misguided-release.biz",
  prorationBehavior: "invoice",
  allowCustomerUpdates: true,
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