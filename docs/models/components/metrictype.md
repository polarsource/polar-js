# MetricType

## Example Usage

```typescript
import { MetricType } from "@polar-sh/sdk/models/components/metrictype.js";

let value: MetricType = "currency_sub_cent";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"scalar" | "currency" | "currency_sub_cent" | "percentage" | Unrecognized<string>
```