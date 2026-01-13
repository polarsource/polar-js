# ListResourceDispute

## Example Usage

```typescript
import { ListResourceDispute } from "@polar-sh/sdk/models/components/listresourcedispute.js";

let value: ListResourceDispute = {
  items: [
    {
      createdAt: new Date("2026-01-23T11:46:08.897Z"),
      modifiedAt: new Date("2026-05-29T01:03:10.998Z"),
      id: "<value>",
      status: "needs_response",
      resolved: false,
      closed: false,
      amount: 1000,
      taxAmount: 200,
      currency: "usd",
      orderId: "57107b74-8400-4d80-a2fc-54c2b4239cb3",
      paymentId: "42b94870-36b9-4573-96b6-b90b1c99a353",
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Dispute](../../models/components/dispute.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |