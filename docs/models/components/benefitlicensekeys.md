# BenefitLicenseKeys

## Example Usage

```typescript
import { BenefitLicenseKeys } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeys = {
  createdAt: new Date("2023-02-17T11:30:44.964Z"),
  modifiedAt: new Date("2023-06-05T18:26:07.487Z"),
  id: "<value>",
  description:
    "incidentally great chromakey gadzooks briefly between than yahoo able",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 813007,
      timeframe: "day",
    },
    activations: {
      limit: 19398,
      enableUserAdmin: false,
    },
    limitUsage: 598294,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation timestamp of the object.                                                                  |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Last modification timestamp of the object.                                                         |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the benefit.                                                                             |
| `type`                                                                                             | [components.BenefitLicenseKeysType](../../models/components/benefitlicensekeystype.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the benefit.                                                                    |
| `selectable`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is selectable when creating a product.                                         |
| `deletable`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is deletable.                                                                  |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the organization owning the benefit.                                                     |
| `properties`                                                                                       | [components.BenefitLicenseKeysProperties](../../models/components/benefitlicensekeysproperties.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |