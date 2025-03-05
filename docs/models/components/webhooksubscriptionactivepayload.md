# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-07-06T01:15:14.096Z"),
    modifiedAt: new Date("2023-01-29T05:00:23.216Z"),
    id: "<value>",
    amount: 774353,
    currency: "Pataca",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2023-11-11T20:57:07.064Z"),
    currentPeriodEnd: new Date("2025-08-22T03:08:35.867Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-11-09T06:43:16.309Z"),
    startedAt: new Date("2025-10-29T02:08:12.174Z"),
    endsAt: new Date("2024-08-21T13:28:33.020Z"),
    endedAt: new Date("2023-12-21T16:20:06.057Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-03-29T16:52:10.152Z"),
      modifiedAt: new Date("2024-11-21T01:28:47.404Z"),
      metadata: {
        "key": false,
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
      email: "Rhiannon_Dooley@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-12-04T12:43:46.364Z"),
      modifiedAt: new Date("2024-04-15T16:41:20.601Z"),
      id: "<value>",
      name: "<value>",
      description: "despite thankfully promptly gosh label",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 733571,
      },
      prices: [
        {
          createdAt: new Date("2024-03-20T13:47:38.271Z"),
          modifiedAt: new Date("2024-10-11T23:08:37.309Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-05-29T05:26:22.764Z"),
          modifiedAt: new Date("2025-03-17T22:36:14.840Z"),
          id: "<value>",
          description:
            "inborn above atop unabashedly unless reconstitute seemingly wherever cow",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/Network",
          mimeType: "<value>",
          size: 458279,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-22T16:38:20.435Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-14T03:43:07.211Z"),
          sizeReadable: "<value>",
          publicUrl: "https://hungry-representation.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-04-04T02:08:10.936Z"),
            modifiedAt: new Date("2025-01-05T02:21:17.084Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 968792,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-05-26T12:06:04.723Z"),
      modifiedAt: new Date("2023-06-27T17:44:33.524Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 882036,
      maximumAmount: 938965,
      presetAmount: 318471,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 605391,
      type: "percentage",
      basisPoints: 575838,
      createdAt: new Date("2023-11-27T05:06:38.850Z"),
      modifiedAt: new Date("2024-11-09T06:40:42.932Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-07-14T16:26:23.129Z"),
      endsAt: new Date("2024-03-28T14:14:55.511Z"),
      maxRedemptions: 705781,
      redemptionsCount: 621428,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.active                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |