# CustomerPortalLicenseKeysListResponse

## Example Usage

```typescript
import { CustomerPortalLicenseKeysListResponse } from "@polar-sh/sdk/models/operations";

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
          email: "Luna67@gmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2023-01-02T17:03:51.334Z"),
          modifiedAt: new Date("2022-03-11T18:33:07.848Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Rico_Swift@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Dominica",
          },
          taxId: [
            "th_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://shoddy-fisherman.org/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 580303,
        usage: 130247,
        limitUsage: 883330,
        validations: 136012,
        lastValidatedAt: new Date("2023-12-12T02:42:16.684Z"),
        expiresAt: new Date("2022-09-05T05:28:52.147Z"),
      },
    ],
    pagination: {
      totalCount: 756640,
      maxPage: 184194,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |