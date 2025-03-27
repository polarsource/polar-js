# ListResourceMeter

## Example Usage

```typescript
import { ListResourceMeter } from "@polar-sh/sdk/models/components/listresourcemeter.js";

let value: ListResourceMeter = {
  items: [],
  pagination: {
    totalCount: 306241,
    maxPage: 608710,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Meter](../../models/components/meter.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |