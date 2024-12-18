# BenefitLicenseKeys

## Example Usage

```typescript
import { BenefitLicenseKeys } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeys = {
  createdAt: new Date("2023-08-03T23:23:59.966Z"),
  modifiedAt: new Date("2023-08-18T21:58:52.875Z"),
  id: "<value>",
  description:
    "dividend investigate minty louse ferret commonly talkative liberalize",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 243941,
      timeframe: "day",
    },
    activations: {
      limit: 112788,
      enableCustomerAdmin: false,
    },
    limitUsage: 990454,
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