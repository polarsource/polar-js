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
    createdAt: new Date("2022-07-20T20:45:13.442Z"),
    modifiedAt: new Date("2024-02-27T23:14:03.443Z"),
    id: "<value>",
    amount: 7866,
    currency: "Malagasy Ariary",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2024-11-10T12:13:29.060Z"),
    currentPeriodEnd: new Date("2022-02-17T11:30:13.324Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-04-23T23:31:32.791Z"),
    endedAt: new Date("2023-07-20T02:09:27.293Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Hannah17@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://strange-encouragement.name",
    },
    product: {
      createdAt: new Date("2022-08-18T00:27:45.134Z"),
      modifiedAt: new Date("2024-07-25T15:30:25.665Z"),
      id: "<value>",
      name: "<value>",
      description: "exasperation why blah per",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-09-22T14:10:48.963Z"),
          modifiedAt: new Date("2023-10-07T14:09:54.362Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 137209,
          maximumAmount: 164967,
          presetAmount: 921974,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-06-01T03:41:33.937Z"),
          modifiedAt: new Date("2023-12-17T19:30:08.420Z"),
          id: "<value>",
          type: "articles",
          description:
            "rapidly and loyalty oh outside made-up underneath husband tenderly",
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
          path: "/Applications",
          mimeType: "<value>",
          size: 115028,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-08T16:54:04.413Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-03-12T19:58:30.016Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2023-07-13T17:19:07.810Z"),
      modifiedAt: new Date("2024-10-03T02:08:20.774Z"),
      id: "<value>",
      isArchived: false,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |