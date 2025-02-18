# CustomerPortalLicenseKeysListResponse

## Example Usage

```typescript
import { CustomerPortalLicenseKeysListResponse } from "@polar-sh/sdk/models/operations/customerportallicensekeyslist.js";

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
          email: "Ruth_Gutkowski@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2025-12-23T07:19:02.739Z"),
          modifiedAt: new Date("2024-08-31T18:10:45.518Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Evan_Hintz80@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "New Caledonia",
          },
          taxId: [
            "my_frp",
          ],
          organizationId: "<value>",
          avatarUrl: "https://steep-sweatshop.com",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 140078,
        usage: 216737,
        limitUsage: 49709,
        validations: 40910,
        lastValidatedAt: new Date("2023-02-22T22:51:12.751Z"),
        expiresAt: new Date("2024-03-05T07:48:44.063Z"),
      },
    ],
    pagination: {
      totalCount: 73066,
      maxPage: 820439,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |