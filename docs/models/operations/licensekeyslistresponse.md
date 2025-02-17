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
          email: "Alisa.Kiehn72@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-01-31T23:06:11.787Z"),
          modifiedAt: new Date("2023-02-06T14:24:23.795Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Kade.Durgan58@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Comoros",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://brilliant-tabletop.org",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 967395,
        usage: 340928,
        limitUsage: 888997,
        validations: 72274,
        lastValidatedAt: new Date("2023-06-07T13:45:15.402Z"),
        expiresAt: new Date("2024-04-28T18:28:37.139Z"),
      },
    ],
    pagination: {
      totalCount: 47672,
      maxPage: 269513,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |