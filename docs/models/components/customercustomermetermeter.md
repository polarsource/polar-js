# CustomerCustomerMeterMeter

## Example Usage

```typescript
import { CustomerCustomerMeterMeter } from "@polar-sh/sdk/models/components/customercustomermetermeter.js";

let value: CustomerCustomerMeterMeter = {
  createdAt: new Date("2025-02-28T01:11:23.278Z"),
  modifiedAt: new Date("2024-01-09T01:22:53.996Z"),
  id: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the meter. Will be shown on customer's invoices and usage.                        |