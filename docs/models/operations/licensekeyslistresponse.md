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
          email: "Akeem.Cruickshank@yahoo.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-10-06T19:29:26.565Z"),
          modifiedAt: new Date("2025-07-13T17:03:39.749Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          externalId: "<id>",
          email: "Chaz_Miller@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Denmark",
          },
          taxId: [
            "ua_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://slow-seafood.name",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 523248,
        usage: 928278,
        limitUsage: 978285,
        validations: 841863,
        lastValidatedAt: new Date("2024-01-27T07:23:10.742Z"),
        expiresAt: new Date("2024-08-21T19:43:52.805Z"),
      },
    ],
    pagination: {
      totalCount: 69221,
      maxPage: 237769,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |