# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
    data: {
        createdAt: new Date("2023-06-16T12:32:11.414Z"),
        modifiedAt: new Date("2022-02-26T01:59:13.599Z"),
        id: "<value>",
        name: "<value>",
        description: "Triple-buffered attitude-oriented knowledge user",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "individual",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2024-03-12T20:53:35.561Z"),
                modifiedAt: new Date("2024-03-06T05:29:10.472Z"),
                id: "<value>",
                priceAmount: 244032,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "month",
            },
        ],
        benefits: [
            {
                createdAt: new Date("2024-04-27T07:53:12.695Z"),
                modifiedAt: new Date("2024-03-23T09:31:34.975Z"),
                id: "<value>",
                description: "Down-sized content-based superstructure",
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
                path: "/tmp",
                mimeType: "<value>",
                size: 42924,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-01-08T08:57:06.777Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-01-01T01:07:35.992Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductUpdatedPayloadType](../../models/components/webhookproductupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.ProductInput](../../models/components/productinput.md)                                         | :heavy_check_mark:                                                                                         | A product.                                                                                                 |