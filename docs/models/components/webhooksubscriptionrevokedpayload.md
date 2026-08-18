# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked and the user loses access immediately.
Happens when the subscription is canceled or payment retries are exhausted (status becomes `unpaid`).

For payment failures that can still be recovered, see `subscription.past_due`.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  type: "subscription.revoked",
  timestamp: new Date("2025-02-04T04:48:33.398Z"),
  data: {
    createdAt: new Date("2026-08-17T08:38:12.962Z"),
    modifiedAt: new Date("2025-09-27T16:02:48.107Z"),
    id: "<value>",
    amount: 10000,
    currency: "usd",
    recurringInterval: "week",
    recurringIntervalCount: 928876,
    status: "unpaid",
    currentPeriodStart: new Date("2025-07-08T14:40:56.923Z"),
    currentPeriodEnd: new Date("2024-12-11T07:39:41.542Z"),
    currentMeterPeriodStart: new Date("2024-03-06T01:03:04.491Z"),
    currentMeterPeriodEnd: new Date("2026-06-02T07:09:04.410Z"),
    trialStart: null,
    trialEnd: new Date("2024-02-17T00:31:21.328Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2025-01-13T07:41:12.658Z"),
    startedAt: new Date("2024-02-19T12:41:57.376Z"),
    endsAt: new Date("2026-07-30T11:35:44.457Z"),
    endedAt: null,
    pauseAtPeriodEnd: true,
    pausedAt: new Date("2026-08-17T22:26:31.092Z"),
    resumesAt: new Date("2025-10-21T10:07:05.567Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 9111.07,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-09-11T22:43:44.126Z"),
      modifiedAt: new Date("2024-11-20T04:38:53.340Z"),
      metadata: {},
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      type: "team",
      name: "John Doe",
      billingName: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2026-09-01T19:21:53.135Z"),
      firstUserEventAt: new Date("2024-04-06T20:53:24.313Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      id: "<value>",
      createdAt: new Date("2026-09-10T22:17:40.637Z"),
      modifiedAt: new Date("2026-02-16T12:29:23.294Z"),
      trialInterval: "day",
      trialIntervalCount: 389704,
      name: "<value>",
      description:
        "formula zowie familiarize ceramic joyously unique why deck fluctuate",
      visibility: "private",
      recurringInterval: "day",
      recurringIntervalCount: 186229,
      meterInterval: "month",
      meterIntervalCount: 976880,
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2026-10-14T01:53:23.230Z"),
          modifiedAt: new Date("2025-01-05T02:03:02.818Z"),
          type: "custom",
          description:
            "importance usefully breed plus patiently lazy pulp ick healthily e-mail",
          selectable: true,
          deletable: true,
          isDeleted: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          visibility: "private",
          properties: {
            note: null,
          },
          visibilityConfigurable: false,
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/yp",
          mimeType: "<value>",
          size: 772025,
          storageVersion: null,
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-10-14T04:04:24.781Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2026-03-20T16:38:16.465Z"),
          sizeReadable: "<value>",
          publicUrl: "https://esteemed-coal.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-06-02T04:10:19.278Z"),
            modifiedAt: new Date("2025-08-16T21:21:02.814Z"),
            id: "<value>",
            metadata: {
              "key": 488238,
            },
            type: "number",
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 275070,
          required: true,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "percentage",
      amount: 1000,
      currency: "usd",
      amounts: {
        "eur": 900,
        "usd": 1000,
      },
      createdAt: new Date("2024-09-10T23:22:39.835Z"),
      modifiedAt: new Date("2024-05-26T13:43:30.714Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2026-07-24T12:44:10.720Z"),
      endsAt: new Date("2026-06-05T23:45:05.517Z"),
      maxRedemptions: 608141,
      maxRedemptionsPerCustomer: 441162,
      redemptionsCount: 243123,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2024-11-02T09:55:48.511Z"),
        modifiedAt: new Date("2025-01-19T06:24:47.595Z"),
        id: "<value>",
        source: "catalog",
        amountType: "fixed",
        priceCurrency: "<value>",
        taxBehavior: "inclusive",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "week",
        priceAmount: 172685,
        legacy: true,
      },
    ],
    meters: [
      {
        createdAt: new Date("2024-04-05T03:10:05.602Z"),
        modifiedAt: new Date("2025-03-25T02:35:33.003Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {},
          createdAt: new Date("2025-08-16T16:57:16.542Z"),
          modifiedAt: null,
          id: "<value>",
          name: "<value>",
          unit: "token",
          filter: {
            conjunction: "or",
            clauses: [
              {
                property: "<value>",
                operator: "lt",
                value: false,
              },
            ],
          },
          aggregation: {
            func: "count",
          },
          organizationId: "<value>",
        },
      },
    ],
    pendingUpdate: {
      createdAt: new Date("2025-08-18T08:06:18.153Z"),
      modifiedAt: new Date("2024-09-18T15:34:20.197Z"),
      id: "<value>",
      appliesAt: new Date("2024-04-09T10:02:05.072Z"),
      productId: "<value>",
      seats: 333931,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"subscription.revoked"*                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.revoked                                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |