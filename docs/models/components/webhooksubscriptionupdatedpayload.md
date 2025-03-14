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
    createdAt: new Date("2025-11-30T16:38:28.908Z"),
    modifiedAt: new Date("2024-08-16T15:06:52.983Z"),
    id: "<value>",
    amount: 24945,
    currency: "Jamaican Dollar",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2025-02-04T16:45:44.018Z"),
    currentPeriodEnd: new Date("2024-07-06T01:15:14.096Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-01-29T05:00:23.216Z"),
    startedAt: new Date("2025-04-28T16:34:47.940Z"),
    endsAt: new Date("2024-09-06T04:04:11.659Z"),
    endedAt: new Date("2023-04-01T09:54:32.778Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-08-22T03:08:35.867Z"),
      modifiedAt: new Date("2023-11-09T06:43:16.309Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-06-10T15:29:17.298Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Harrison_Satterfield81@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-06-26T21:57:31.641Z"),
      modifiedAt: new Date("2023-03-06T06:10:43.553Z"),
      id: "<value>",
      name: "<value>",
      description: "as postbox who for",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-12-29T11:23:22.172Z"),
          modifiedAt: new Date("2025-07-02T11:49:42.061Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 559947,
          maximumAmount: 478216,
          presetAmount: 445973,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-07-07T02:12:48.329Z"),
          modifiedAt: new Date("2023-10-11T21:14:00.960Z"),
          id: "<value>",
          description: "inexperienced pike investigate whether and wonderful",
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
          path: "/usr/local/src",
          mimeType: "<value>",
          size: 274844,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-05-14T18:13:50.638Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-01-29T03:46:18.998Z"),
          sizeReadable: "<value>",
          publicUrl: "https://blushing-cutlet.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-12-29T15:39:22.988Z"),
            modifiedAt: new Date("2025-01-30T14:39:50.524Z"),
            id: "<value>",
            metadata: {
              "key": 570437,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 610873,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 272396,
      type: "percentage",
      basisPoints: 239858,
      createdAt: new Date("2025-08-12T22:36:01.997Z"),
      modifiedAt: new Date("2024-01-15T19:14:05.843Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-22T04:36:59.376Z"),
      endsAt: new Date("2024-10-14T18:31:54.986Z"),
      maxRedemptions: 825283,
      redemptionsCount: 273793,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-03-09T04:27:11.348Z"),
      modifiedAt: new Date("2024-09-19T14:32:18.040Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
    },
    prices: [
      {
        createdAt: new Date("2023-02-22T16:38:20.435Z"),
        modifiedAt: new Date("2023-06-14T03:43:07.211Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 379236,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.updated                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |