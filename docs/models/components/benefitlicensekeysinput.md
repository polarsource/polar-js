# BenefitLicenseKeysInput

## Example Usage

```typescript
import { BenefitLicenseKeysInput } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysInput = {
  createdAt: new Date("2023-02-10T20:15:12.178Z"),
  modifiedAt: new Date("2023-02-16T00:41:41.824Z"),
  id: "<value>",
  description: "petty plus quirkily incidentally gah clone mythology",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 993982,
      timeframe: "year",
    },
    activations: {
      limit: 88820,
      enableUserAdmin: false,
    },
    limitUsage: 426318,
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