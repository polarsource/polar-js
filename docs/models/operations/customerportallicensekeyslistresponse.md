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
          email: "Marie.Kris@hotmail.com",
          publicName: "<value>",
        },
        customer: {
          createdAt: new Date("2024-09-28T06:54:26.061Z"),
          modifiedAt: new Date("2024-09-23T23:11:43.932Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Hermina.Gerhold@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Nigeria",
          },
          taxId: [
            "cr_tin",
          ],
          organizationId: "<value>",
          avatarUrl: "https://icy-creature.biz/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 128394,
        usage: 109969,
        limitUsage: 505490,
        validations: 47637,
        lastValidatedAt: new Date("2023-03-18T02:39:34.219Z"),
        expiresAt: new Date("2024-03-31T13:21:21.860Z"),
      },
    ],
    pagination: {
      totalCount: 974257,
      maxPage: 499877,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |