# LicenseKeysListResponse

## Example Usage

```typescript
import { LicenseKeysListResponse } from "@polar-sh/sdk/models/operations/licensekeyslist.js";

let value: LicenseKeysListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2023-01-21T20:02:35.336Z"),
        modifiedAt: new Date("2024-03-25T17:22:02.193Z"),
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-02-12T20:41:40.268Z"),
          modifiedAt: new Date("2025-06-27T21:58:31.319Z"),
          metadata: {
            "key": 465.04,
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
          deletedAt: new Date("2023-05-03T23:15:31.482Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 104327,
        usage: 110622,
        limitUsage: 234721,
        validations: 330749,
        lastValidatedAt: new Date("2024-11-02T14:28:35.053Z"),
        expiresAt: new Date("2024-08-17T10:10:30.676Z"),
      },
    ],
    pagination: {
      totalCount: 265379,
      maxPage: 824394,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |