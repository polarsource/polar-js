# BenefitCustomCreate

Schema to create a benefit of type `custom`.

## Example Usage

```typescript
import { BenefitCustomCreate } from "@polar-sh/sdk/models/components";

let value: BenefitCustomCreate = {
  description:
    "onto certification excluding safely not subsidy a petticoat emerge on",
  isTaxApplicable: false,
  properties: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.BenefitCustomCreateType](../../models/components/benefitcustomcreatetype.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the benefit. Will be displayed on products having this benefit.                   |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the organization owning the benefit. **Required unless you use an organization token.**    |
| `isTaxApplicable`                                                                                    | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the benefit is taxable.                                                                      |
| `properties`                                                                                         | [components.BenefitCustomCreateProperties](../../models/components/benefitcustomcreateproperties.md) | :heavy_check_mark:                                                                                   | Properties for creating a benefit of type `custom`.                                                  |