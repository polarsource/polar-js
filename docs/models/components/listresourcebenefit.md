# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components/listresourcebenefit.js";

let value: ListResourceBenefit = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2025-11-08T01:17:28.121Z"),
      modifiedAt: null,
      type: "discord",
      description: "hyena sarong under",
      selectable: true,
      deletable: true,
      organizationId: "<value>",
      metadata: {},
      properties: {
        guildId: "<id>",
        roleId: "<id>",
        kickMember: false,
        guildToken: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |