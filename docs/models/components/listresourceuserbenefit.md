# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
    items: [
        {
            createdAt: new Date("2022-12-08T21:24:04.186Z"),
            modifiedAt: new Date("2023-08-31T10:47:34.939Z"),
            id: "<value>",
            description: "Integrated composite concept",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
                prefix: "<value>",
                expires: {
                    ttl: 222443,
                    timeframe: "year",
                },
                activations: {
                    limit: 218749,
                    enableUserAdmin: false,
                },
                limitUsage: 944373,
            },
            grants: [
                {
                    createdAt: new Date("2023-09-17T06:03:43.855Z"),
                    modifiedAt: new Date("2024-03-21T13:08:38.951Z"),
                    id: "<value>",
                    isGranted: false,
                    isRevoked: false,
                    properties: {
                        licenseKeyId: "<value>",
                        displayKey: "<value>",
                    },
                    subscriptionId: "<value>",
                    orderId: "<value>",
                    userId: "<value>",
                    benefitId: "<value>",
                },
            ],
        },
    ],
    pagination: {
        totalCount: 452109,
        maxPage: 490459,
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |