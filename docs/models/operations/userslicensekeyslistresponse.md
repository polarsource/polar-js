# UsersLicenseKeysListResponse

## Example Usage

```typescript
import { UsersLicenseKeysListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersLicenseKeysListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        organizationId: "<value>",
        userId: "<value>",
        user: {
          id: "<value>",
          publicName: "<value>",
          email: "Randi29@yahoo.com",
          avatarUrl: "https://decisive-bungalow.net/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 882284,
        usage: 733289,
        limitUsage: 409726,
        validations: 373511,
        lastValidatedAt: new Date("2023-07-20T03:21:03.853Z"),
        expiresAt: new Date("2024-09-01T09:49:58.832Z"),
      },
    ],
    pagination: {
      totalCount: 737279,
      maxPage: 5152,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |