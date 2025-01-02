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
          email: "Mary.Gerhold-Hessel46@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-09-04T13:28:38.697Z"),
          modifiedAt: new Date("2025-06-30T11:25:29.230Z"),
          id: "<value>",
          metadata: {
            "key": 280175,
          },
          email: "Katheryn_Heidenreich8@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Pitcairn Islands",
          },
          taxId: [
            "id_npwp",
          ],
          organizationId: "<value>",
          avatarUrl: "https://oval-retrospectivity.org",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 310549,
        usage: 118971,
        limitUsage: 39770,
        validations: 390548,
        lastValidatedAt: new Date("2023-01-09T04:02:40.519Z"),
        expiresAt: new Date("2025-03-19T17:51:10.770Z"),
      },
    ],
    pagination: {
      totalCount: 451768,
      maxPage: 732230,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |