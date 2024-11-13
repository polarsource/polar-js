# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2022-01-28T03:31:31.089Z"),
    modifiedAt: new Date("2024-06-29T19:26:32.721Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://crooked-yin.com",
    logoUri: "https://free-hubris.net",
    tosUri: "https://warm-omelet.com",
    policyUri: "https://soggy-prohibition.com",
  },
  sub: {
    id: "<value>",
    email: "Catharine96@yahoo.com",
    avatarUrl: "https://pleasing-angle.com",
  },
  scopes: [
    "products:read",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-06-21T12:36:00.354Z"),
    modifiedAt: new Date("2024-08-07T06:48:26.335Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://big-apricot.org",
    logoUri: "https://nocturnal-whack.info/",
    tosUri: "https://impolite-rule.name",
    policyUri: "https://firm-disk.name/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://weighty-populist.net",
  },
  scopes: [
    "organizations:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://indolent-pocket-watch.biz/",
    },
  ],
};
```

