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
      status: "granted",
      limitActivations: 14273,
      usage: 877613,
      limitUsage: 78111,
      validations: 292824,
      lastValidatedAt: new Date("2023-12-29T19:02:58.240Z"),
      expiresAt: new Date("2024-07-14T13:50:40.327Z"),
    },
  ],
  pagination: {
    totalCount: 321263,
    maxPage: 652069,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |