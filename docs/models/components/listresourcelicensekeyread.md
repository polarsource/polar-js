# ListResourceLicenseKeyRead

## Example Usage

```typescript
import { ListResourceLicenseKeyRead } from "@polar-sh/sdk/models/components";

let value: ListResourceLicenseKeyRead = {
  items: [
    {
      id: "<value>",
      organizationId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 747474,
      usage: 161208,
      limitUsage: 422006,
      validations: 643614,
      lastValidatedAt: new Date("2023-05-09T13:00:30.149Z"),
      expiresAt: new Date("2022-02-02T13:48:44.392Z"),
    },
  ],
  pagination: {
    totalCount: 316842,
    maxPage: 676068,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |