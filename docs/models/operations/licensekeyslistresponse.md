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
                benefitId: "<value>",
                key: "<key>",
                displayKey: "<value>",
                status: "revoked",
                limitActivations: 50370,
                usage: 577229,
                limitUsage: 699098,
                validations: 237893,
                lastValidatedAt: new Date("2024-12-23T15:59:41.249Z"),
                expiresAt: new Date("2024-10-20T21:33:54.368Z"),
            },
        ],
        pagination: {
            totalCount: 267262,
            maxPage: 613966,
        },
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceLicenseKeyRead](../../models/components/listresourcelicensekeyread.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |