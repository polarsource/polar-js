# BenefitCustomCreate

Schema to create a benefit of type `custom`.

## Example Usage

```typescript
import { BenefitCustomCreate } from "@polar-sh/sdk/models/components";

let value: BenefitCustomCreate = {
  description: "Assimilated global application",
  isTaxApplicable: false,
  properties: {
    note: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `type`                                                                                            | [components.BenefitCustomCreateType](../../models/components/benefitcustomcreatetype.md)          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The description of the benefit. Will be displayed on products having this benefit.                |
| `organizationId`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | The ID of the organization owning the benefit. **Required unless you use an organization token.** |
| `isTaxApplicable`                                                                                 | *boolean*                                                                                         | :heavy_check_mark:                                                                                | Whether the benefit is taxable.                                                                   |
| `properties`                                                                                      | [components.BenefitCustomProperties](../../models/components/benefitcustomproperties.md)          | :heavy_check_mark:                                                                                | Properties for a benefit of type `custom`.                                                        |