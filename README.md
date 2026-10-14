# Inam Khan — Editable Personal Portfolio

A complete responsive, dark-themed academic/research portfolio, visually inspired by the MIT-licensed [vCard personal portfolio](https://github.com/codewithsadee/vcard-personal-portfolio). This is an independently authored implementation, not a modified copy of vCard's original source.

## QUICK START — edit your details

**All visible content is in `assets/content.js`.** Edit the quoted text on the right of each property. You can do this on GitHub with the pencil (Edit) icon. Keep commas and quotation marks intact.

1. Change `name`, `title`, `tagline`, `email`, `location` and optional `phone`.
2. Replace `about` paragraphs, `highlights`, `languages`, `interests`.
3. Edit the entries in `education`, `experience`, `skills`, `researchAreas`, `publications`, `projects`, `awards`.
4. Add your profile photo named `profile.jpg` to the `assets/` directory. Set `photo: "assets/profile.jpg"`.
5. Add your PDF resume named `your-cv.pdf` to `assets/`, then change `cvAvailable: false` to `cvAvailable: true`.
6. Add publication links, DOI links, social links and project URLs. Leave unused links as empty strings `""`.
7. Optional: put project images into `assets/`, and set each project's `image` to `"assets/photo-name.jpg"`.

**Important:** Initial publications, projects, awards, education and experience are sample placeholders, NOT verified real records. Replace before sharing publicly. Some skills and interests are also editable examples. The default email is a placeholder.

## Publish to YOUR GitHub (no terminal required)

### Option A (easiest): create a repository and upload contents
1. Sign into https://github.com/InamKhan65
2. Visit https://github.com/new
3. Repository name: `InamKhan65.github.io` (for clean URL) OR `Homepage` (for /Homepage/ URL).
4. Set visibility **Public**, then click **Create repository**. If possible, leave 'Add a README file' unchecked.
5. Unzip the downloaded ZIP on your computer.
6. On the repository landing page select **uploading an existing file** or **Add file → Upload files**.
7. Upload the **CONTENTS of the `InamKhan-Homepage` folder**, not the ZIP and not the outer folder. Upload `index.html`, `README.md`, `assets/` files. You may drag the contents together using the file manager. GitHub's browser upload supports file drag-and-drop; if nested directories are missing, use GitHub Desktop for a full-folder upload.
8. Click **Commit changes**.
9. In the repository, go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**. Choose **main** / **(root)**, click Save.
10. After GitHub Pages deployment finishes, your website is at `https://InamKhan65.github.io/` (if repo is InamKhan65.github.io), or `https://InamKhan65.github.io/Homepage/` (if repo is Homepage).

### Option B: GitHub Desktop
Create the repository locally using GitHub Desktop, copy **all contents** of this folder into the repository directory, commit, publish repository, then enable Pages as above.

## Structure
```
index.html              Site structure
assets/content.js       YOUR PERSONAL CONTENT: EDIT THIS
assets/app.js           Navigation, filtering, rendering
assets/style.css        Colors, layout, mobile design
assets/profile-placeholder.svg
assets/favicon.svg
README.md               Guide
```

## Editing FAQ
- **Change gold color:** search for `--gold:#f6ca61` in `assets/style.css`.
- **Change font:** edit the first `@import` in `assets/style.css`.
- **Add a publication:** copy one `{type:..., year:..., ...}` object inside `publications` and edit it; separate objects with commas.
- **Add a project:** similarly copy one object inside `projects`. Each project `category` automatically becomes a filter option.
- **Remove sample content:** delete individual entries but keep valid JavaScript brackets `[]`.
- **Contact form?** Contact uses `mailto:` to work on static hosting without a backend. Add a service like Formspree if you need an embedded form.
- **Offline?** Site functionality works offline; the Google Fonts import requires internet and falls back to Arial.
- **Site looks unchanged after updating?** Hard refresh (Ctrl+Shift+R), then verify GitHub Pages deployed the new commit.

## Credits
Original visual design inspiration: [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) (MIT). No third-party template source code or images are redistributed here.
