# WebhookSubscriptionUpdatedPayload

Sent when a new subscription is updated. This event fires if the subscription is cancelled, both immediately and if the subscription is cancelled at the end of the current period.

**Discord & Slack support:** On cancellation

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
    data: {
        createdAt: new Date("2023-11-12T19:14:09.581Z"),
        modifiedAt: new Date("2022-04-04T05:50:28.145Z"),
        id: "<value>",
        status: "active",
        currentPeriodStart: new Date("2023-05-12T04:34:47.459Z"),
        currentPeriodEnd: new Date("2024-08-08T00:00:20.417Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-10-19T04:50:03.107Z"),
        endedAt: new Date("2023-11-19T23:56:05.934Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        user: {
            email: "Gretchen_Hahn@hotmail.com",
            publicName: "<value>",
            githubUsername: "<value>",
            avatarUrl: "<value>",
        },
        product: {
            createdAt: new Date("2024-06-07T16:17:55.929Z"),
            modifiedAt: new Date("2024-02-04T05:06:10.596Z"),
            id: "<value>",
            name: "<value>",
            description: "Future-proofed high-level concept",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            type: "free",
            isHighlighted: false,
            prices: [
                {
                    createdAt: new Date("2023-09-23T18:50:35.990Z"),
                    modifiedAt: new Date("2024-08-18T03:00:36.875Z"),
                    id: "<value>",
                    priceAmount: 194901,
                    priceCurrency: "<value>",
                    isArchived: false,
                },
            ],
            benefits: [
                {
                    createdAt: new Date("2024-03-23T09:21:28.000Z"),
                    modifiedAt: new Date("2022-05-12T15:38:28.027Z"),
                    id: "<value>",
                    description: "Upgradable empowering monitoring",
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
                    size: 724994,
                    storageVersion: "<value>",
                    checksumEtag: "<value>",
                    checksumSha256Base64: "<value>",
                    checksumSha256Hex: "<value>",
                    lastModifiedAt: new Date("2022-05-08T00:35:36.269Z"),
                    version: "<value>",
                    isUploaded: false,
                    createdAt: new Date("2022-06-30T06:42:11.302Z"),
                },
            ],
        },
        price: {
            createdAt: new Date("2024-03-31T01:16:59.768Z"),
            modifiedAt: new Date("2022-03-04T08:05:58.239Z"),
            id: "<value>",
            priceAmount: 497357,
            priceCurrency: "<value>",
            isArchived: false,
            recurringInterval: "year",
        },
    },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |