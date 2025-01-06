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
        customerId: "<value>",
        user: {
          id: "<value>",
          email: "Sid.Considine4@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-10-18T07:47:44.539Z"),
          modifiedAt: new Date("2023-05-25T06:22:01.598Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Baylee.Schamberger@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Democratic Republic of the Congo",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://profitable-skyline.org/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 546608,
        usage: 555825,
        limitUsage: 203003,
        validations: 15195,
        lastValidatedAt: new Date("2024-09-04T22:30:35.769Z"),
        expiresAt: new Date("2025-02-03T15:05:56.619Z"),
      },
    ],
    pagination: {
      totalCount: 396022,
      maxPage: 642924,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |