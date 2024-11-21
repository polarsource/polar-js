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
    createdAt: new Date("2024-05-07T19:57:45.944Z"),
    modifiedAt: new Date("2023-02-04T23:31:05.359Z"),
    id: "<value>",
    amount: 510652,
    currency: "Norwegian Krone",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2022-12-27T16:35:41.661Z"),
    currentPeriodEnd: new Date("2022-05-23T15:05:57.835Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-03-07T05:39:05.938Z"),
    endedAt: new Date("2023-12-25T08:53:12.327Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Oliver82@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://serpentine-flat.net/",
    },
    product: {
      createdAt: new Date("2022-04-23T12:09:50.046Z"),
      modifiedAt: new Date("2024-01-21T21:14:28.470Z"),
      id: "<value>",
      name: "<value>",
      description:
        "form hospitable consequently greedily upside-down consequently bah deploy",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 269593,
      },
      prices: [
        {
          createdAt: new Date("2022-03-11T16:17:46.711Z"),
          modifiedAt: new Date("2024-03-29T00:56:36.017Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 881310,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-09-09T22:32:20.535Z"),
          modifiedAt: new Date("2024-09-19T07:28:52.145Z"),
          id: "<value>",
          description:
            "frantically scarily apropos barring detain how ah whenever",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryId: "<value>",
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "triage",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/include",
          mimeType: "<value>",
          size: 93617,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-09-12T21:48:55.870Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-08-19T01:15:21.496Z"),
          sizeReadable: "<value>",
          publicUrl: "https://distinct-ectoderm.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-11-05T00:11:06.002Z"),
            modifiedAt: new Date("2024-06-30T11:37:55.414Z"),
            id: "<value>",
            metadata: {
              "key": 490066,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 374577,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-06-05T02:07:02.116Z"),
      modifiedAt: new Date("2022-10-24T23:58:31.091Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 185101,
      maximumAmount: 880907,
      presetAmount: 689973,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      durationInMonths: 14942,
      type: "percentage",
      amount: 440210,
      currency: "Forint",
      createdAt: new Date("2022-07-19T15:18:09.282Z"),
      modifiedAt: new Date("2023-06-20T03:57:39.135Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-07-11T12:32:56.304Z"),
      endsAt: new Date("2022-10-02T10:20:48.033Z"),
      maxRedemptions: 292645,
      redemptionsCount: 425163,
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