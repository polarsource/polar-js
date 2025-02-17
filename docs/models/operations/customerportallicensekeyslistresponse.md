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
          email: "Nathanial_Oberbrunner71@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-11-27T20:53:52.117Z"),
          modifiedAt: new Date("2025-07-02T12:50:22.191Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Shea10@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Nepal",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://orange-precedent.info/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 391789,
        usage: 162564,
        limitUsage: 41962,
        validations: 620174,
        lastValidatedAt: new Date("2024-05-19T05:54:09.880Z"),
        expiresAt: new Date("2023-11-07T03:08:42.980Z"),
      },
    ],
    pagination: {
      totalCount: 448422,
      maxPage: 94903,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |