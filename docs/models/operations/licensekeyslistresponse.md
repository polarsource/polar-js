# LicenseKeysListResponse

## Example Usage

```typescript
import { LicenseKeysListResponse } from "@polar-sh/sdk/models/operations";

let value: LicenseKeysListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        organizationId: "<value>",
        userId: "<value>",
        user: {
          id: "<value>",
          publicName: "<value>",
          email: "Rey54@hotmail.com",
          avatarUrl: "https://pointless-t-shirt.net",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "granted",
        limitActivations: 500828,
        usage: 286486,
        limitUsage: 285175,
        validations: 355927,
        lastValidatedAt: new Date("2022-12-11T22:43:51.005Z"),
        expiresAt: new Date("2023-09-27T03:45:24.901Z"),
      },
    ],
    pagination: {
      totalCount: 683602,
      maxPage: 268749,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |