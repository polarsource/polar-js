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
    createdAt: new Date("2025-09-10T14:05:10.415Z"),
    modifiedAt: new Date("2024-04-04T02:32:46.994Z"),
    id: "<value>",
    amount: 910726,
    currency: "Sri Lanka Rupee",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2024-09-10T19:09:44.539Z"),
    currentPeriodEnd: new Date("2023-04-10T16:51:27.003Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-12-11T03:40:55.772Z"),
    startedAt: new Date("2023-09-27T10:49:12.135Z"),
    endsAt: new Date("2025-02-17T17:07:55.792Z"),
    endedAt: new Date("2024-07-07T14:30:14.002Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2025-03-02T11:27:13.468Z"),
      modifiedAt: new Date("2023-05-04T14:46:57.065Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Kaela_Grant87@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Lebanon",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://different-word.name/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Ayden.Trantow@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-11-13T13:50:30.123Z"),
      modifiedAt: new Date("2025-07-07T16:43:27.039Z"),
      id: "<value>",
      name: "<value>",
      description:
        "from deduction yummy pish cluttered whose manipulate sweet for badly",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-01-07T16:10:14.746Z"),
          modifiedAt: new Date("2023-11-01T01:12:15.021Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 962280,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-18T10:07:12.459Z"),
          modifiedAt: new Date("2025-04-17T01:35:51.341Z"),
          id: "<value>",
          description: "whenever antagonize obstruct",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 584645,
              timeframe: "year",
            },
            activations: {
              limit: 600471,
              enableCustomerAdmin: false,
            },
            limitUsage: 381522,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/share",
          mimeType: "<value>",
          size: 313099,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-09-23T22:45:24.894Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-04-12T12:32:02.752Z"),
          sizeReadable: "<value>",
          publicUrl: "https://fair-bidet.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-10-07T15:38:35.659Z"),
            modifiedAt: new Date("2023-01-29T22:08:41.933Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 877619,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-01-19T15:57:10.680Z"),
      modifiedAt: new Date("2024-02-19T06:17:35.418Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 978797,
      maximumAmount: 681331,
      presetAmount: 160988,
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      durationInMonths: 24614,
      type: "percentage",
      basisPoints: 271216,
      createdAt: new Date("2023-04-19T08:02:38.105Z"),
      modifiedAt: new Date("2024-03-17T14:06:13.429Z"),
      id: "<value>",
      metadata: {
        "key": 17040,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-09-04T17:10:02.116Z"),
      endsAt: new Date("2024-07-14T06:41:15.268Z"),
      maxRedemptions: 793909,
      redemptionsCount: 423550,
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