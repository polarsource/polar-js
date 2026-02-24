# SeatStatus

## Example Usage

```typescript
import { SeatStatus } from "@polar-sh/sdk/models/components/seatstatus.js";

let value: SeatStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "claimed" | "revoked" | Unrecognized<string>
```