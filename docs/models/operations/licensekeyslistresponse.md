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
          email: "Alyson.Miller@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-04-24T00:28:38.480Z"),
          modifiedAt: new Date("2024-12-16T12:19:59.072Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Anjali.Fisher@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Slovenia",
          },
          taxId: [
            "rs_pib",
          ],
          organizationId: "<value>",
          avatarUrl: "https://nimble-creator.com",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 697655,
        usage: 396022,
        limitUsage: 642924,
        validations: 324995,
        lastValidatedAt: new Date("2024-01-22T18:56:11.037Z"),
        expiresAt: new Date("2024-02-20T16:15:54.012Z"),
      },
    ],
    pagination: {
      totalCount: 846367,
      maxPage: 203551,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |