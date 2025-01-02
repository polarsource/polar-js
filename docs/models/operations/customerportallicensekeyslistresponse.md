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
          email: "Philip_Ortiz14@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2025-04-07T19:39:30.908Z"),
          modifiedAt: new Date("2023-09-20T15:54:20.278Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Werner41@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Andorra",
          },
          taxId: [
            "jp_trn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://waterlogged-hepatitis.com",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 473214,
        usage: 575300,
        limitUsage: 351869,
        validations: 488006,
        lastValidatedAt: new Date("2023-05-19T22:17:21.271Z"),
        expiresAt: new Date("2023-06-27T10:23:07.802Z"),
      },
    ],
    pagination: {
      totalCount: 903528,
      maxPage: 177033,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |