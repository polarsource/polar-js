# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-11-01T11:09:20.263Z"),
    modifiedAt: new Date("2023-06-29T15:00:15.453Z"),
    id: "<value>",
    amount: 485972,
    currency: "Lempira",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2024-04-01T10:18:17.294Z"),
    currentPeriodEnd: new Date("2024-08-18T17:37:40.864Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-06-21T17:53:47.217Z"),
    endedAt: new Date("2023-12-17T04:44:10.888Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Lionel.Langworth72@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://thorough-pleasure.com/",
    },
    product: {
      createdAt: new Date("2023-09-12T15:43:53.558Z"),
      modifiedAt: new Date("2022-04-06T06:20:48.081Z"),
      id: "<value>",
      name: "<value>",
      description:
        "easily quizzically usable yowza metabolise through engage personalise",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-02-10T11:23:09.076Z"),
          modifiedAt: new Date("2022-12-27T21:21:00.493Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          priceAmount: 977934,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-18T00:48:41.168Z"),
          modifiedAt: new Date("2023-03-21T04:40:00.933Z"),
          id: "<value>",
          type: "custom",
          description: "coolly submitter yahoo what whoever",
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
          path: "/var/spool",
          mimeType: "<value>",
          size: 844253,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-09-01T06:14:13.897Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-18T22:39:55.324Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2023-04-01T15:25:04.349Z"),
      modifiedAt: new Date("2022-02-16T18:16:38.541Z"),
      id: "<value>",
      isArchived: false,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |