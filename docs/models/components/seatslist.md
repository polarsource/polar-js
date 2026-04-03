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
      status: "pending",
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
    },
  ],
  availableSeats: 762473,
  totalSeats: 710743,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `seats`                                                              | [components.CustomerSeat](../../models/components/customerseat.md)[] | :heavy_check_mark:                                                   | List of seats                                                        |
| `availableSeats`                                                     | *number*                                                             | :heavy_check_mark:                                                   | Number of available seats                                            |
| `totalSeats`                                                         | *number*                                                             | :heavy_check_mark:                                                   | Total number of seats for the subscription                           |