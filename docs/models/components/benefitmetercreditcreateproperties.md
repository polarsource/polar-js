# BenefitMeterCreditCreateProperties

Properties for creating a benefit of type `meter_unit`.

## Example Usage

```typescript
import { BenefitMeterCreditCreateProperties } from "@polar-sh/sdk/models/components/benefitmetercreditcreateproperties.js";

let value: BenefitMeterCreditCreateProperties = {
  units: 311092,
  rollover: false,
  meterId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `units`            | *number*           | :heavy_check_mark: | N/A                |
| `rollover`         | *boolean*          | :heavy_check_mark: | N/A                |
| `meterId`          | *string*           | :heavy_check_mark: | N/A                |