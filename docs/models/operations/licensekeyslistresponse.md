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
          email: "Elza_Gutkowski84@yahoo.com",
          avatarUrl: "https://international-thorn.biz",
        },
        benefitId: "<value>",
        key: "<key>",
        displayKey: "<value>",
        status: "disabled",
        limitActivations: 970376,
        usage: 175275,
        limitUsage: 201966,
        validations: 693724,
        lastValidatedAt: new Date("2024-05-03T22:51:53.391Z"),
        expiresAt: new Date("2023-06-22T15:24:08.414Z"),
      },
    ],
    pagination: {
      totalCount: 609687,
      maxPage: 212682,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |