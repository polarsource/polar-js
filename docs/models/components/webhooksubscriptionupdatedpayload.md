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
    createdAt: new Date("2025-03-17T22:36:14.840Z"),
    modifiedAt: new Date("2025-07-08T00:07:47.902Z"),
    id: "<value>",
    amount: 316584,
    currency: "Somali Shilling",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2024-03-26T19:49:06.695Z"),
    currentPeriodEnd: new Date("2025-03-30T08:14:55.210Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-03-23T17:25:25.814Z"),
    startedAt: new Date("2023-04-08T06:41:24.174Z"),
    endsAt: new Date("2024-08-26T10:25:40.305Z"),
    endedAt: new Date("2024-05-12T22:39:46.148Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-02-24T14:34:24.056Z"),
      modifiedAt: new Date("2023-02-12T21:10:23.646Z"),
      metadata: {
        "key": 424510,
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
      deletedAt: new Date("2023-08-08T03:55:15.872Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Della68@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-06-24T08:18:55.202Z"),
      modifiedAt: new Date("2025-07-14T03:02:27.598Z"),
      id: "<value>",
      name: "<value>",
      description:
        "impish intervention hence ew brr smuggle book ultimately athwart",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 705781,
      },
      prices: [
        {
          createdAt: new Date("2024-12-09T12:22:34.653Z"),
          modifiedAt: new Date("2023-06-04T21:07:29.157Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-17T08:30:01.769Z"),
          modifiedAt: new Date("2025-07-07T18:17:14.780Z"),
          id: "<value>",
          description: "lend ew after scoff swiftly ew lender ew geez oxidise",
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
          path: "/sbin",
          mimeType: "<value>",
          size: 813544,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-13T14:27:35.536Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-01-16T03:56:55.503Z"),
          sizeReadable: "<value>",
          publicUrl: "https://surprised-representation.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-10-24T06:34:09.259Z"),
            modifiedAt: new Date("2025-10-20T05:24:13.548Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 752492,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 973519,
      currency: "Rupiah",
      createdAt: new Date("2023-11-18T07:59:54.568Z"),
      modifiedAt: new Date("2023-12-13T15:44:37.740Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-08-07T20:11:39.205Z"),
      endsAt: new Date("2025-08-05T00:10:24.690Z"),
      maxRedemptions: 590573,
      redemptionsCount: 969911,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-11-13T12:53:28.095Z"),
      modifiedAt: new Date("2023-02-21T00:08:54.044Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 962397,
    },
    prices: [
      {
        createdAt: new Date("2024-06-25T12:36:35.482Z"),
        modifiedAt: new Date("2025-07-31T20:50:15.524Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 774567,
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