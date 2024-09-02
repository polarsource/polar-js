# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
    data: {
        createdAt: new Date("2024-09-14T16:10:11.420Z"),
        modifiedAt: new Date("2022-04-25T01:41:16.030Z"),
        id: "<value>",
        name: "<value>",
        description: "Optional mobile secured line",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "business",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2022-09-25T11:01:44.671Z"),
                modifiedAt: new Date("2022-02-12T06:12:34.909Z"),
                id: "<value>",
                priceAmount: 963976,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "year",
            },
        ],
        benefits: [
            {
                createdAt: new Date("2022-08-26T16:33:18.549Z"),
                modifiedAt: new Date("2022-09-18T20:38:54.808Z"),
                id: "<value>",
                description: "Triple-buffered multimedia alliance",
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
                path: "/Network",
                mimeType: "<value>",
                size: 333072,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-03-08T07:39:12.720Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2022-04-20T07:22:31.472Z"),
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