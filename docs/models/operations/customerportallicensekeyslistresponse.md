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
          email: "Amalia_Schulist93@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-06-02T04:00:17.091Z"),
          modifiedAt: new Date("2023-02-02T22:34:01.781Z"),
          id: "<value>",
          metadata: {
            "key": 593545,
          },
          email: "Hailie_Corkery31@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Montserrat",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://fruitful-sushi.org/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 193278,
        usage: 669846,
        limitUsage: 492205,
        validations: 263168,
        lastValidatedAt: new Date("2024-12-06T11:49:29.517Z"),
        expiresAt: new Date("2024-10-30T13:59:39.678Z"),
      },
    ],
    pagination: {
      totalCount: 144838,
      maxPage: 760972,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |