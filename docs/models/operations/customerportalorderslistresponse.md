# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-11T18:25:09.275Z"),
        modifiedAt: new Date("2023-04-24T04:35:22.434Z"),
        id: "<value>",
        status: "pending",
        paid: true,
        subtotalAmount: 366197,
        discountAmount: 14996,
        netAmount: 936498,
        amount: 524768,
        taxAmount: 380067,
        totalAmount: 940897,
        refundedAmount: 733711,
        refundedTaxAmount: 311691,
        currency: "Mexican Peso",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-08-31T13:57:01.327Z"),
          modifiedAt: new Date("2024-03-24T13:54:51.732Z"),
          id: "<value>",
          name: "<value>",
          description: "fervently apud hastily",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-07-07T18:35:11.871Z"),
              modifiedAt: new Date("2023-06-27T13:14:11.326Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
              unitAmount: 230760,
              includedUnits: 239749,
              capAmount: 595672,
              meterId: "<value>",
              meter: {
                id: "<value>",
                name: "<value>",
              },
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-17T06:37:14.204Z"),
              modifiedAt: new Date("2023-11-10T09:01:33.376Z"),
              id: "<value>",
              type: "downloadables",
              description: "colorless failing pastel",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/opt",
              mimeType: "<value>",
              size: 902709,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-05-04T12:17:26.391Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-02-24T09:54:53.555Z"),
              sizeReadable: "<value>",
              publicUrl: "https://broken-thigh.com/",
            },
          ],
          organization: {
            createdAt: new Date("2024-07-09T19:11:31.461Z"),
            modifiedAt: new Date("2024-11-19T05:59:53.949Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://deafening-embarrassment.info",
            email: "Adelle14@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "linkedin",
                url: "https://weighty-integer.info",
              },
            ],
            detailsSubmittedAt: new Date("2024-11-25T06:42:14.969Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Hayes, Jones and Emmerich",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 877319,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 108424,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-04-19T20:50:53.619Z"),
          modifiedAt: new Date("2024-10-27T23:43:18.644Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        subscription: {
          createdAt: new Date("2024-06-08T15:51:21.725Z"),
          modifiedAt: new Date("2024-11-20T08:59:09.777Z"),
          id: "<value>",
          amount: 815629,
          currency: "CFA Franc BEAC",
          recurringInterval: "year",
          status: "incomplete",
          currentPeriodStart: new Date("2023-12-18T08:55:56.473Z"),
          currentPeriodEnd: new Date("2023-10-01T20:29:53.442Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-02-04T01:20:18.979Z"),
          startedAt: new Date("2025-07-24T21:35:01.126Z"),
          endsAt: new Date("2023-03-23T09:21:21.054Z"),
          endedAt: new Date("2023-05-30T09:11:23.741Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "other",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-05-20T21:55:42.969Z"),
            modifiedAt: new Date("2025-07-20T11:22:55.248Z"),
            id: "<value>",
            label: "<value>",
            amount: 899710,
            taxAmount: 90633,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 295002,
      maxPage: 791083,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |