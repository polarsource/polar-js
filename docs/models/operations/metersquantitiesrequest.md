# MetersQuantitiesRequest

## Example Usage

```typescript
import { MetersQuantitiesRequest } from "@polar-sh/sdk/models/operations/metersquantities.js";

let value: MetersQuantitiesRequest = {
  id: "<value>",
  startTimestamp: new Date("2023-01-16T08:08:55.874Z"),
  endTimestamp: new Date("2024-11-24T18:41:39.768Z"),
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
| `externalCustomerId`                                                                          | *operations.QueryParamExternalCustomerIDFilter*                                               | :heavy_minus_sign:                                                                            | Filter by external customer ID.                                                               |