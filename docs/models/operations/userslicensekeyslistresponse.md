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
          email: "Xander_Hickle@hotmail.com",
          avatarUrl: "https://major-pleasure.biz/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 117380,
        usage: 159845,
        limitUsage: 46806,
        validations: 970732,
        lastValidatedAt: new Date("2022-01-05T05:32:33.670Z"),
        expiresAt: new Date("2022-07-15T17:22:02.927Z"),
      },
    ],
    pagination: {
      totalCount: 612867,
      maxPage: 81369,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |