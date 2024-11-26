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
    createdAt: new Date("2022-06-09T10:45:21.984Z"),
    modifiedAt: new Date("2023-06-11T00:55:54.507Z"),
    id: "<value>",
    amount: 792854,
    currency: "Egyptian Pound",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2022-05-04T16:07:59.078Z"),
    currentPeriodEnd: new Date("2022-05-07T19:23:08.899Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-12-09T03:23:35.917Z"),
    endedAt: new Date("2023-07-21T20:09:55.663Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": false,
    },
    user: {
      email: "Jimmie30@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://finished-formamide.com",
    },
    product: {
      createdAt: new Date("2022-10-01T15:47:39.560Z"),
      modifiedAt: new Date("2022-12-16T08:57:46.499Z"),
      id: "<value>",
      name: "<value>",
      description: "apud hefty bakeware why carefree dependable squeaky freely",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-08-01T05:59:09.495Z"),
          modifiedAt: new Date("2023-09-13T17:13:44.662Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-09-15T20:50:47.910Z"),
          modifiedAt: new Date("2022-12-05T15:57:48.116Z"),
          id: "<value>",
          description: "throughout anti proper gee yuck colossal",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 162150,
              timeframe: "year",
            },
            activations: {
              limit: 483090,
              enableUserAdmin: false,
            },
            limitUsage: 266824,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/etc/defaults",
          mimeType: "<value>",
          size: 518508,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-02-04T19:42:51.470Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-04-16T16:44:01.041Z"),
          sizeReadable: "<value>",
          publicUrl: "https://alienated-precedent.org",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-03-14T05:11:25.734Z"),
            modifiedAt: new Date("2022-11-06T19:40:07.937Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 500937,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-12-28T00:49:27.082Z"),
      modifiedAt: new Date("2023-04-05T20:15:32.076Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 387341,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      type: "fixed",
      basisPoints: 299139,
      createdAt: new Date("2022-04-18T12:50:34.974Z"),
      modifiedAt: new Date("2024-06-28T16:41:02.450Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-06-14T08:57:51.625Z"),
      endsAt: new Date("2022-11-13T19:30:07.544Z"),
      maxRedemptions: 236544,
      redemptionsCount: 223296,
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