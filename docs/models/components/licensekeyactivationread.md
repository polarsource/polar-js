# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2022-09-29T20:36:38.362Z"),
  modifiedAt: new Date("2022-12-30T09:36:43.666Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    user: {
      id: "<value>",
      publicName: "<value>",
      email: "Grayce84@yahoo.com",
      avatarUrl: "https://pleasant-hyphenation.com",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "granted",
    limitActivations: 63697,
    usage: 437785,
    limitUsage: 849486,
    validations: 596802,
    lastValidatedAt: new Date("2024-01-11T09:12:34.074Z"),
    expiresAt: new Date("2022-07-26T01:21:42.082Z"),
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `licenseKeyId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `label`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `meta`                                                                                             | [components.LicenseKeyActivationReadMeta](../../models/components/licensekeyactivationreadmeta.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `licenseKey`                                                                                       | [components.LicenseKeyRead](../../models/components/licensekeyread.md)                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |