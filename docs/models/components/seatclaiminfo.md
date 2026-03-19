# SeatClaimInfo

Read-only information about a seat claim invitation.
Safe for email scanners - no side effects when fetched.

## Example Usage

```typescript
import { SeatClaimInfo } from "@polar-sh/sdk/models/components/seatclaiminfo.js";

let value: SeatClaimInfo = {
  productName: "<value>",
  productId: "30dc7831-3f01-432a-8e50-2e5269de7a05",
  organizationName: "<value>",
  organizationSlug: "<value>",
  customerEmail: "<value>",
  canClaim: true,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `productName`                               | *string*                                    | :heavy_check_mark:                          | Name of the product                         |
| `productId`                                 | *string*                                    | :heavy_check_mark:                          | ID of the product                           |
| `organizationName`                          | *string*                                    | :heavy_check_mark:                          | Name of the organization                    |
| `organizationSlug`                          | *string*                                    | :heavy_check_mark:                          | Slug of the organization                    |
| `customerEmail`                             | *string*                                    | :heavy_check_mark:                          | Email of the customer assigned to this seat |
| `canClaim`                                  | *boolean*                                   | :heavy_check_mark:                          | Whether the seat can be claimed             |