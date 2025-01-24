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
          email: "Irwin5@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-04-26T09:00:28.568Z"),
          modifiedAt: new Date("2025-06-23T20:03:22.580Z"),
          id: "<value>",
          metadata: {
            "key": 312505,
          },
          email: "Shanelle55@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Nauru",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://jam-packed-bell.net",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 385407,
        usage: 552024,
        limitUsage: 326766,
        validations: 238315,
        lastValidatedAt: new Date("2025-09-21T19:24:43.932Z"),
        expiresAt: new Date("2025-05-31T19:26:40.800Z"),
      },
    ],
    pagination: {
      totalCount: 332956,
      maxPage: 290320,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |