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
      httpCode: 446043,
      response: "<value>",
      webhookEvent: {
        createdAt: new Date("2024-03-26T01:11:54.111Z"),
        modifiedAt: new Date("2023-11-22T09:27:46.946Z"),
        id: "<value>",
        skipped: false,
        payload: "<value>",
        type: "benefit_grant.updated",
        isArchived: true,
      },
    },
  ],
  pagination: {
    totalCount: 279990,
    maxPage: 718643,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.WebhookDelivery](../../models/components/webhookdelivery.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `pagination`                                                               | [components.Pagination](../../models/components/pagination.md)             | :heavy_check_mark:                                                         | N/A                                                                        |