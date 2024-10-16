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
      user: {
        id: "<value>",
        publicName: "<value>",
        email: "Doug_Dooley@yahoo.com",
        avatarUrl: "https://present-dress.org/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 607407,
      usage: 215813,
      limitUsage: 861477,
      validations: 804333,
      lastValidatedAt: new Date("2022-09-27T05:11:28.515Z"),
      expiresAt: new Date("2024-09-25T12:13:11.837Z"),
    },
  ],
  pagination: {
    totalCount: 40155,
    maxPage: 752573,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |