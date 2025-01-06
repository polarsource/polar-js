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
      customerId: "<value>",
      user: {
        id: "<value>",
        email: "Reyna81@yahoo.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2025-11-07T01:09:19.102Z"),
        modifiedAt: new Date("2023-12-18T18:34:43.583Z"),
        id: "<value>",
        metadata: {
          "key": 575206,
        },
        email: "Jamarcus_Murray14@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "French Polynesia",
        },
        taxId: [
          "bg_uic",
        ],
        organizationId: "<value>",
        avatarUrl: "https://lively-hubris.org",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "disabled",
      limitActivations: 133984,
      usage: 811745,
      limitUsage: 510703,
      validations: 323127,
      lastValidatedAt: new Date("2023-04-29T18:48:26.077Z"),
      expiresAt: new Date("2024-10-11T01:57:30.356Z"),
    },
  ],
  pagination: {
    totalCount: 780332,
    maxPage: 885675,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |