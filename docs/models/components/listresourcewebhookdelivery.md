# ListResourceWebhookDelivery

## Example Usage

```typescript
import { ListResourceWebhookDelivery } from "@polar-sh/sdk/models/components/listresourcewebhookdelivery.js";

let value: ListResourceWebhookDelivery = {
  items: [
    {
      createdAt: new Date("2024-12-17T00:56:00.264Z"),
      modifiedAt: new Date("2024-04-10T03:53:53.371Z"),
      id: "<value>",
      succeeded: false,
      webhookEvent: {
        createdAt: new Date("2023-10-03T22:04:16.280Z"),
        modifiedAt: new Date("2025-11-01T22:56:24.925Z"),
        id: "<value>",
        payload: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 47105,
    maxPage: 607201,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.WebhookDelivery](../../models/components/webhookdelivery.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `pagination`                                                               | [components.Pagination](../../models/components/pagination.md)             | :heavy_check_mark:                                                         | N/A                                                                        |