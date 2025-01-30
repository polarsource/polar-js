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
          email: "Bradford.Krajcik@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-10-18T02:55:54.180Z"),
          modifiedAt: new Date("2025-08-15T11:19:32.631Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Tevin_Simonis94@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "San Marino",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://striking-quit.name/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 395404,
        usage: 5456,
        limitUsage: 71654,
        validations: 724019,
        lastValidatedAt: new Date("2023-10-12T06:28:55.012Z"),
        expiresAt: new Date("2024-10-03T07:59:59.919Z"),
      },
    ],
    pagination: {
      totalCount: 439622,
      maxPage: 232137,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |