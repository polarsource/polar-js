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
    createdAt: new Date("2023-12-03T14:44:34.345Z"),
    modifiedAt: new Date("2023-08-13T03:13:38.266Z"),
    id: "<value>",
    amount: 518491,
    currency: "Cedi",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2022-06-15T18:36:00.924Z"),
    currentPeriodEnd: new Date("2022-03-03T10:09:31.552Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-01-11T10:22:56.932Z"),
    endedAt: new Date("2023-10-29T10:16:41.446Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Narciso_Kozey82@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://murky-cinder.name/",
    },
    product: {
      createdAt: new Date("2022-02-06T01:28:31.449Z"),
      modifiedAt: new Date("2023-06-22T18:42:56.572Z"),
      id: "<value>",
      name: "<value>",
      description: "gee hateful kindly source whoa boastfully",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-08-26T04:55:24.796Z"),
          modifiedAt: new Date("2023-12-03T06:03:57.837Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 58904,
          maximumAmount: 617530,
          presetAmount: 132273,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-05-27T16:26:09.723Z"),
          modifiedAt: new Date("2022-08-17T19:12:36.222Z"),
          id: "<value>",
          description: "traditionalism ghost round stock brightly yowza",
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
          path: "/Applications",
          mimeType: "<value>",
          size: 619134,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-04-19T10:40:28.754Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-06-12T15:14:18.032Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-04-18T01:45:32.126Z"),
      modifiedAt: new Date("2024-08-26T04:23:07.891Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 118794,
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