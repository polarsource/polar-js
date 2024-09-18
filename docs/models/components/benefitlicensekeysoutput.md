# BenefitLicenseKeysOutput

## Example Usage

```typescript
import { BenefitLicenseKeysOutput } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysOutput = {
  createdAt: new Date("2023-09-29T15:39:31.934Z"),
  modifiedAt: new Date("2022-06-25T14:42:08.428Z"),
  id: "<value>",
  description: "Customizable multi-state flexibility",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 440264,
      timeframe: "month",
    },
    activations: {
      limit: 76486,
      enableUserAdmin: false,
    },
    limitUsage: 361306,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation timestamp of the object.                                                                  |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Last modification timestamp of the object.                                                         |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the benefit.                                                                             |
| `type`                                                                                             | [components.BenefitLicenseKeysOutputType](../../models/components/benefitlicensekeysoutputtype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the benefit.                                                                    |
| `selectable`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is selectable when creating a product.                                         |
| `deletable`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is deletable.                                                                  |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the organization owning the benefit.                                                     |
| `properties`                                                                                       | [components.BenefitLicenseKeysProperties](../../models/components/benefitlicensekeysproperties.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |