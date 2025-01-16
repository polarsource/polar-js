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
          email: "Ricardo.Welch77@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-04-28T14:02:03.362Z"),
          modifiedAt: new Date("2025-06-04T17:00:12.684Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Telly.Abshire72@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Moldova",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://silent-alliance.net/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 83514,
        usage: 279503,
        limitUsage: 923960,
        validations: 463504,
        lastValidatedAt: new Date("2024-10-01T05:59:20.109Z"),
        expiresAt: new Date("2025-04-28T02:56:38.727Z"),
      },
    ],
    pagination: {
      totalCount: 855312,
      maxPage: 102996,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |