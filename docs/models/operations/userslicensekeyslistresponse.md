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
          email: "Miguel_Metz@gmail.com",
          avatarUrl: "https://greedy-gallery.info/",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "revoked",
        limitActivations: 143330,
        usage: 881882,
        limitUsage: 625876,
        validations: 374436,
        lastValidatedAt: new Date("2024-12-12T12:06:31.554Z"),
        expiresAt: new Date("2024-08-14T06:57:51.565Z"),
      },
    ],
    pagination: {
      totalCount: 606816,
      maxPage: 371749,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |