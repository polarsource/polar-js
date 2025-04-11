# ListResourceEventName

## Example Usage

```typescript
import { ListResourceEventName } from "@polar-sh/sdk/models/components/listresourceeventname.js";

let value: ListResourceEventName = {
  items: [
    {
      name: "<value>",
      occurrences: 633206,
      firstSeen: new Date("2023-09-07T03:37:51.631Z"),
      lastSeen: new Date("2023-06-19T21:11:21.999Z"),
    },
  ],
  pagination: {
    totalCount: 775048,
    maxPage: 627909,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.EventName](../../models/components/eventname.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |