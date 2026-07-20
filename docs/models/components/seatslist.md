# SeatsList

## Example Usage

```typescript
import { SeatsList } from "@polar-sh/sdk/models/components/seatslist.js";

let value: SeatsList = {
  seats: [
    {
      createdAt: new Date("2025-03-24T00:19:36.102Z"),
      modifiedAt: new Date("2024-01-13T17:50:35.123Z"),
      id: "404abf3a-20fa-42a9-b297-1359fbc34497",
      subscriptionId: "8cb6bc51-e0bd-4a27-97b9-b6d0af1759d0",
      orderId: "a4a39d2a-6fb4-4fbe-8bbf-8df4620e7928",
      status: "revoked",
      customerId: "8a3788e5-9716-4853-8927-53e65ffdc2f0",
      memberId: "2764129c-b0c9-4b3e-b0fc-d5e674658fe0",
      member: {
        id: "<value>",
        createdAt: new Date("2024-08-29T23:41:53.521Z"),
        modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
        customerId: "<value>",
        email: "member@example.com",
        name: "Jane Doe",
        externalId: "usr_1337",
        role: "billing_manager",
      },
      email: "Golden.Keeling@gmail.com",
      customerEmail: null,
      invitationTokenExpiresAt: new Date("2025-07-07T23:52:15.825Z"),
      claimedAt: new Date("2025-01-21T07:48:04.199Z"),
      revokedAt: new Date("2025-05-31T01:53:09.050Z"),
      seatMetadata: {
        "key": "<value>",
        "key1": "<value>",
      },
    },
  ],
  availableSeats: 791172,
  totalSeats: 491814,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `seats`                                                              | [components.CustomerSeat](../../models/components/customerseat.md)[] | :heavy_check_mark:                                                   | List of seats                                                        |
| `availableSeats`                                                     | *number*                                                             | :heavy_check_mark:                                                   | Number of available seats                                            |
| `totalSeats`                                                         | *number*                                                             | :heavy_check_mark:                                                   | Total number of seats for the subscription                           |