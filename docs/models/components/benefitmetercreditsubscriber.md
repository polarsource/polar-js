# BenefitMeterCreditSubscriber

## Example Usage

```typescript
import { BenefitMeterCreditSubscriber } from "@polar-sh/sdk/models/components/benefitmetercreditsubscriber.js";

let value: BenefitMeterCreditSubscriber = {
  id: "<value>",
  createdAt: new Date("2026-02-05T19:56:46.266Z"),
  modifiedAt: new Date("2024-07-03T00:01:16.390Z"),
  type: "meter_credit",
  description: "somber even yuck gym",
  selectable: false,
  deletable: false,
  isDeleted: false,
  organizationId: "<value>",
  metadata: {},
  organization: {
    createdAt: new Date("2026-08-25T19:07:42.873Z"),
    modifiedAt: new Date("2025-12-26T12:35:13.942Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: null,
    prorationBehavior: "reset",
    allowCustomerUpdates: false,
  },
  properties: {
    units: 337010,
    rollover: false,
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
| `type`                                                                                                                 | *"meter_credit"*                                                                                                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `isDeleted`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deleted.                                                                                        |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `metadata`                                                                                                             | Record<string, *components.MetadataOutputType*>                                                                        | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organization`                                                                                                         | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitMeterCreditSubscriberProperties](../../models/components/benefitmetercreditsubscriberproperties.md) | :heavy_check_mark:                                                                                                     | Properties available to subscribers for a benefit of type `meter_unit`.                                                |