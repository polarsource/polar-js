# MetersQuantitiesRequest

## Example Usage

```typescript
import { MetersQuantitiesRequest } from "@polar-sh/sdk/models/operations/metersquantities.js";

let value: MetersQuantitiesRequest = {
  id: "<value>",
  startTimestamp: new Date("2024-01-12T17:46:58.096Z"),
  endTimestamp: new Date("2023-11-08T17:39:47.068Z"),
  interval: "week",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The meter ID.                                                                                 |
| `startTimestamp`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start timestamp.                                                                              |
| `endTimestamp`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End timestamp.                                                                                |
| `interval`                                                                                    | [components.TimeInterval](../../models/components/timeinterval.md)                            | :heavy_check_mark:                                                                            | Interval between two timestamps.                                                              |
| `customerId`                                                                                  | *operations.MetersQuantitiesQueryParamCustomerIDFilter*                                       | :heavy_minus_sign:                                                                            | Filter by customer ID.                                                                        |
| `exernalCustomerId`                                                                           | *operations.QueryParamExternalCustomerIDFilter*                                               | :heavy_minus_sign:                                                                            | Filter by external customer ID.                                                               |