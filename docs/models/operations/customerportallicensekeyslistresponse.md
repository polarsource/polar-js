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
          email: "Darien_Blanda@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-05-11T20:46:06.747Z"),
          modifiedAt: new Date("2025-10-08T12:39:56.525Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Katharina76@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Romania",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://deafening-ad.net/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 435439,
        usage: 92611,
        limitUsage: 538374,
        validations: 408442,
        lastValidatedAt: new Date("2023-10-27T08:26:38.601Z"),
        expiresAt: new Date("2025-11-07T05:30:16.112Z"),
      },
    ],
    pagination: {
      totalCount: 310417,
      maxPage: 669673,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |