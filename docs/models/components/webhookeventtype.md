# WebhookEventType

## Example Usage

```typescript
import { WebhookEventType } from "@polar-sh/sdk/models/components/webhookeventtype.js";

let value: WebhookEventType = "member.created";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"checkout.created" | "checkout.updated" | "checkout.expired" | "customer.created" | "customer.updated" | "customer.deleted" | "customer.state_changed" | "customer_seat.assigned" | "customer_seat.claimed" | "customer_seat.revoked" | "member.created" | "member.updated" | "member.deleted" | "order.created" | "order.updated" | "order.paid" | "order.refunded" | "subscription.created" | "subscription.updated" | "subscription.active" | "subscription.canceled" | "subscription.uncanceled" | "subscription.cycled" | "subscription.revoked" | "subscription.past_due" | "subscription.paused" | "subscription.resumed" | "refund.created" | "refund.updated" | "product.created" | "product.updated" | "discount.created" | "discount.updated" | "discount.deleted" | "benefit.created" | "benefit.updated" | "benefit_grant.created" | "benefit_grant.cycled" | "benefit_grant.updated" | "benefit_grant.revoked" | "organization.updated" | Unrecognized<string>
```