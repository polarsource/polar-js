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
          email: "Nina.Ratke65@gmail.com",
          publicName: "<value>",
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-04-17T15:07:16.114Z"),
          modifiedAt: new Date("2023-06-30T02:48:33.424Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 843715,
        usage: 56551,
        limitUsage: 207724,
        validations: 179121,
        lastValidatedAt: new Date("2023-02-17T14:50:10.426Z"),
        expiresAt: new Date("2024-10-18T02:22:27.474Z"),
      },
    ],
    pagination: {
      totalCount: 976570,
      maxPage: 892389,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |