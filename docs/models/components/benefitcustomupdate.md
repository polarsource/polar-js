# BenefitCustomUpdate

## Example Usage

```typescript
import { BenefitCustomUpdate } from "@polar-sh/sdk/models/components";

let value: BenefitCustomUpdate = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | The description of the benefit. Will be displayed on products having this benefit.       |
| `type`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `properties`                                                                             | [components.BenefitCustomProperties](../../models/components/benefitcustomproperties.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |