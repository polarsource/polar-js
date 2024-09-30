# WebhookSubscriptionUpdatedPayload

Sent when a new subscription is updated. This event fires if the subscription is cancelled, both immediately and if the subscription is cancelled at the end of the current period.

**Discord & Slack support:** On cancellation

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2024-12-01T06:57:16.454Z"),
    modifiedAt: new Date("2022-01-20T21:48:52.002Z"),
    id: "<value>",
    amount: 146654,
    currency: "Cordoba Oro",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2023-10-01T23:34:17.590Z"),
    currentPeriodEnd: new Date("2024-01-08T11:01:43.901Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-11-16T04:01:56.929Z"),
    endedAt: new Date("2023-10-19T12:27:31.429Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Darrion_Harvey67@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://prudent-status.org",
    },
    product: {
      createdAt: new Date("2022-08-05T14:32:42.633Z"),
      modifiedAt: new Date("2023-03-12T21:55:16.742Z"),
      id: "<value>",
      name: "<value>",
      description: "except instruction upon",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-04-06T15:41:04.146Z"),
          modifiedAt: new Date("2023-02-01T03:59:12.907Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 205656,
          maximumAmount: 227235,
          presetAmount: 304184,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-05-20T06:56:19.867Z"),
          modifiedAt: new Date("2023-02-12T04:53:05.965Z"),
          id: "<value>",
          type: "ads",
          description: "massive pfft oof",
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
          path: "/lost+found",
          mimeType: "<value>",
          size: 669828,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-07-14T07:58:13.561Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-10-26T15:27:03.943Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-03-31T05:08:04.982Z"),
      modifiedAt: new Date("2022-12-10T11:19:22.816Z"),
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
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |