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
      status: "pending",
    },
  ],
  availableSeats: 521405,
  totalSeats: 762473,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `seats`                                                              | [components.CustomerSeat](../../models/components/customerseat.md)[] | :heavy_check_mark:                                                   | List of seats                                                        |
| `availableSeats`                                                     | *number*                                                             | :heavy_check_mark:                                                   | Number of available seats                                            |
| `totalSeats`                                                         | *number*                                                             | :heavy_check_mark:                                                   | Total number of seats for the subscription                           |