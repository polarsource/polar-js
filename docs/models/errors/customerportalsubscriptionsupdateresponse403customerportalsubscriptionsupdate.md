# CustomerPortalSubscriptionsUpdateResponse403CustomerPortalSubscriptionsUpdate

Customer subscription is already canceled or will be at the end of the period, the user lacks billing permissions, or pausing/resuming is not enabled for the organization.


## Supported Types

### `errors.AlreadyCanceledSubscription`

```typescript
const value: errors.AlreadyCanceledSubscription = {
  error: "AlreadyCanceledSubscription",
  detail: "<value>",
};
```

### `errors.PauseResumeNotAllowed`

```typescript
const value: errors.PauseResumeNotAllowed = {
  error: "PauseResumeNotAllowed",
  detail: "<value>",
};
```

