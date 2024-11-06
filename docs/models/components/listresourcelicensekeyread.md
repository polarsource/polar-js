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
        email: "Muhammad63@hotmail.com",
        avatarUrl: "https://happy-go-lucky-courtroom.info/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 84101,
      usage: 242606,
      limitUsage: 119927,
      validations: 554508,
      lastValidatedAt: new Date("2022-07-25T05:51:31.344Z"),
      expiresAt: new Date("2022-12-23T20:38:24.885Z"),
    },
  ],
  pagination: {
    totalCount: 817054,
    maxPage: 571849,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |