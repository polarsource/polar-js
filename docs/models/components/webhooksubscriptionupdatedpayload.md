# WebhookSubscriptionUpdatedPayload

Sent when a new subscription is updated. This event fires if the subscription is cancelled, both immediately and if the subscription is cancelled at the end of the current period.

**Discord & Slack support:** On cancellation

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
    data: {
        createdAt: new Date("2023-06-18T02:32:25.845Z"),
        modifiedAt: new Date("2022-12-23T12:36:25.838Z"),
        id: "<value>",
        status: "active",
        currentPeriodStart: new Date("2023-06-29T14:50:43.901Z"),
        currentPeriodEnd: new Date("2023-09-15T08:37:16.678Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-07-08T17:26:09.397Z"),
        endedAt: new Date("2023-11-12T19:14:09.581Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        user: {
            email: "Jessie_Kling62@gmail.com",
            publicName: "<value>",
            githubUsername: "<value>",
            avatarUrl: "<value>",
        },
        product: {
            createdAt: new Date("2024-04-16T10:17:32.273Z"),
            modifiedAt: new Date("2023-03-16T23:09:39.112Z"),
            id: "<value>",
            name: "<value>",
            description: "Fully-configurable full-range success",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            type: "business",
            isHighlighted: false,
            prices: [
                {
                    createdAt: new Date("2023-01-17T14:50:27.063Z"),
                    modifiedAt: new Date("2023-05-23T19:48:04.040Z"),
                    id: "<value>",
                    priceAmount: 211455,
                    priceCurrency: "<value>",
                    isArchived: false,
                    recurringInterval: "month",
                },
            ],
            benefits: [
                {
                    createdAt: new Date("2023-09-23T18:50:35.990Z"),
                    modifiedAt: new Date("2024-08-18T03:00:36.875Z"),
                    id: "<value>",
                    type: "articles",
                    description: "Universal optimal attitude",
                    selectable: false,
                    deletable: false,
                    organizationId: "<value>",
                },
            ],
            medias: [
                {
                    id: "<value>",
                    organizationId: "<value>",
                    name: "<value>",
                    path: "/var/mail",
                    mimeType: "<value>",
                    size: 334474,
                    storageVersion: "<value>",
                    checksumEtag: "<value>",
                    checksumSha256Base64: "<value>",
                    checksumSha256Hex: "<value>",
                    lastModifiedAt: new Date("2023-12-24T13:22:55.258Z"),
                    version: "<value>",
                    isUploaded: false,
                    createdAt: new Date("2022-07-12T04:59:12.983Z"),
                },
            ],
        },
        price: {
            createdAt: new Date("2022-05-08T00:35:36.269Z"),
            modifiedAt: new Date("2022-06-30T06:42:11.302Z"),
            id: "<value>",
            priceAmount: 899867,
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