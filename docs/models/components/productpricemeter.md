# ProductPriceMeter

A meter associated to a metered price.

## Example Usage

```typescript
import { ProductPriceMeter } from "@polar-sh/sdk/models/components/productpricemeter.js";

let value: ProductPriceMeter = {
  id: "<value>",
  name: "<value>",
  unit: "custom",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The ID of the object.                                        |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The name of the meter.                                       |
| `unit`                                                       | [components.MeterUnit](../../models/components/meterunit.md) | :heavy_check_mark:                                           | N/A                                                          |
| `customLabel`                                                | *string*                                                     | :heavy_minus_sign:                                           | The label for the custom unit.                               |
| `customMultiplier`                                           | *number*                                                     | :heavy_minus_sign:                                           | The multiplier to convert from base unit to display scale.   |