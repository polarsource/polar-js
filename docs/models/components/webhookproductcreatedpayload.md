# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
    data: {
        createdAt: new Date("2022-04-06T18:30:51.845Z"),
        modifiedAt: new Date("2022-04-16T17:02:36.441Z"),
        id: "<value>",
        name: "<value>",
        description: "Innovative systemic parallelism",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "individual",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2023-02-08T05:42:06.071Z"),
                modifiedAt: new Date("2022-12-02T19:05:21.194Z"),
                id: "<value>",
                priceAmount: 342342,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "year",
            },
        ],
        benefits: [
            {
                createdAt: new Date("2023-09-22T03:20:01.030Z"),
                modifiedAt: new Date("2022-12-11T18:32:09.289Z"),
                id: "<value>",
                description: "User-centric multi-state knowledge base",
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
                path: "/rescue",
                mimeType: "<value>",
                size: 564667,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-06-16T12:32:11.414Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2022-02-26T01:59:13.599Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductCreatedPayloadType](../../models/components/webhookproductcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.ProductInput](../../models/components/productinput.md)                                         | :heavy_check_mark:                                                                                         | A product.                                                                                                 |