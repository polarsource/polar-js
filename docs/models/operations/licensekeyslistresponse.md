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
          email: "Mabelle_Konopelski2@hotmail.com",
          avatarUrl: "https://slushy-flat.name/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 385828,
        usage: 531568,
        limitUsage: 645139,
        validations: 940951,
        lastValidatedAt: new Date("2023-09-23T21:28:43.149Z"),
        expiresAt: new Date("2023-11-05T08:19:22.907Z"),
      },
    ],
    pagination: {
      totalCount: 67855,
      maxPage: 952216,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |