# @commercetools-website/custom-applications

## 18.1.0

### Minor Changes

- [#2143](https://github.com/commercetools/merchant-center-application-kit/pull/2143) [`53b27b0b`](https://github.com/commercetools/merchant-center-application-kit/commit/53b27b0b318b3d84f8f6828368b7c6a94008dcd3) Thanks [@tdeekens](https://github.com/tdeekens)! - Adds support for specifying the `Permissions-Policy` header supported in Chrome 90.

  Similar to the `Feature-Policies` header an application config now support a `permissionsPolicies` field.

  ```js
  headers: {
    permissionPolicies: {
      mircophone: '()';
    }
  }
  ```

  More information about supported permission policies can be found [here](https://github.com/w3c/webappsec-permissions-policy/blob/main/permissions-policy-explainer.md).

## 18.0.1

### Patch Changes

- [#2135](https://github.com/commercetools/merchant-center-application-kit/pull/2135) [`598d3bb5`](https://github.com/commercetools/merchant-center-application-kit/commit/598d3bb52a43b261f4ddf0393722927b76339870) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 18.0.0

### Major Changes

- [#2041](https://github.com/commercetools/merchant-center-application-kit/pull/2041) [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade and migrate packages to use `ui-kit@v12`

## 17.0.22

### Patch Changes

- [`ca4ea6eb`](https://github.com/commercetools/merchant-center-application-kit/commit/ca4ea6eb17c14bf015a8448248c58881e005ac99) [#2085](https://github.com/commercetools/merchant-center-application-kit/pull/2085) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 17.0.21

### Patch Changes

- [`d44f5b69`](https://github.com/commercetools/merchant-center-application-kit/commit/d44f5b6916c3897ce198eb06757d29d40535b8d4) [#2076](https://github.com/commercetools/merchant-center-application-kit/pull/2076) Thanks [@tdeekens](https://github.com/tdeekens)! - refactor: to remove lerna and only use many-pkg

## 17.0.20

### Patch Changes

- [`5892c888`](https://github.com/commercetools/merchant-center-application-kit/commit/5892c88879bea4b5cb11b9da39d080005da6b045) [#2067](https://github.com/commercetools/merchant-center-application-kit/pull/2067) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all ui-kit packages to v11 (major)

* [`7f26c54e`](https://github.com/commercetools/merchant-center-application-kit/commit/7f26c54e55eff8aeac786ec0d011d36e40b0d263) [#2066](https://github.com/commercetools/merchant-center-application-kit/pull/2066) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 17.0.19

### Patch Changes

- [`bb2ceac2`](https://github.com/commercetools/merchant-center-application-kit/commit/bb2ceac229b94836482dbed57824d679a9cbd5d6) [#2062](https://github.com/commercetools/merchant-center-application-kit/pull/2062) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 17.0.18

### Patch Changes

- [`074ec33d`](https://github.com/commercetools/merchant-center-application-kit/commit/074ec33d97282fc9750fd59ccceb33ff0430da41) [#2053](https://github.com/commercetools/merchant-center-application-kit/pull/2053) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 17.0.17

### Patch Changes

- [`63d9c424`](https://github.com/commercetools/merchant-center-application-kit/commit/63d9c42463be04bad32ee32be1c84535086de755) [#2049](https://github.com/commercetools/merchant-center-application-kit/pull/2049) Thanks [@emmenko](https://github.com/emmenko)! - Bump uikit versions, use `@manypkg/cli upgrade` instead of `bulk-update-versions`.

* [`eb2fbb22`](https://github.com/commercetools/merchant-center-application-kit/commit/eb2fbb2279eff99048c91da352a69e1883eb54af) [#2044](https://github.com/commercetools/merchant-center-application-kit/pull/2044) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 17.0.16

### Patch Changes

- [`aa6f642a`](https://github.com/commercetools/merchant-center-application-kit/commit/aa6f642a7d28dec7f34f8e6147ed9c7fee0ebd13) [#2026](https://github.com/commercetools/merchant-center-application-kit/pull/2026) Thanks [@emmenko](https://github.com/emmenko)! - Update uikit and docs-kit dependencies to fix some underlying emotion and react-select version resolution.

## 17.0.15

### Patch Changes

- [`c9589f5e`](https://github.com/commercetools/merchant-center-application-kit/commit/c9589f5e3d1fd18393c7bf501c3b23b8ec402804) [#2020](https://github.com/commercetools/merchant-center-application-kit/pull/2020) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 17.0.14

### Patch Changes

- [`b38cb57f`](https://github.com/commercetools/merchant-center-application-kit/commit/b38cb57f678e79a862f1b97df2d1c753838ffbb7) [#1991](https://github.com/commercetools/merchant-center-application-kit/pull/1991) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 17.0.13

### Patch Changes

- [`0ef6a6a`](https://github.com/commercetools/merchant-center-application-kit/commit/0ef6a6a3099ce7210b8db8cc5a21a5e40a050d36) [#1989](https://github.com/commercetools/merchant-center-application-kit/pull/1989) Thanks [@emmenko](https://github.com/emmenko)! - Update uikit packages to `10.44`

## 17.0.12

### Patch Changes

- [`5557c5c`](https://github.com/commercetools/merchant-center-application-kit/commit/5557c5c5744bf34a981247d04dc2f1117c15767d) [#1976](https://github.com/commercetools/merchant-center-application-kit/pull/1976) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 17.0.11

### Patch Changes

- [`48a9886`](https://github.com/commercetools/merchant-center-application-kit/commit/48a98861dcf4193041e02e8ac11eb2940826f5d0) [#1954](https://github.com/commercetools/merchant-center-application-kit/pull/1954) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update dependencies across packages

* [`4971a78`](https://github.com/commercetools/merchant-center-application-kit/commit/4971a78438fb4d2ca5487764192a0bb1ffc3b18e) [#1952](https://github.com/commercetools/merchant-center-application-kit/pull/1952) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: add and apply fixes via manypkg for automatic mono-repo validation

## 17.0.10

### Patch Changes

- [`f6f3c5e`](https://github.com/commercetools/merchant-center-application-kit/commit/f6f3c5ebd08226fd4eca22aec5c39791cf5c5d6a) [#1935](https://github.com/commercetools/merchant-center-application-kit/pull/1935) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 17.0.9

### Patch Changes

- [`1ec4379`](https://github.com/commercetools/merchant-center-application-kit/commit/1ec4379938b093d4444ec9e4079524c48afd4a42) [#1923](https://github.com/commercetools/merchant-center-application-kit/pull/1923) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

* [`06d00af`](https://github.com/commercetools/merchant-center-application-kit/commit/06d00aff634bb8f6e1af730b8ac4e8b0b8cbaa32) [#1932](https://github.com/commercetools/merchant-center-application-kit/pull/1932) Thanks [@TimonRey](https://github.com/TimonRey)! - The second left border of the Github icon in the right column was removed.

## 17.0.8

### Patch Changes

- [`1a96e83`](https://github.com/commercetools/merchant-center-application-kit/commit/1a96e831c94250e10de61dee40e682a77313445f) [#1905](https://github.com/commercetools/merchant-center-application-kit/pull/1905) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 17.0.7

### Patch Changes

- [`bf5f71e`](https://github.com/commercetools/merchant-center-application-kit/commit/bf5f71e663a91d68d777d26ed3145bc96bbf2aa4) [#1896](https://github.com/commercetools/merchant-center-application-kit/pull/1896) Thanks [@emmenko](https://github.com/emmenko)! - Update docs-kit dependencies to v11, which supports emotion v11. As a result, the appkit bundles are using the correct emotion dependencies.

## 17.0.6

### Patch Changes

- [`636fc45`](https://github.com/commercetools/merchant-center-application-kit/commit/636fc45c0d53544a90b0977b2212ec3a8aec8b94) [#1887](https://github.com/commercetools/merchant-center-application-kit/pull/1887) Thanks [@adnasa](https://github.com/adnasa)! - upgrade ui-kit, which includes the new [horizontal constraint changes](https://github.com/commercetools/ui-kit/pull/1632).

* [`ec9e10f`](https://github.com/commercetools/merchant-center-application-kit/commit/ec9e10fde15351cc7cb825aaebb53cdb6e00e0d9) [#1889](https://github.com/commercetools/merchant-center-application-kit/pull/1889) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 17.0.5

### Patch Changes

- [`89c4464`](https://github.com/commercetools/merchant-center-application-kit/commit/89c4464c334dd6c3922d031872286ad3bea8cf67) [#1872](https://github.com/commercetools/merchant-center-application-kit/pull/1872) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 17.0.4

### Patch Changes

- [`71c9111`](https://github.com/commercetools/merchant-center-application-kit/commit/71c9111308832009d1a27e91e4f2d2da4c53367c) [#1866](https://github.com/commercetools/merchant-center-application-kit/pull/1866) Thanks [@emmenko](https://github.com/emmenko)! - Update to uikit v10.39.8

## 17.0.3

### Patch Changes

- [`310e98c`](https://github.com/commercetools/merchant-center-application-kit/commit/310e98c39c0b6479175b7685b3f29ea0a5baa22b) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies (https://github.com/commercetools/merchant-center-application-kit/pull/1857)

## 17.0.2

### Patch Changes

- [`5d9d5da`](https://github.com/commercetools/merchant-center-application-kit/commit/5d9d5da44364fe5590b67be21ac3630e177326e3) [#1820](https://github.com/commercetools/merchant-center-application-kit/pull/1820) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 17.0.1

### Patch Changes

- [`71c5f78`](https://github.com/commercetools/merchant-center-application-kit/commit/71c5f7875c7476e34b65d37046d48ca47e96f12e) [#1795](https://github.com/commercetools/merchant-center-application-kit/pull/1795) Thanks [@renovate](https://github.com/apps/renovate)! - update dependencies

## 17.0.0

### Major Changes

- [`e706232`](https://github.com/commercetools/merchant-center-application-kit/commit/e706232c152f3fed9cf44c10a0c4f25b27448a16) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Remove `mc-scripts extract-intl` command in favor of the official `@formatjs/cli` package.
  We recommend to update your script to extract Intl messages to use the `formatjs extract` command.

  See full release notes: https://docs.commercetools.com/custom-applications/releases/2020-10-14-custom-applications-v17

* [`873048b`](https://github.com/commercetools/merchant-center-application-kit/commit/873048b1c288ca85a37cf26f7d5d2b10879cfd64) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Migrate Apollo dependencies to `@apollo/client` package.

  See full release notes: https://docs.commercetools.com/custom-applications/releases/2020-10-14-custom-applications-v17

- [`633d8c7`](https://github.com/commercetools/merchant-center-application-kit/commit/633d8c7b8ddc2f25128d8249579b7bb287a62e30) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Remove the CLI flag `--use-local-assets`. The default behavior of `mc-scripts compile-html` now is to compile the assets locally, which is the only reasonable thing to do.

  Furthermore, the `@commercetools-frontend/mc-http-server` package has been deprecated and won't be published anymore.
  With the `compile-html` command there is no need to have a pre-configured HTTP server anymore.

  When running the `mc-scripts compile-html` command, the `index.html` is compiled for production usage and it lives in the `public` folder, together with the other static assets. This is all you need to deploy your application.
  You can decide to [deploy the Custom Application statically to one of the popular cloud providers](https://docs.commercetools.com/custom-applications/deployment/compiling-a-custom-application#deployment), or serve the files on your own using a static server.

  For example, to run locally the Custom Application using the production bundles:

  ```console
  NODE_ENV=production MC_APP_ENV=development dotenv -- \
    mc-scripts compile-html \
    --transformer @commercetools-frontend/mc-dev-authentication/transformer-local.js

  mc-scripts serve
  ```

### Patch Changes

- [`c1b34f4`](https://github.com/commercetools/merchant-center-application-kit/commit/c1b34f46a910f1068c6c80309b59d6e4c647406d) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Remove deprecated leftovers

* [`633d8c7`](https://github.com/commercetools/merchant-center-application-kit/commit/633d8c7b8ddc2f25128d8249579b7bb287a62e30) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - update deps

## 16.10.6

### Patch Changes

- [`8cdb025`](https://github.com/commercetools/merchant-center-application-kit/commit/8cdb02591b718406c910a2c4128d4be3dfe24785) [#1776](https://github.com/commercetools/merchant-center-application-kit/pull/1776) Thanks [@renovate](https://github.com/apps/renovate)! - update deps

## 16.10.5

### Patch Changes

- [`f5be51f`](https://github.com/commercetools/merchant-center-application-kit/commit/f5be51fd5ed9085648b3f0ef0b2ae355151d333b) [#1751](https://github.com/commercetools/merchant-center-application-kit/pull/1751) Thanks [@adnasa](https://github.com/adnasa)! - add `compile-html` documentation

## 16.10.4

### Patch Changes

- [`9752622`](https://github.com/commercetools/merchant-center-application-kit/commit/9752622b7422e821bb62d61af360a01f6994dc6b) [#1758](https://github.com/commercetools/merchant-center-application-kit/pull/1758) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 16.10.3

### Patch Changes

- [`786c697`](https://github.com/commercetools/merchant-center-application-kit/commit/786c6978c1febf927db6b45c758498b72e8e48be) [#1745](https://github.com/commercetools/merchant-center-application-kit/pull/1745) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`178ff31`](https://github.com/commercetools/merchant-center-application-kit/commit/178ff317426e0cfcfe1c0adf42a9eada3b134642) [#1734](https://github.com/commercetools/merchant-center-application-kit/pull/1734) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

- [`955f3b6`](https://github.com/commercetools/merchant-center-application-kit/commit/955f3b6c1699b4255d10af499a0fd51960bf8243) [#1725](https://github.com/commercetools/merchant-center-application-kit/pull/1725) Thanks [@adnasa](https://github.com/adnasa)! - add `account` to entry-point not used by external custom application

* [`ad08479`](https://github.com/commercetools/merchant-center-application-kit/commit/ad08479df75aaddeac8b3b80f7933f601ca6d69e) [#1730](https://github.com/commercetools/merchant-center-application-kit/pull/1730) Thanks [@adnasa](https://github.com/adnasa)! - improve wording on support policy

- [`9bc8558`](https://github.com/commercetools/merchant-center-application-kit/commit/9bc85581d336c7d75fda5dc82a1c02f32f16c1fb) [#1704](https://github.com/commercetools/merchant-center-application-kit/pull/1704) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

* [`09fa757`](https://github.com/commercetools/merchant-center-application-kit/commit/09fa757b197b067af258d70b9272aad944e3675e) [#1742](https://github.com/commercetools/merchant-center-application-kit/pull/1742) Thanks [@adnasa](https://github.com/adnasa)! - add description for decoded JWT and their claims

## 16.10.2

### Patch Changes

- [`4d2faba`](https://github.com/commercetools/merchant-center-application-kit/commit/4d2fabafafa0d6ec93a63fc086bd1e21c05b4aa3) [#1722](https://github.com/commercetools/merchant-center-application-kit/pull/1722) Thanks [@adnasa](https://github.com/adnasa)! - consistent naming of `examples-starter`

## 16.10.1

### Patch Changes

- [`bc15ac2`](https://github.com/commercetools/merchant-center-application-kit/commit/bc15ac2f6d53d4c8e0d53ceb6c1a0e5ba0f5353e) [#1692](https://github.com/commercetools/merchant-center-application-kit/pull/1692) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 16.10.0

### Minor Changes

- [`4216b92`](https://github.com/commercetools/merchant-center-application-kit/commit/4216b922fbb39e74ce35f8647d1c4e9ae77909c8) [#1685](https://github.com/commercetools/merchant-center-application-kit/pull/1685) Thanks [@emmenko](https://github.com/emmenko)! - Refactor i18n package to consume compiled data from ui-kit translation messages. Furthermore, the `@commercetools-frontend/i18n` now exposes a `compiled-data` folder as well: `@commercetools-frontend/i18n/compiled-data`.
  This can be used the load pre-compiled messages and thus improving the runtime performance.

  Furthermore, the `mc-scripts extract-intl` command has been deprecated in favor of the more official message extraction with the `@formatjs/cli`: https://formatjs.io/docs/getting-started/message-extraction.

### Patch Changes

- [`f144292`](https://github.com/commercetools/merchant-center-application-kit/commit/f1442921650ca4e6c9bf61ce31bda2b63e72038a) [#1673](https://github.com/commercetools/merchant-center-application-kit/pull/1673) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`211ab69`](https://github.com/commercetools/merchant-center-application-kit/commit/211ab6969a78af5c592c1cc3c3e3ace3199e95cb) [#1689](https://github.com/commercetools/merchant-center-application-kit/pull/1689) Thanks [@emmenko](https://github.com/emmenko)! - Remove emotion dependencies resolutions

## 16.9.7

### Patch Changes

- [`c62261f`](https://github.com/commercetools/merchant-center-application-kit/commit/c62261f80e17fb63467eed6328e41764d3e9a50e) [#1653](https://github.com/commercetools/merchant-center-application-kit/pull/1653) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies and regenerate l10n data based on CLDR v37

* [`20c3165`](https://github.com/commercetools/merchant-center-application-kit/commit/20c316570c31685b56d16d19200f569f0220afc4) [#1662](https://github.com/commercetools/merchant-center-application-kit/pull/1662) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @commercetools-docs/ui-kit to v7

- [`040136b`](https://github.com/commercetools/merchant-center-application-kit/commit/040136bdf9e8468d72455cab2f17fb42e561be87) [#1661](https://github.com/commercetools/merchant-center-application-kit/pull/1661) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @commercetools-docs/gatsby-theme-docs to v7

## 16.9.6

### Patch Changes

- [`0f3dcc3`](https://github.com/commercetools/merchant-center-application-kit/commit/0f3dcc38c81a5fb3c668faecce9a13057f66a66b) [#1638](https://github.com/commercetools/merchant-center-application-kit/pull/1638) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 16.9.5

### Patch Changes

- [`96b3af7`](https://github.com/commercetools/merchant-center-application-kit/commit/96b3af7c3e8276e7a136e48c3d313fe6d504099d) [#1636](https://github.com/commercetools/merchant-center-application-kit/pull/1636) Thanks [@emmenko](https://github.com/emmenko)! - Fix parsing of application config to preserve full URLs when inferring CSP directives.
  Furthermore, every environment variable referenced within the application config that has an empty value will be parsed as-is and it will not be rejected. Additionally, the fields passed to the `additionalEnv` object that are empty will be removed from the resulting environment and `window.app`.

## 16.9.4

### Patch Changes

- [`cc8b37b`](https://github.com/commercetools/merchant-center-application-kit/commit/cc8b37bf85d4683a605a6c3233100627e670ebe7) [#1627](https://github.com/commercetools/merchant-center-application-kit/pull/1627) Thanks [@renovate](https://github.com/apps/renovate)! - chore: update dependencies

* [`33baf25`](https://github.com/commercetools/merchant-center-application-kit/commit/33baf25a5990d7bb292e88e4040e11bff4669b2c) [#1634](https://github.com/commercetools/merchant-center-application-kit/pull/1634) Thanks [@emmenko](https://github.com/emmenko)! - Update description of schema properties of the application config

- [`394380d`](https://github.com/commercetools/merchant-center-application-kit/commit/394380dd25321c2f8f1e6b1e60b998620f2c1e02) [#1635](https://github.com/commercetools/merchant-center-application-kit/pull/1635) Thanks [@emmenko](https://github.com/emmenko)! - Get JSON schema from docs website URL

## 16.9.3

### Patch Changes

- [`779100b`](https://github.com/commercetools/merchant-center-application-kit/commit/779100b432ad448eefec311f31f87891f35489f6) [#1608](https://github.com/commercetools/merchant-center-application-kit/pull/1608) Thanks [@renovate](https://github.com/apps/renovate)! - Update all dependencies

* [`364e711`](https://github.com/commercetools/merchant-center-application-kit/commit/364e71195f9886d30f907b29f8b03eb650df71e5) [#1621](https://github.com/commercetools/merchant-center-application-kit/pull/1621) Thanks [@renovate](https://github.com/apps/renovate)! - feat(deps: add support for react-intl v5 through peer dependencies
  fix(deps): update dependency react-intl to v5

- [`387cab5`](https://github.com/commercetools/merchant-center-application-kit/commit/387cab543fd607b72256f759597f90efd10b64c8) [#1614](https://github.com/commercetools/merchant-center-application-kit/pull/1614) Thanks [@emmenko](https://github.com/emmenko)! - Use non oppressive language. The `trackingEventWhitelist` option for the `<ApplicationShell>` component has been deprecated in favor of `trackingEventList`.

* [`4168061`](https://github.com/commercetools/merchant-center-application-kit/commit/41680612042d476422776e5eaa254450bf874581) [#1618](https://github.com/commercetools/merchant-center-application-kit/pull/1618) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 16.9.2

### Patch Changes

- [`fa6386c`](https://github.com/commercetools/merchant-center-application-kit/commit/fa6386c347df0505235c199232353bc315a47c81) [#1587](https://github.com/commercetools/merchant-center-application-kit/pull/1587) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 16.9.1

### Patch Changes

- [`f8f8609`](https://github.com/commercetools/merchant-center-application-kit/commit/f8f86098687c8cecaaec1b13debabe290b007b58) [#1573](https://github.com/commercetools/merchant-center-application-kit/pull/1573) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 16.9.0

### Minor Changes

- [`96ab311`](https://github.com/commercetools/merchant-center-application-kit/commit/96ab3114a4c00b192763feaeedb68c1e3e804c3e) [#1533](https://github.com/commercetools/merchant-center-application-kit/pull/1533) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to `react-intl` v4. See also https://formatjs.io/docs/react-intl/upgrade-guide-4x

  We updated the peer dependency range to support both `v3` and `v4`.

### Patch Changes

- [`ccbabfd`](https://github.com/commercetools/merchant-center-application-kit/commit/ccbabfdc75972aedcc12e833cc958b5585cb6d60) [#1549](https://github.com/commercetools/merchant-center-application-kit/pull/1549) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update deps to prepare for release

## 16.8.4

### Patch Changes

- [`0925da6`](https://github.com/commercetools/merchant-center-application-kit/commit/0925da6f11e35cc712cc12337716f846a67c0e4c) [#1537](https://github.com/commercetools/merchant-center-application-kit/pull/1537) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

## 16.8.3

### Patch Changes

- [`9391762`](https://github.com/commercetools/merchant-center-application-kit/commit/939176298df3558970a267b6e6478051a355ffae) [#1530](https://github.com/commercetools/merchant-center-application-kit/pull/1530) Thanks [@emmenko](https://github.com/emmenko)! - Update `@commercetools-uikit/*` packages to `10.21.0`

## 16.8.2

### Patch Changes

- [`a66fb1f`](https://github.com/commercetools/merchant-center-application-kit/commit/a66fb1f37a06271b0fad0b2a3f6ea41c61455f0e) [#1518](https://github.com/commercetools/merchant-center-application-kit/pull/1518) Thanks [@tdeekens](https://github.com/tdeekens)! - chore(deps): update all dependencies

## 16.8.1

### Patch Changes

- [`6ffe293`](https://github.com/commercetools/merchant-center-application-kit/commit/6ffe29312433e357ac6c57ce39e98cf9cba49ba5) [#1508](https://github.com/commercetools/merchant-center-application-kit/pull/1508) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies
