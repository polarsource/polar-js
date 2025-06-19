# MetersQuantitiesRequest

## Example Usage

```typescript
import { MetersQuantitiesRequest } from "@polar-sh/sdk/models/operations/metersquantities.js";

let value: MetersQuantitiesRequest = {
  id: "<value>",
  startTimestamp: new Date("2024-03-29T12:29:41.786Z"),
  endTimestamp: new Date("2023-07-21T00:46:29.841Z"),
  interval: "year",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The meter ID.                                                                                    |
| `startTimestamp`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Start timestamp.                                                                                 |
| `endTimestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | End timestamp.                                                                                   |
| `interval`                                                                                       | [components.TimeInterval](../../models/components/timeinterval.md)                               | :heavy_check_mark:                                                                               | Interval between two timestamps.                                                                 |
| `customerId`                                                                                     | *operations.MetersQuantitiesQueryParamCustomerIDFilter*                                          | :heavy_minus_sign:                                                                               | Filter by customer ID.                                                                           |
| `externalCustomerId`                                                                             | *operations.MetersQuantitiesQueryParamExternalCustomerIDFilter*                                  | :heavy_minus_sign:                                                                               | Filter by external customer ID.                                                                  |
| `metadata`                                                                                       | Record<string, *components.MetadataQuery*>                                                       | :heavy_minus_sign:                                                                               | Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`. |