# WebhookSubscriptionUpdatedPayload

Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.

If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, and `subscription.revoked`.

To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.

**Discord & Slack support:** On cancellation and revocation. Renewals are skipped.

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionupdatedpayload.js";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2024-03-15T02:53:33.205Z"),
    modifiedAt: new Date("2023-11-15T02:07:18.027Z"),
    id: "<value>",
    amount: 969624,
    currency: "Lempira",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2024-05-05T15:43:47.155Z"),
    currentPeriodEnd: new Date("2025-04-04T10:09:12.794Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-11-07T02:32:41.560Z"),
    startedAt: new Date("2025-06-14T11:52:00.847Z"),
    endsAt: new Date("2025-10-17T07:28:48.905Z"),
    endedAt: new Date("2024-06-04T15:58:53.972Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2023-03-18T06:25:09.489Z"),
      modifiedAt: new Date("2024-02-05T13:24:56.196Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      externalId: "<id>",
      email: "Sadie.Dickinson82@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Georgia",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://any-bench.name",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Loraine6@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-11-28T15:53:40.997Z"),
      modifiedAt: new Date("2025-10-29T21:49:35.631Z"),
      id: "<value>",
      name: "<value>",
      description:
        "recount serialize likewise toward acidic meh opposite shoot",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 293512,
      },
      prices: [
        {
          createdAt: new Date("2025-11-17T00:31:35.087Z"),
          modifiedAt: new Date("2023-05-30T01:09:06.183Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 98238,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-12-29T07:02:08.293Z"),
          modifiedAt: new Date("2025-08-08T23:38:36.457Z"),
          id: "<value>",
          description: "above tenderly igloo past generously",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            note: "<value>",
          },
          isTaxApplicable: false,
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/share",
          mimeType: "<value>",
          size: 284927,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-10-29T02:08:12.174Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-21T13:28:33.020Z"),
          sizeReadable: "<value>",
          publicUrl: "https://stylish-postbox.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-05-03T07:52:49.732Z"),
            modifiedAt: new Date("2025-07-22T07:22:34.395Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 166077,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-08-08T09:17:22.587Z"),
      modifiedAt: new Date("2024-11-13T17:27:52.001Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 307965,
    },
    discount: {
      duration: "once",
      durationInMonths: 70173,
      type: "percentage",
      amount: 963600,
      currency: "Naira",
      createdAt: new Date("2023-11-25T20:02:18.063Z"),
      modifiedAt: new Date("2025-11-13T22:33:54.853Z"),
      id: "<value>",
      metadata: {
        "key": 697518,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-11-25T23:42:11.595Z"),
      endsAt: new Date("2025-11-10T09:22:01.009Z"),
      maxRedemptions: 914603,
      redemptionsCount: 148004,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |