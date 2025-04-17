# BenefitCustom

A benefit of type `custom`.

Use it to grant any kind of benefit that doesn't fit in the other types.

## Example Usage

```typescript
import { BenefitCustom } from "@polar-sh/sdk/models/components/benefitcustom.js";

let value: BenefitCustom = {
  id: "<value>",
  createdAt: new Date("2024-11-04T05:40:36.718Z"),
  modifiedAt: new Date("2025-01-01T00:20:21.826Z"),
  description: "yet solemnly cleave until",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  metadata: {
    "key": 397373,
  },
  properties: {
    note: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit.                                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the benefit.                                                               |
| `selectable`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is selectable when creating a product.                                    |
| `deletable`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is deletable.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the benefit.                                                |
| `metadata`                                                                                    | Record<string, *components.BenefitCustomMetadata*>                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitCustomProperties](../../models/components/benefitcustomproperties.md)      | :heavy_check_mark:                                                                            | Properties for a benefit of type `custom`.                                                    |