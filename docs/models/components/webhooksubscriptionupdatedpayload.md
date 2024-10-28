# WebhookSubscriptionUpdatedPayload

Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.

If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, and `subscription.revoked`.

To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.

**Discord & Slack support:** On cancellation and revocation. Renewals are skipped.

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2024-10-12T17:31:29.736Z"),
    modifiedAt: new Date("2023-09-20T10:21:04.413Z"),
    id: "<value>",
    amount: 126999,
    currency: "Surinam Dollar",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2023-08-15T04:12:35.655Z"),
    currentPeriodEnd: new Date("2023-04-11T16:12:05.280Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-09-03T18:31:34.012Z"),
    endedAt: new Date("2024-04-16T03:53:33.652Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Luther26@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://aggravating-pulse.biz",
    },
    product: {
      createdAt: new Date("2024-10-04T14:30:45.103Z"),
      modifiedAt: new Date("2022-09-23T08:43:42.632Z"),
      id: "<value>",
      name: "<value>",
      description: "tentacle provided slight acknowledge indeed",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-01-20T02:46:22.982Z"),
          modifiedAt: new Date("2023-06-25T19:23:05.706Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 706735,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-30T06:10:40.764Z"),
          modifiedAt: new Date("2023-08-02T02:04:13.457Z"),
          id: "<value>",
          description: "plagiarise under until ghost so plagiarise canter",
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
          path: "/lib",
          mimeType: "<value>",
          size: 463917,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-01-02T11:48:27.382Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-05-08T05:37:26.768Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-12-08T08:55:00.413Z"),
      modifiedAt: new Date("2024-11-08T09:27:04.733Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
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