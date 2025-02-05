# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2025-03-29T05:10:24.186Z"),
    modifiedAt: new Date("2023-08-10T10:42:10.674Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://punctual-discourse.com/",
    logoUri: "https://peaceful-passport.name/",
    tosUri: "https://guilty-godfather.biz/",
    policyUri: "https://lavish-cellar.com/",
  },
  sub: {
    id: "<value>",
    email: "Alyson_Rohan49@yahoo.com",
    avatarUrl: "https://courageous-tray.net",
  },
  scopes: [
    "organizations:read",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-04-18T01:10:45.728Z"),
    modifiedAt: new Date("2025-10-12T04:57:23.597Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://failing-commodity.net",
    logoUri: "https://far-fowl.info",
    tosUri: "https://fatal-mathematics.net/",
    policyUri: "https://flowery-trick.name/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://grumpy-knickers.com/",
  },
  scopes: [
    "profile",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://sick-instruction.org",
    },
  ],
};
```

