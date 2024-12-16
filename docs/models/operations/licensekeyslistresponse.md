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
          email: "Lisette.DAmore@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-11-22T04:51:59.437Z"),
          modifiedAt: new Date("2022-10-20T16:09:17.088Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Javon.Pagac@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Monaco",
          },
          taxId: [
            "ec_ruc",
          ],
          organizationId: "<value>",
          avatarUrl: "https://candid-stay.org",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 44753,
        usage: 852874,
        limitUsage: 842074,
        validations: 130669,
        lastValidatedAt: new Date("2024-03-01T04:04:19.932Z"),
        expiresAt: new Date("2022-03-01T00:27:19.326Z"),
      },
    ],
    pagination: {
      totalCount: 811861,
      maxPage: 802027,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |