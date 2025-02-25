# LicenseKeysListResponse

## Example Usage

```typescript
import { LicenseKeysListResponse } from "@polar-sh/sdk/models/operations/licensekeyslist.js";

let value: LicenseKeysListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        organizationId: "<value>",
        userId: "<value>",
        customerId: "<value>",
        user: {
          id: "<value>",
          email: "Reva_Crooks63@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-09-20T18:22:04.544Z"),
          modifiedAt: new Date("2024-10-14T20:33:57.787Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Manley_Wolff@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "New Zealand",
          },
          taxId: [
            "br_cpf",
          ],
          organizationId: "<value>",
          avatarUrl: "https://best-range.name",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 943654,
        usage: 449044,
        limitUsage: 319517,
        validations: 380210,
        lastValidatedAt: new Date("2025-09-20T04:43:11.261Z"),
        expiresAt: new Date("2024-09-23T12:16:19.878Z"),
      },
    ],
    pagination: {
      totalCount: 981014,
      maxPage: 955015,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |