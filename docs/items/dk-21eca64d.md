---
id: dk-21eca64d
type: task
created: 2026-10-13
status: wip
since: 2026-10-13
area:
priority: P2
rank: zzn
parent:
fixes: []
blocked_by: []
relates: [dk-12eef7a8]
---
# Check paypal-bot, DirtyBot and api.dirtyredz.com for committed secrets


Found in passing on 2026-10-13, while drafting the private project cards (dk-12eef7a8). These three private repos have committed archives and config that may contain credentials:

- **paypal-bot** (an AWS Lambda PayPal payments function, 2018): a committed `config.js` and a zip archive.
- **DirtyBot** (a Node bot on AWS Elastic Beanstalk, 2018): a committed `DirtyBot.zip`.
- **api.dirtyredz.com** (a PHP API on AWS CodeDeploy, 2018): `APIv2.6.zip` plus a committed `vendor/`.

None of this affects dirtyredz.com. The site has dropped the DirtyBot and api.dirtyredz.com cards, and private cards never link to their repo. These are separate repos; this item only tracks the check.

**Direction.** For each repo, list the archive contents and grep config files and the full git history for keys and tokens (PayPal client ID/secret, AWS access keys, database passwords, Discord or other bot tokens); a tool such as gitleaks or trufflehog over the history works. For anything found: rotate or revoke the credential first (deleting it from history doesn't make it safe), then decide whether to scrub the history, archive the repo or delete it.

**Acceptance.** Each repo is either confirmed clean, or every exposed credential is listed with its rotated or revoked status recorded here.

## Scan results (2026-10-13)

This was a read-only scan of the full history and every committed zip version. gitleaks and trufflehog weren't installed, so the search was a manual grep. Values below are masked.

| # | Repo | Where | Credential | Masked | Assessment |
|---|---|---|---|---|---|
| 1 | paypal-bot | `config.js` (client "Rusty! Paypal"), also in `paypal-bot.zip`; in HEAD since `0996358` | PayPal REST client id + secret | `AaPL…pG` / `EHFQ…Py` | Likely **live** (the code uses `mode: 'live'`) |
| 2 | DirtyBot | `server.js:40` `client.login(...)`, also in `DirtyBot.zip` and in paypal-bot history (`2e2ad02`); in HEAD | Discord bot token | `NDE1…gw` | Valid format, so likely real. It may already be revoked |
| 3 | paypal-bot | `config.js` (client "TEST! Paypal"), `index.js@845732c`, zip; in HEAD | PayPal REST client id + secret | `AcWJ…RM` / `EFXl…Dz` | Probably sandbox, but that hasn't been checked |
| 4 | api.dirtyredz.com | `src/app.php:94`, in every API zip version; in HEAD | Hardcoded 7-digit route password | `2490…44` | Real but low value |

Clean: no AWS keys, private keys, `.env` files or DB DSNs. api.dirtyredz.com reads its DB settings from `RDS_*` env vars.

**Rotation (owner action, in the PayPal and Discord dashboards), in this order: 1, 2, 3, then 4 if the route is still deployed.** Rotating fixes the exposure; a history rewrite doesn't. If history is ever scrubbed, it has to cover the zip lineages as well as the plain files.
