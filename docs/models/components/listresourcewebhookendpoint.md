# ListResourceWebhookEndpoint

## Example Usage

```typescript
import { ListResourceWebhookEndpoint } from "@polar-sh/sdk/models/components/listresourcewebhookendpoint.js";

let value: ListResourceWebhookEndpoint = {
  items: [],
  pagination: {
    totalCount: 47105,
    maxPage: 607201,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.WebhookEndpoint](../../models/components/webhookendpoint.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `pagination`                                                               | [components.Pagination](../../models/components/pagination.md)             | :heavy_check_mark:                                                         | N/A                                                                        |