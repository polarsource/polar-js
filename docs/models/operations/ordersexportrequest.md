# OrdersExportRequest

## Example Usage

```typescript
import { OrdersExportRequest } from "@polar-sh/sdk/models/operations/ordersexport.js";

let value: OrdersExportRequest = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `organizationId`                                        | *operations.OrdersExportQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                      | Filter by organization ID.                              |
| `productId`                                             | *operations.OrdersExportQueryParamProductIDFilter*      | :heavy_minus_sign:                                      | Filter by product ID.                                   |