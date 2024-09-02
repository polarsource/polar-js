# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
    data: {
        createdAt: new Date("2023-11-13T08:17:15.757Z"),
        modifiedAt: new Date("2023-05-16T17:53:37.409Z"),
        id: "<value>",
        amount: 288570,
        taxAmount: 85066,
        currency: "Tala",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        user: {
            id: "<value>",
            email: "Bertha32@gmail.com",
            publicName: "<value>",
            githubUsername: "<value>",
            avatarUrl: "<value>",
        },
        product: {
            createdAt: new Date("2022-07-20T14:30:27.937Z"),
            modifiedAt: new Date("2023-11-02T00:21:23.394Z"),
            id: "<value>",
            name: "<value>",
            description: "Intuitive explicit portal",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            type: "business",
            isHighlighted: false,
        },
        productPrice: {
            createdAt: new Date("2024-01-14T03:40:29.200Z"),
            modifiedAt: new Date("2023-06-19T11:50:17.389Z"),
            id: "<value>",
            priceAmount: 144691,
            priceCurrency: "<value>",
            isArchived: false,
            recurringInterval: "month",
        },
        subscription: {
            createdAt: new Date("2022-07-04T04:11:25.479Z"),
            modifiedAt: new Date("2023-04-12T05:46:01.669Z"),
            id: "<value>",
            status: "incomplete",
            currentPeriodStart: new Date("2022-03-11T15:43:07.050Z"),
            currentPeriodEnd: new Date("2022-10-17T17:00:32.142Z"),
            cancelAtPeriodEnd: false,
            startedAt: new Date("2022-08-17T05:53:37.129Z"),
            endedAt: new Date("2023-01-17T19:10:33.392Z"),
            userId: "<value>",
            productId: "<value>",
            priceId: "<value>",
        },
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.WebhookOrderCreatedPayloadType](../../models/components/webhookordercreatedpayloadtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.OrderInput](../../models/components/orderinput.md)                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |