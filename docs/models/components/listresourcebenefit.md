# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
    items: [
        {
            createdAt: new Date("2023-11-17T13:53:16.489Z"),
            modifiedAt: new Date("2022-03-25T19:54:28.931Z"),
            id: "<value>",
            description: "Horizontal neutral support",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
                guildId: "<value>",
                roleId: "<value>",
                guildToken: "<value>",
            },
        },
    ],
    pagination: {
        totalCount: 247399,
        maxPage: 878493,
    },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |