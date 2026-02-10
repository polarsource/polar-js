# BenefitMeterCredit

A benefit of type `meter_unit`.

Use it to grant a number of units on a specific meter.

## Example Usage

```typescript
import { BenefitMeterCredit } from "@polar-sh/sdk/models/components/benefitmetercredit.js";

let value: BenefitMeterCredit = {
  id: "<value>",
  createdAt: new Date("2026-07-13T02:35:52.595Z"),
  modifiedAt: new Date("2026-08-26T02:40:11.876Z"),
  type: "meter_credit",
  description: "pish than huzzah rekindle lively approximate against meal",
  selectable: true,
  deletable: false,
  organizationId: "<value>",
  metadata: {},
  properties: {
    units: 298008,
    rollover: false,
    meterId: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the benefit.                                                                             |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation timestamp of the object.                                                                  |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Last modification timestamp of the object.                                                         |
| `type`                                                                                             | *"meter_credit"*                                                                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the benefit.                                                                    |
| `selectable`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is selectable when creating a product.                                         |
| `deletable`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is deletable.                                                                  |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the organization owning the benefit.                                                     |
| `metadata`                                                                                         | Record<string, *components.MetadataOutputType*>                                                    | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | [components.BenefitMeterCreditProperties](../../models/components/benefitmetercreditproperties.md) | :heavy_check_mark:                                                                                 | Properties for a benefit of type `meter_unit`.                                                     |