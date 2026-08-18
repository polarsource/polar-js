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
    subscriptionId: "2c78f48f-a76d-483b-99f1-fca9b89ca3f2",
    orderId: "2f1b6ace-da45-4994-ba1f-14f273d91815",
    status: "revoked",
    customerId: "b93c5289-58e7-4b73-ba4a-ca1f95062e2a",
    memberId: null,
    member: {
      id: "<value>",
      createdAt: new Date("2024-05-20T19:39:16.494Z"),
      modifiedAt: new Date("2026-10-19T07:28:11.474Z"),
      customerId: "<value>",
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
      role: "billing_manager",
    },
    email: "Raina_Koch@gmail.com",
    customerEmail: "<value>",
    invitationTokenExpiresAt: new Date("2026-07-09T06:43:30.109Z"),
    claimedAt: new Date("2026-06-20T08:32:28.330Z"),
    revokedAt: new Date("2024-09-18T17:43:06.678Z"),
    seatMetadata: {
      "key": "<value>",
      "key1": "<value>",
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