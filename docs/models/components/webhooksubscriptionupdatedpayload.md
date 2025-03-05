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
    createdAt: new Date("2024-04-13T22:24:28.333Z"),
    modifiedAt: new Date("2025-11-22T14:24:07.004Z"),
    id: "<value>",
    amount: 770940,
    currency: "Gourde",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2023-08-05T20:49:45.334Z"),
    currentPeriodEnd: new Date("2023-05-14T13:54:35.410Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-10-18T05:26:52.000Z"),
    startedAt: new Date("2025-12-31T22:39:27.766Z"),
    endsAt: new Date("2023-10-23T19:09:19.930Z"),
    endedAt: new Date("2023-11-27T17:43:11.986Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 865844,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-02-07T20:24:45.233Z"),
      modifiedAt: new Date("2025-07-16T13:54:19.093Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Maryse_Greenfelder34@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-03-01T21:27:02.051Z"),
      modifiedAt: new Date("2024-05-05T15:43:47.155Z"),
      id: "<value>",
      name: "<value>",
      description: "blah beyond blah bitter ah versus alongside ouch whenever",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-10-07T13:24:38.931Z"),
          modifiedAt: new Date("2023-10-09T06:27:51.653Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 153666,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-06-26T15:00:49.644Z"),
          modifiedAt: new Date("2025-12-20T18:47:30.812Z"),
          id: "<value>",
          description: "made-up brr carelessly",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "pull",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/Users",
          mimeType: "<value>",
          size: 867688,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-05T23:27:19.376Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-08-17T20:07:37.732Z"),
          sizeReadable: "<value>",
          publicUrl: "https://everlasting-tennis.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-02-11T16:01:53.719Z"),
            modifiedAt: new Date("2023-05-21T17:10:05.507Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 905001,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-01-20T17:37:00.236Z"),
      modifiedAt: new Date("2025-05-27T10:54:59.560Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      durationInMonths: 280706,
      type: "fixed",
      amount: 817509,
      currency: "Comoro Franc",
      createdAt: new Date("2025-11-30T16:38:28.908Z"),
      modifiedAt: new Date("2024-08-16T15:06:52.983Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-03-31T05:49:17.271Z"),
      endsAt: new Date("2025-01-25T00:48:07.635Z"),
      maxRedemptions: 234291,
      redemptionsCount: 698630,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.updated                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |