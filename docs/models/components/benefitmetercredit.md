# BenefitMeterCredit

A benefit of type `meter_unit`.

Use it to grant a number of units on a specific meter.

## Example Usage

```typescript
import { BenefitMeterCredit } from "@polar-sh/sdk/models/components/benefitmetercredit.js";

let value: BenefitMeterCredit = {
  id: "<value>",
  createdAt: new Date("2023-08-25T12:13:00.837Z"),
  modifiedAt: new Date("2024-07-31T23:01:40.559Z"),
  description: "drat failing or numeracy",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  metadata: {
    "key": 1663.34,
  },
  properties: {
    units: 41510,
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
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the benefit.                                                                    |
| `selectable`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is selectable when creating a product.                                         |
| `deletable`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is deletable.                                                                  |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the organization owning the benefit.                                                     |
| `metadata`                                                                                         | Record<string, *components.BenefitMeterCreditMetadata*>                                            | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | [components.BenefitMeterCreditProperties](../../models/components/benefitmetercreditproperties.md) | :heavy_check_mark:                                                                                 | Properties for a benefit of type `meter_unit`.                                                     |