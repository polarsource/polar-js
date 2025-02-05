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
          email: "Kayley_Armstrong@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-12-05T15:28:55.131Z"),
          modifiedAt: new Date("2023-12-23T04:40:26.461Z"),
          id: "<value>",
          metadata: {
            "key": 379268,
          },
          email: "Concepcion.Gibson-Kulas@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Guinea",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://strident-icebreaker.biz/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 157908,
        usage: 949028,
        limitUsage: 596695,
        validations: 262422,
        lastValidatedAt: new Date("2023-10-14T07:54:56.503Z"),
        expiresAt: new Date("2025-12-24T20:20:59.879Z"),
      },
    ],
    pagination: {
      totalCount: 644684,
      maxPage: 163249,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |