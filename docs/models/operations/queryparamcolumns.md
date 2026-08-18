# QueryParamColumns

Columns to include in the CSV, in order. Defaults to email, created_at, product, net_amount, currency, status and invoice_number.


## Supported Types

### `components.OrderExportColumn`

```typescript
const value: components.OrderExportColumn = "tax_amount";
```

### `components.OrderExportColumn[]`

```typescript
const value: components.OrderExportColumn[] = [
  "billing_name",
];
```

