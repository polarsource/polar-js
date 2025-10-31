# BenefitMeterCreditSubscriber

## Example Usage

```typescript
import { BenefitMeterCreditSubscriber } from "@polar-sh/sdk/models/components/benefitmetercreditsubscriber.js";

let value: BenefitMeterCreditSubscriber = {
  id: "<value>",
  createdAt: new Date("2025-02-05T19:56:46.266Z"),
  modifiedAt: new Date("2023-07-04T00:01:16.390Z"),
  type: "meter_credit",
  description: "somber even yuck gym",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  metadata: {
    "key": 246653,
  },
  organization: {
    createdAt: new Date("2024-04-23T21:20:15.611Z"),
    modifiedAt: new Date("2024-05-22T15:08:17.767Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://late-cutover.org",
    email: "Phyllis_Romaguera@gmail.com",
    website: "<value>",
    socials: [],
    status: "denied",
    detailsSubmittedAt: new Date("2025-03-30T02:02:42.344Z"),
    featureSettings: null,
    subscriptionSettings: {
      allowMultipleSubscriptions: true,
      allowCustomerUpdates: true,
      prorationBehavior: "invoice",
      benefitRevocationGracePeriod: 916709,
    },
    notificationSettings: {
      newOrder: true,
      newSubscription: true,
    },
    customerEmailSettings: {
      orderConfirmation: true,
      subscriptionCancellation: true,
      subscriptionConfirmation: false,
      subscriptionCycled: true,
      subscriptionPastDue: false,
      subscriptionRevoked: false,
      subscriptionUncanceled: false,
      subscriptionUpdated: true,
    },
  },
  properties: {
    units: 430943,
    rollover: true,
    meterId: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `type`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `metadata`                                                                                                             | Record<string, *components.BenefitMeterCreditSubscriberMetadata*>                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organization`                                                                                                         | [components.Organization](../../models/components/organization.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitMeterCreditSubscriberProperties](../../models/components/benefitmetercreditsubscriberproperties.md) | :heavy_check_mark:                                                                                                     | Properties available to subscribers for a benefit of type `meter_unit`.                                                |