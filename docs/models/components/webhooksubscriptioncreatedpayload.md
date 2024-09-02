# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
    data: {
        createdAt: new Date("2024-06-22T23:28:44.132Z"),
        modifiedAt: new Date("2022-04-28T12:04:17.137Z"),
        id: "<value>",
        status: "past_due",
        currentPeriodStart: new Date("2024-06-14T19:17:17.033Z"),
        currentPeriodEnd: new Date("2023-08-22T07:48:59.376Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-06-03T13:33:10.353Z"),
        endedAt: new Date("2023-10-08T08:06:10.997Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        user: {
            email: "Sophia.Reynolds@hotmail.com",
            publicName: "<value>",
            githubUsername: "<value>",
            avatarUrl: "<value>",
        },
        product: {
            createdAt: new Date("2023-04-08T07:31:58.107Z"),
            modifiedAt: new Date("2023-02-14T08:50:00.905Z"),
            id: "<value>",
            name: "<value>",
            description: "Reactive incremental frame",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            type: "business",
            isHighlighted: false,
            prices: [
                {
                    createdAt: new Date("2024-03-19T01:22:32.543Z"),
                    modifiedAt: new Date("2024-08-14T01:02:42.877Z"),
                    id: "<value>",
                    priceAmount: 5152,
                    priceCurrency: "<value>",
                    isArchived: false,
                    recurringInterval: "month",
                },
            ],
            benefits: [
                {
                    createdAt: new Date("2024-01-20T19:14:35.379Z"),
                    modifiedAt: new Date("2024-10-04T18:43:22.566Z"),
                    id: "<value>",
                    description: "Assimilated next generation success",
                    selectable: false,
                    deletable: false,
                    organizationId: "<value>",
                    properties: {
                        paidArticles: false,
                    },
                },
            ],
            medias: [
                {
                    id: "<value>",
                    organizationId: "<value>",
                    name: "<value>",
                    path: "/etc/ppp",
                    mimeType: "<value>",
                    size: 844854,
                    storageVersion: "<value>",
                    checksumEtag: "<value>",
                    checksumSha256Base64: "<value>",
                    checksumSha256Hex: "<value>",
                    lastModifiedAt: new Date("2023-06-14T22:27:39.245Z"),
                    version: "<value>",
                    isUploaded: false,
                    createdAt: new Date("2023-07-14T02:24:25.197Z"),
                },
            ],
        },
        price: {
            createdAt: new Date("2022-05-20T22:43:19.573Z"),
            modifiedAt: new Date("2023-01-29T11:00:42.421Z"),
            id: "<value>",
            priceAmount: 621473,
            priceCurrency: "<value>",
            isArchived: false,
        },
    },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |