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
      status: "disabled",
      limitActivations: 689296,
      usage: 74530,
      limitUsage: 298657,
      validations: 6573,
      lastValidatedAt: new Date("2022-03-08T07:56:41.750Z"),
      expiresAt: new Date("2022-02-11T12:35:43.150Z"),
    },
  ],
  pagination: {
    totalCount: 198934,
    maxPage: 56283,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |