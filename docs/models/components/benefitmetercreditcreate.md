# BenefitMeterCreditCreate

Schema to create a benefit of type `meter_unit`.

## Example Usage

```typescript
import { BenefitMeterCreditCreate } from "@polar-sh/sdk/models/components/benefitmetercreditcreate.js";

let value: BenefitMeterCreditCreate = {
  description: "skean ascertain nor cop vivaciously yippee tame",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {
    unit: 682449,
    meterId: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The description of the benefit. Will be displayed on products having this benefit.                             |                                                                                                                |
| `organizationId`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The ID of the organization owning the benefit. **Required unless you use an organization token.**              | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                           |
| `properties`                                                                                                   | [components.BenefitMeterCreditCreateProperties](../../models/components/benefitmetercreditcreateproperties.md) | :heavy_check_mark:                                                                                             | Properties for creating a benefit of type `meter_unit`.                                                        |                                                                                                                |