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
          email: "Nels_Wilkinson43@hotmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-08-31T06:02:44.249Z"),
          modifiedAt: new Date("2025-10-13T21:55:14.485Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Elenora_McLaughlin@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Egypt",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://scented-custody.net",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 890658,
        usage: 756858,
        limitUsage: 97023,
        validations: 556011,
        lastValidatedAt: new Date("2023-06-28T15:39:48.364Z"),
        expiresAt: new Date("2024-09-12T04:53:32.618Z"),
      },
    ],
    pagination: {
      totalCount: 571318,
      maxPage: 293286,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |