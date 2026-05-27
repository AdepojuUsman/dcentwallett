# Dcent Wallet

Static website export for the Dcent wallet landing pages.

## Files

- `dcent.html` — main public landing page.
- `wallet.html` — local wallet page using asset styles and scripts.
- `mail.php` — backend mail form handler.
- `asset/` — project assets including CSS, JS, images, and icons.
- `archive/placeholder-assets/` — moved placeholder HTML assets that were not valid local scripts or icons.

## Notes

- `wallet.html` has been updated to remove invalid `asset/js/*.html` script imports.
- Any placeholder files previously stored under `asset/js`, `asset/font`, or `asset/icon` are now archived.

## GitHub push

This folder is now organized for easier GitHub commits. Add a repository and push as normal:

```bash
git init
git add .
git commit -m "Initial project import"
git remote add origin <your-repo-url>
git push -u origin main
```
