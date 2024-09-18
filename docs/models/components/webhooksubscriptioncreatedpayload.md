# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-12T20:12:03.032Z"),
    modifiedAt: new Date("2024-06-06T01:32:10.289Z"),
    id: "<value>",
    amount: 596065,
    currency: "Sudanese Pound",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2023-05-15T07:32:18.371Z"),
    currentPeriodEnd: new Date("2023-01-21T17:19:50.907Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-10-20T19:28:55.834Z"),
    endedAt: new Date("2024-09-10T16:57:53.178Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Okey_Hintz@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2023-11-13T08:17:15.757Z"),
      modifiedAt: new Date("2023-05-16T17:53:37.409Z"),
      id: "<value>",
      name: "<value>",
      description: "Face to face asymmetric strategy",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      type: "free",
      isHighlighted: false,
      prices: [],
      benefits: [
        {
          createdAt: new Date("2022-03-31T04:24:06.396Z"),
          modifiedAt: new Date("2022-08-21T19:52:24.265Z"),
          id: "<value>",
          type: "ads",
          description: "Digitized mission-critical Graphic Interface",
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
          path: "/opt/bin",
          mimeType: "<value>",
          size: 745233,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-03-06T22:40:47.679Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-08-01T11:46:24.442Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-06-08T13:57:21.253Z"),
      modifiedAt: new Date("2022-01-01T14:21:40.383Z"),
      id: "<value>",
      priceCurrency: "<value>",
      isArchived: false,
      priceAmount: 168042,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |