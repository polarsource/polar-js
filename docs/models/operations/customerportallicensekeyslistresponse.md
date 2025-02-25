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
          email: "Jesse_Reichert80@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-08-13T02:16:20.350Z"),
          modifiedAt: new Date("2023-11-05T17:50:21.798Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Gerson.Hermiston@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Aland Islands",
          },
          taxId: [
            "ca_qst",
          ],
          organizationId: "<value>",
          avatarUrl: "https://massive-suv.org/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 231294,
        usage: 334978,
        limitUsage: 339689,
        validations: 721738,
        lastValidatedAt: new Date("2023-06-03T13:42:39.169Z"),
        expiresAt: new Date("2025-09-09T01:47:54.004Z"),
      },
    ],
    pagination: {
      totalCount: 155031,
      maxPage: 677191,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |