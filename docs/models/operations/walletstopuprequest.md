# WalletsTopUpRequest

## Example Usage

```typescript
import { WalletsTopUpRequest } from "@polar-sh/sdk/models/operations/walletstopup.js";

let value: WalletsTopUpRequest = {
  id: "<value>",
  walletTopUpCreate: {
    amount: 2000,
    currency: "Malaysian Ringgit",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The wallet ID.                                                               |
| `walletTopUpCreate`                                                          | [components.WalletTopUpCreate](../../models/components/wallettopupcreate.md) | :heavy_check_mark:                                                           | N/A                                                                          |