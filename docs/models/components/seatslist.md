# SeatsList

## Example Usage

```typescript
import { SeatsList } from "@polar-sh/sdk/models/components/seatslist.js";

let value: SeatsList = {
  seats: [
    {
      createdAt: new Date("2024-03-24T00:19:36.102Z"),
      modifiedAt: new Date("2023-01-13T17:50:35.123Z"),
      id: "404abf3a-20fa-42a9-b297-1359fbc34497",
      subscriptionId: "38cb6bc5-1e0b-4da2-877b-9b6d0af1759d",
      status: "claimed",
    },
  ],
  availableSeats: 891782,
  totalSeats: 647245,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `seats`                                                              | [components.CustomerSeat](../../models/components/customerseat.md)[] | :heavy_check_mark:                                                   | List of seats                                                        |
| `availableSeats`                                                     | *number*                                                             | :heavy_check_mark:                                                   | Number of available seats                                            |
| `totalSeats`                                                         | *number*                                                             | :heavy_check_mark:                                                   | Total number of seats for the subscription                           |