# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
    items: [
        {
            createdAt: new Date("2023-04-21T20:01:42.100Z"),
            modifiedAt: new Date("2022-03-07T16:46:29.387Z"),
            id: "<value>",
            description: "Open-architected actuating info-mediaries",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
                paidArticles: false,
            },
        },
    ],
    pagination: {
        totalCount: 907733,
        maxPage: 184362,
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |