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
        email: "Gloria_Emmerich80@hotmail.com",
        avatarUrl: "https://apt-resolve.info",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "disabled",
      limitActivations: 465486,
      usage: 65582,
      limitUsage: 226545,
      validations: 994375,
      lastValidatedAt: new Date("2023-01-02T06:12:27.588Z"),
      expiresAt: new Date("2022-06-25T16:40:06.343Z"),
    },
  ],
  pagination: {
    totalCount: 805831,
    maxPage: 45069,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |