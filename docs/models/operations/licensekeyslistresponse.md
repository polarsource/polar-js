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
          email: "Preston_Hane15@hotmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2022-03-15T19:09:10.567Z"),
          modifiedAt: new Date("2022-06-22T14:36:35.854Z"),
          id: "<value>",
          metadata: {
            "key": 629747,
          },
          email: "Destany_Kris67@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saint Pierre and Miquelon",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://querulous-fencing.name",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 847045,
        usage: 952417,
        limitUsage: 901839,
        validations: 44753,
        lastValidatedAt: new Date("2024-07-23T17:59:18.862Z"),
        expiresAt: new Date("2024-07-11T21:54:59.517Z"),
      },
    ],
    pagination: {
      totalCount: 130669,
      maxPage: 720958,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |