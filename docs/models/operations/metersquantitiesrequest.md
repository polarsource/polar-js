# MetersQuantitiesRequest

## Example Usage

```typescript
import { MetersQuantitiesRequest } from "@polar-sh/sdk/models/operations/metersquantities.js";

let value: MetersQuantitiesRequest = {
  id: "<value>",
  startTimestamp: new Date("2023-11-26T15:22:56.427Z"),
  endTimestamp: new Date("2025-01-29T20:06:20.456Z"),
  interval: "hour",
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
| `externalCustomerId`                                                                          | *operations.QueryParamExternalCustomerIDFilter*                                               | :heavy_minus_sign:                                                                            | Filter by external customer ID.                                                               |