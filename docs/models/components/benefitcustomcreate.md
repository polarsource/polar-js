# BenefitCustomCreate

Schema to create a benefit of type `custom`.

## Example Usage

```typescript
import { BenefitCustomCreate } from "@polar-sh/sdk/models/components";

let value: BenefitCustomCreate = {
  description: "a overstay shinny before",
  properties: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the benefit. Will be displayed on products having this benefit.                   |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the organization owning the benefit. **Required unless you use an organization token.**    |
| `properties`                                                                                         | [components.BenefitCustomCreateProperties](../../models/components/benefitcustomcreateproperties.md) | :heavy_check_mark:                                                                                   | Properties for creating a benefit of type `custom`.                                                  |