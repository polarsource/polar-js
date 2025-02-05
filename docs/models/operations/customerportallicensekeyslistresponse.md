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
          email: "Reymundo_Heathcote@hotmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2025-06-16T09:26:41.863Z"),
          modifiedAt: new Date("2025-04-29T04:35:05.789Z"),
          id: "<value>",
          metadata: {
            "key": 924347,
          },
          email: "Hilda_Ruecker@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Venezuela",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://aged-newsprint.com/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 884184,
        usage: 901209,
        limitUsage: 648245,
        validations: 31026,
        lastValidatedAt: new Date("2024-09-07T18:44:00.744Z"),
        expiresAt: new Date("2023-03-26T23:06:39.615Z"),
      },
    ],
    pagination: {
      totalCount: 82141,
      maxPage: 55687,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |