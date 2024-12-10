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
        email: "Matilda.Cole84@gmail.com",
        avatarUrl: "https://illustrious-other.name/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "disabled",
      limitActivations: 681972,
      usage: 561972,
      limitUsage: 711598,
      validations: 663724,
      lastValidatedAt: new Date("2024-04-21T03:44:58.953Z"),
      expiresAt: new Date("2023-09-20T09:06:06.239Z"),
    },
  ],
  pagination: {
    totalCount: 807291,
    maxPage: 900058,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |