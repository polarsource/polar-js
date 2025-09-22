# WebhookSubscriptionUpdatedPayload

Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.

If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, and `subscription.revoked`.

To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.

**Discord & Slack support:** On cancellation and revocation. Renewals are skipped.

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionupdatedpayload.js";

let value: WebhookSubscriptionUpdatedPayload = {
  type: "subscription.updated",
  timestamp: new Date("2024-09-20T20:10:21.776Z"),
  data: {
    createdAt: new Date("2025-08-17T08:38:12.962Z"),
    modifiedAt: new Date("2024-09-27T16:02:48.107Z"),
    id: "<value>",
    amount: 429724,
    currency: "Tala",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2023-12-12T07:39:41.542Z"),
    currentPeriodEnd: new Date("2023-03-07T01:03:04.491Z"),
    trialStart: new Date("2025-06-02T07:09:04.410Z"),
    trialEnd: null,
    cancelAtPeriodEnd: false,
    canceledAt: null,
    startedAt: new Date("2024-08-09T17:28:02.277Z"),
    endsAt: new Date("2024-12-16T10:26:19.141Z"),
    endedAt: null,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: null,
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-10-21T10:07:05.567Z"),
      modifiedAt: new Date("2025-10-06T23:18:15.275Z"),
      metadata: {
        "key": 8022.6,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-09-25T13:44:27.391Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      id: "<value>",
      createdAt: new Date("2024-06-29T11:55:37.867Z"),
      modifiedAt: null,
      trialInterval: "week",
      trialIntervalCount: 279574,
      name: "<value>",
      description: "sense busily outside extremely challenge",
      recurringInterval: "month",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      metadata: {},
      prices: [
        {
          createdAt: new Date("2024-12-14T23:57:12.104Z"),
          modifiedAt: new Date("2025-02-07T10:27:56.492Z"),
          id: "<value>",
          amountType: "custom",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "week",
          priceCurrency: "<value>",
          minimumAmount: 232490,
          maximumAmount: null,
          presetAmount: 922780,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-01-16T01:29:59.311Z"),
          modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
          type: "license_keys",
          description: "out beneath off phew",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {},
          properties: {
            prefix: null,
            expires: {
              ttl: 56931,
              timeframe: "month",
            },
            activations: {
              limit: 936323,
              enableCustomerAdmin: false,
            },
            limitUsage: 702937,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/sbin",
          mimeType: "<value>",
          size: 498972,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2024-08-06T00:24:30.544Z"),
          sizeReadable: "<value>",
          publicUrl: "https://enchanting-bell.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-01-17T02:26:08.207Z"),
            modifiedAt: new Date("2025-04-09T14:51:17.764Z"),
            id: "<value>",
            metadata: {
              "key": true,
            },
            type: "select",
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
          order: 252765,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 450011,
      type: "percentage",
      basisPoints: 56820,
      createdAt: new Date("2025-07-10T00:00:38.572Z"),
      modifiedAt: new Date("2024-06-26T03:23:33.136Z"),
      id: "<value>",
      metadata: {},
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-15T04:46:36.215Z"),
      endsAt: new Date("2025-12-18T11:14:27.994Z"),
      maxRedemptions: null,
      redemptionsCount: 635731,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2023-07-18T20:09:29.391Z"),
        modifiedAt: new Date("2025-01-01T05:09:16.733Z"),
        id: "<value>",
        amountType: "custom",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "day",
        priceCurrency: "<value>",
        minimumAmount: 645138,
        maximumAmount: 207325,
        presetAmount: 54902,
        legacy: true,
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.updated                                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |