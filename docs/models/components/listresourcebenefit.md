# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components/listresourcebenefit.js";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2023-04-13T06:46:54.478Z"),
      modifiedAt: new Date("2023-06-05T10:08:11.440Z"),
      id: "<value>",
      description: "murky amid flickering old-fashioned",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        guildId: "<id>",
        roleId: "<id>",
        guildToken: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 458895,
    maxPage: 242843,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |