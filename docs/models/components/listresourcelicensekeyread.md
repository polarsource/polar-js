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
            limitActivations: 277596,
            usage: 539224,
            limitUsage: 128860,
            validations: 325685,
            lastValidatedAt: new Date("2023-03-07T08:56:28.033Z"),
            expiresAt: new Date("2022-06-11T03:03:12.224Z"),
        },
    ],
    pagination: {
        totalCount: 956406,
        maxPage: 159870,
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |