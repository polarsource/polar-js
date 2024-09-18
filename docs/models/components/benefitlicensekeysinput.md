# BenefitLicenseKeysInput

## Example Usage

```typescript
import { BenefitLicenseKeysInput } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysInput = {
  createdAt: new Date("2022-02-28T21:24:25.793Z"),
  modifiedAt: new Date("2023-12-06T22:42:02.136Z"),
  id: "<value>",
  description: "Integrated local challenge",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 273677,
      timeframe: "day",
    },
    activations: {
      limit: 220824,
      enableUserAdmin: false,
    },
    limitUsage: 700529,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation timestamp of the object.                                                                  |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Last modification timestamp of the object.                                                         |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the benefit.                                                                             |
| `type`                                                                                             | [components.BenefitLicenseKeysInputType](../../models/components/benefitlicensekeysinputtype.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the benefit.                                                                    |
| `selectable`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is selectable when creating a product.                                         |
| `deletable`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is deletable.                                                                  |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the organization owning the benefit.                                                     |
| `properties`                                                                                       | [components.BenefitLicenseKeysProperties](../../models/components/benefitlicensekeysproperties.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |