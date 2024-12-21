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
          email: "Hardy.Osinski@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-06-24T03:29:30.577Z"),
          modifiedAt: new Date("2023-09-22T04:25:18.763Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Frances.Schoen@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saint Barthelemy",
          },
          taxId: [
            "rs_pib",
          ],
          organizationId: "<value>",
          avatarUrl: "https://usable-hepatitis.net",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 928743,
        usage: 997164,
        limitUsage: 734579,
        validations: 334548,
        lastValidatedAt: new Date("2024-11-21T10:38:18.727Z"),
        expiresAt: new Date("2022-02-14T21:08:31.136Z"),
      },
    ],
    pagination: {
      totalCount: 410001,
      maxPage: 510035,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |