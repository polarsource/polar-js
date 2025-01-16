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
          email: "Kristy30@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2025-07-21T15:03:42.701Z"),
          modifiedAt: new Date("2024-07-02T20:27:58.335Z"),
          id: "<value>",
          metadata: {
            "key": 609764,
          },
          email: "Carmine69@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "China",
          },
          taxId: [
            "ru_inn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://unripe-mallard.net/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 230328,
        usage: 343271,
        limitUsage: 806742,
        validations: 371215,
        lastValidatedAt: new Date("2024-12-17T17:23:25.138Z"),
        expiresAt: new Date("2025-06-16T09:26:41.863Z"),
      },
    ],
    pagination: {
      totalCount: 774810,
      maxPage: 604713,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |