# LicenseKeysListResponse

## Example Usage

```typescript
import { LicenseKeysListResponse } from "@polar-sh/sdk/models/operations/licensekeyslist.js";

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
          email: "Dasia.Barrows55@hotmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-07-16T03:20:51.058Z"),
          modifiedAt: new Date("2025-11-03T06:22:57.576Z"),
          id: "<value>",
          metadata: {
            "key": 43285,
          },
          email: "Christ_Haag-Mohr90@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Gambia",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://illiterate-spear.name",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 442506,
        usage: 350135,
        limitUsage: 736498,
        validations: 183329,
        lastValidatedAt: new Date("2024-12-03T04:34:28.027Z"),
        expiresAt: new Date("2023-03-07T06:28:40.969Z"),
      },
    ],
    pagination: {
      totalCount: 725573,
      maxPage: 774186,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |