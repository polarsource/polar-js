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
    createdAt: new Date("2022-02-25T02:51:22.050Z"),
    modifiedAt: new Date("2023-04-07T07:37:12.757Z"),
    id: "<value>",
    amount: 256975,
    currency: "Euro",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2023-04-27T23:03:38.458Z"),
    currentPeriodEnd: new Date("2022-01-12T14:26:50.258Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-11-23T13:27:52.601Z"),
    endedAt: new Date("2024-11-20T09:03:34.763Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2022-02-15T07:34:29.918Z"),
      modifiedAt: new Date("2023-08-05T02:21:50.561Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Kurt_Harris49@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Djibouti",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://left-tomb.net/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Abner_Hettinger@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-01-23T14:41:40.360Z"),
      modifiedAt: new Date("2024-12-26T09:53:59.176Z"),
      id: "<value>",
      name: "<value>",
      description: "unless save unlawful vague override shakily rewarding woot",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-07-01T22:55:43.947Z"),
          modifiedAt: new Date("2023-09-11T19:09:44.539Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 90969,
          maximumAmount: 980980,
          presetAmount: 245849,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-08T14:30:14.002Z"),
          modifiedAt: new Date("2023-06-09T17:38:07.580Z"),
          id: "<value>",
          description: "however cope blossom dock",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            archived: {
              "key": false,
            },
            files: [
              "<value>",
            ],
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/opt/sbin",
          mimeType: "<value>",
          size: 903,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-03-18T12:23:43.530Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-09-06T05:37:35.670Z"),
          sizeReadable: "<value>",
          publicUrl: "https://failing-sustenance.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-12-04T08:48:14.783Z"),
            modifiedAt: new Date("2023-05-09T01:09:28.036Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 291666,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-10-27T14:11:26.569Z"),
      modifiedAt: new Date("2023-02-22T02:51:06.328Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 353424,
      createdAt: new Date("2022-10-16T03:05:22.272Z"),
      modifiedAt: new Date("2023-01-31T18:43:40.215Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-01-30T08:26:10.023Z"),
      endsAt: new Date("2024-08-31T02:24:06.436Z"),
      maxRedemptions: 298590,
      redemptionsCount: 371935,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |