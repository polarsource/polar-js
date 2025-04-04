# BenefitCustom

A benefit of type `custom`.

Use it to grant any kind of benefit that doesn't fit in the other types.

## Example Usage

```typescript
import { BenefitCustom } from "@polar-sh/sdk/models/components/benefitcustom.js";

let value: BenefitCustom = {
  createdAt: new Date("2023-01-06T12:53:03.799Z"),
  modifiedAt: new Date("2023-07-24T04:31:39.728Z"),
  id: "<value>",
  description: "zowie marimba brr opposite confute who boo little hmph flood",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    note: "<value>",
  },
  isTaxApplicable: false,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the benefit.                                                                                                  |
| `type`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `description`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The description of the benefit.                                                                                         |
| `selectable`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the benefit is selectable when creating a product.                                                              |
| `deletable`                                                                                                             | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the benefit is deletable.                                                                                       |
| `organizationId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the organization owning the benefit.                                                                          |
| `properties`                                                                                                            | [components.BenefitCustomProperties](../../models/components/benefitcustomproperties.md)                                | :heavy_check_mark:                                                                                                      | Properties for a benefit of type `custom`.                                                                              |
| ~~`isTaxApplicable`~~                                                                                                   | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |