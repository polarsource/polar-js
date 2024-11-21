# BenefitLicenseKeysCreate

## Example Usage

```typescript
import { BenefitLicenseKeysCreate } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysCreate = {
  description: "healthily per whoa deeply um so gradient",
  properties: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.BenefitLicenseKeysCreateType](../../models/components/benefitlicensekeyscreatetype.md)             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The description of the benefit. Will be displayed on products having this benefit.                             |
| `organizationId`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The ID of the organization owning the benefit. **Required unless you use an organization token.**              |
| `properties`                                                                                                   | [components.BenefitLicenseKeysCreateProperties](../../models/components/benefitlicensekeyscreateproperties.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |