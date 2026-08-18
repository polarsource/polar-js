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
      reason: "fraudulent",
      evidenceDueBy: new Date("2025-05-24T01:31:51.766Z"),
      pastDue: false,
      orderId: "57107b74-8400-4d80-a2fc-54c2b4239cb3",
      paymentId: "42b94870-36b9-4573-96b6-b90b1c99a353",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-06-08T01:57:18.459Z"),
        modifiedAt: new Date("2024-12-07T18:28:54.959Z"),
        metadata: {},
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        type: "individual",
        name: "John Doe",
        billingName: "John Doe",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-12-18T15:49:26.442Z"),
        firstUserEventAt: new Date("2024-11-19T00:16:39.706Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      caseId: "<value>",
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