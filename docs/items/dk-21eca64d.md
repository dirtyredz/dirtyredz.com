---
id: dk-21eca64d
type: task
created: 2026-10-13
status: todo
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
