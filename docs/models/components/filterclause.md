# FilterClause

## Example Usage

```typescript
import { FilterClause } from "@polar-sh/sdk/models/components/filterclause.js";

let value: FilterClause = {
  property: "<value>",
  operator: "ne",
  value: 667534,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `property`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `operator`                                                             | [components.FilterOperator](../../models/components/filteroperator.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `value`                                                                | *components.Value*                                                     | :heavy_check_mark:                                                     | N/A                                                                    |