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
        limitActivations: 987349,
        usage: 759283,
        limitUsage: 364544,
        validations: 501063,
        lastValidatedAt: new Date("2023-02-17T12:32:25.218Z"),
        expiresAt: new Date("2023-02-04T22:38:27.365Z"),
      },
    ],
    pagination: {
      totalCount: 260904,
      maxPage: 495970,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |