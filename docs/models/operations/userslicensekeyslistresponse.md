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
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 714242,
        usage: 998848,
        limitUsage: 149448,
        validations: 868126,
        lastValidatedAt: new Date("2022-06-28T02:12:50.953Z"),
        expiresAt: new Date("2023-11-06T15:40:43.604Z"),
      },
    ],
    pagination: {
      totalCount: 123820,
      maxPage: 848009,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |