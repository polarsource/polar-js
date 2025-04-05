# LicenseKeysListResponse

## Example Usage

```typescript
import { LicenseKeysListResponse } from "@polar-sh/sdk/models/operations/licensekeyslist.js";

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
          email: "Hallie4@gmail.com",
          publicName: "<value>",
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-05-11T05:21:37.410Z"),
          modifiedAt: new Date("2023-05-03T23:15:31.482Z"),
          metadata: {
            "key": false,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2023-09-15T06:06:53.902Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 612777,
        usage: 542358,
        limitUsage: 265379,
        validations: 824394,
        lastValidatedAt: new Date("2025-07-18T21:31:48.311Z"),
        expiresAt: new Date("2025-09-05T23:03:41.286Z"),
      },
    ],
    pagination: {
      totalCount: 865788,
      maxPage: 385655,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |