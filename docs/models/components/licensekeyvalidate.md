# LicenseKeyValidate

## Example Usage

```typescript
import { LicenseKeyValidate } from "@polar-sh/sdk/models/components/licensekeyvalidate.js";

let value: LicenseKeyValidate = {
  key: "<key>",
  organizationId: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `key`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `organizationId`                                               | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `activationId`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `benefitId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `customerId`                                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `incrementUsage`                                               | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `conditions`                                                   | [components.Conditions](../../models/components/conditions.md) | :heavy_minus_sign:                                             | N/A                                                            |