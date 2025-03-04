# CustomerPortalLicenseKeysListResponse

## Example Usage

```typescript
import { CustomerPortalLicenseKeysListResponse } from "@polar-sh/sdk/models/operations/customerportallicensekeyslist.js";

let value: CustomerPortalLicenseKeysListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        organizationId: "<value>",
        userId: "<value>",
        customerId: "<value>",
        user: {
          id: "<value>",
          email: "Andreanne_Lowe60@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-08-15T11:03:33.023Z"),
          modifiedAt: new Date("2025-04-14T11:51:34.071Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          externalId: "<id>",
          email: "Marjorie57@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "South Sudan",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://prestigious-defendant.biz",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 96967,
        usage: 285927,
        limitUsage: 666088,
        validations: 70891,
        lastValidatedAt: new Date("2025-12-06T13:45:21.749Z"),
        expiresAt: new Date("2025-03-16T12:30:01.164Z"),
      },
    ],
    pagination: {
      totalCount: 598744,
      maxPage: 542484,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |