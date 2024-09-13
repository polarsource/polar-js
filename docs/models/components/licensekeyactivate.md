# LicenseKeyActivate

## Example Usage

```typescript
import { LicenseKeyActivate } from "@polar-sh/sdk/models/components";

let value: LicenseKeyActivate = {
  key: "<key>",
  organizationId: "<value>",
  label: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `label`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `conditions`                                                                                       | [components.LicenseKeyActivateConditions](../../models/components/licensekeyactivateconditions.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `meta`                                                                                             | [components.LicenseKeyActivateMeta](../../models/components/licensekeyactivatemeta.md)             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |