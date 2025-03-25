# BenefitCustomCreate

Schema to create a benefit of type `custom`.

## Example Usage

```typescript
import { BenefitCustomCreate } from "@polar-sh/sdk/models/components/benefitcustomcreate.js";

let value: BenefitCustomCreate = {
  description:
    "noisily delightfully ill-fated phooey baritone notwithstanding cycle intelligent upwardly where",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the benefit. Will be displayed on products having this benefit.                   |                                                                                                      |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the organization owning the benefit. **Required unless you use an organization token.**    | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                 |
| `properties`                                                                                         | [components.BenefitCustomCreateProperties](../../models/components/benefitcustomcreateproperties.md) | :heavy_check_mark:                                                                                   | Properties for creating a benefit of type `custom`.                                                  |                                                                                                      |