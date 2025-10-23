# CustomerSeatClaimResponse

Response after successfully claiming a seat.

## Example Usage

```typescript
import { CustomerSeatClaimResponse } from "@polar-sh/sdk/models/components/customerseatclaimresponse.js";

let value: CustomerSeatClaimResponse = {
  seat: {
    createdAt: new Date("2024-09-10T01:15:36.557Z"),
    modifiedAt: new Date("2024-07-15T17:56:06.857Z"),
    id: "7f802f34-6f07-4287-902b-79e489a32e75",
    status: "revoked",
  },
  customerSessionToken: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `seat`                                                             | [components.CustomerSeat](../../models/components/customerseat.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `customerSessionToken`                                             | *string*                                                           | :heavy_check_mark:                                                 | Session token for immediate customer portal access                 |