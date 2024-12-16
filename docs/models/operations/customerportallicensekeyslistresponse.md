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
          email: "Kraig.Tillman64@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-04-09T06:38:23.918Z"),
          modifiedAt: new Date("2022-07-21T21:02:29.433Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Melody_Lynch@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Egypt",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://enchanting-octave.biz/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 898720,
        usage: 435822,
        limitUsage: 942928,
        validations: 414720,
        lastValidatedAt: new Date("2022-01-12T14:30:26.716Z"),
        expiresAt: new Date("2022-08-07T08:13:47.825Z"),
      },
    ],
    pagination: {
      totalCount: 835351,
      maxPage: 360186,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |