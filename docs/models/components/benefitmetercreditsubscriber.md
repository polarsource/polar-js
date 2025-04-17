# BenefitMeterCreditSubscriber

## Example Usage

```typescript
import { BenefitMeterCreditSubscriber } from "@polar-sh/sdk/models/components/benefitmetercreditsubscriber.js";

let value: BenefitMeterCreditSubscriber = {
  id: "<value>",
  createdAt: new Date("2025-02-05T19:56:46.266Z"),
  modifiedAt: new Date("2024-03-24T19:43:32.313Z"),
  description: "trash valiantly boohoo zowie",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  metadata: {
    "key": 878423,
  },
  organization: {
    createdAt: new Date("2025-04-25T13:08:18.422Z"),
    modifiedAt: new Date("2024-11-14T19:58:44.206Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://expensive-giggle.net/",
    email: "Lola.Friesen@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "instagram",
        url: "https://stupendous-toaster.biz/",
      },
    ],
    detailsSubmittedAt: new Date("2025-04-25T09:59:29.489Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
  },
  properties: {
    units: 882770,
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