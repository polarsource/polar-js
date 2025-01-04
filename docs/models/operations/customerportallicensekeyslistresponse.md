# CustomerPortalLicenseKeysListResponse

## Example Usage

```typescript
import { CustomerPortalLicenseKeysListResponse } from "@polar-sh/sdk/models/operations";

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
          email: "Liliane.Grady@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-11-08T04:09:28.942Z"),
          modifiedAt: new Date("2025-10-17T12:43:49.669Z"),
          id: "<value>",
          metadata: {
            "key": 245551,
          },
          email: "Cristobal.Waters@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Somalia",
          },
          taxId: [
            "do_rcn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://uncommon-mythology.biz/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 554974,
        usage: 701252,
        limitUsage: 621095,
        validations: 16542,
        lastValidatedAt: new Date("2025-09-02T19:33:20.134Z"),
        expiresAt: new Date("2024-04-21T21:39:26.221Z"),
      },
    ],
    pagination: {
      totalCount: 72205,
      maxPage: 711223,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |