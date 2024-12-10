# LicenseKeysListResponse

## Example Usage

```typescript
import { LicenseKeysListResponse } from "@polar-sh/sdk/models/operations";

let value: LicenseKeysListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        organizationId: "<value>",
        userId: "<value>",
        user: {
          id: "<value>",
          publicName: "<value>",
          email: "Loyce.Schmitt-Langosh64@hotmail.com",
          avatarUrl: "https://magnificent-kick.biz/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 553286,
        usage: 451749,
        limitUsage: 63815,
        validations: 517603,
        lastValidatedAt: new Date("2022-05-07T00:58:07.143Z"),
        expiresAt: new Date("2024-12-23T00:57:29.490Z"),
      },
    ],
    pagination: {
      totalCount: 740060,
      maxPage: 363835,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |