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
    createdAt: new Date("2025-01-01T18:22:02.718Z"),
    modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: null,
    email: "Hannah_Price@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://expert-elevation.org",
      },
    ],
    status: "denied",
    detailsSubmittedAt: new Date("2023-09-01T05:50:45.596Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    notificationSettings: {
      newOrder: true,
      newSubscription: false,
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