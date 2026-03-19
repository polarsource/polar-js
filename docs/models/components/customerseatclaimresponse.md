# CustomerSeatClaimResponse

Response after successfully claiming a seat.

## Example Usage

```typescript
import { CustomerSeatClaimResponse } from "@polar-sh/sdk/models/components/customerseatclaimresponse.js";

let value: CustomerSeatClaimResponse = {
  seat: {
    createdAt: new Date("2025-09-10T01:15:36.557Z"),
    modifiedAt: new Date("2025-07-15T17:56:06.857Z"),
    id: "7f802f34-6f07-4287-902b-79e489a32e75",
    status: "revoked",
    member: {
      id: "<value>",
      createdAt: new Date("2026-04-15T16:04:23.824Z"),
      modifiedAt: new Date("2025-04-16T17:12:33.507Z"),
      customerId: "<value>",
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
      role: "member",
    },
  },
  customerSessionToken: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `seat`                                                             | [components.CustomerSeat](../../models/components/customerseat.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `customerSessionToken`                                             | *string*                                                           | :heavy_check_mark:                                                 | Session token for immediate customer portal access                 |