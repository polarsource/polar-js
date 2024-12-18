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
          email: "Alexandrine.Murray60@hotmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-03-23T21:42:53.607Z"),
          modifiedAt: new Date("2023-03-01T07:38:44.572Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Jasper64@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Aruba",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://new-hawk.com",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 290128,
        usage: 364789,
        limitUsage: 455531,
        validations: 544927,
        lastValidatedAt: new Date("2022-09-22T01:42:46.171Z"),
        expiresAt: new Date("2023-07-01T14:06:00.507Z"),
      },
    ],
    pagination: {
      totalCount: 925381,
      maxPage: 201704,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |