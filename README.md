# David Blog

This website is a personal portfolio-blog, built with GatsbyJS and Netlify CMS. Deploys on netlify with single click. This Starter is sponsered by [W3Layouts](https://w3layouts.com).


Install the original starter locally: (assuming you already have [NodeJS and GatsbyJS installed](https://www.gatsbyjs.org/tutorial/part-zero/))

```bash
gatsby new gatsby-starter-delog https://github.com/W3Layouts/gatsby-starter-delog
```

Instructions also available at W3Layouts [Delog Launch Article](https://w3layouts.com/articles/delog-gatsby-starter-netlify-cms/). 

## Features
- Built with GatsbyJS and Netlify CMS
- Option to Add, Edit, Update and Delete posts via Netlify CMS
- SEO friendly - Option to Add meta description
- Comes with dark mode
- Rive and Lottie animations
- Responsive and mobile-first
---

## Documentation

* Once you hit "[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/W3Layouts/gatsby-starter-delog)"
* Connect Github
* Enter Repository Name
* And your site starts build process. After the build process your website is live

### Changing repositary URL for Netlify CMS access
You need to change repo URL to your own `repo` at `/static/admin/config.yml`, for example `username/repo-name`

### Creating Github OAuth Client ID
* Goto Github [Developer Settings](https://github.com/settings/developers)
* **New OAuth** 
* Enter Application name
* Homepage URL as Netlify URL
* And **Authorization callback URL** to `https://api.netlify.com/auth/done`)
* Once Client ID and Secret token is generated configure same in [Netlify Access Control](#accessing-netlify-cms-admin) as described.

### Accessing Netlify CMS Admin
* Goto your Netlify site admin
* Goto **Access Control** > **OAuth** then **Install Provider** you need to select provider as `Github` as add `Client ID` and `Secret` 
* Your Netlify CMS is ready. Goto you netlify site URL and append `/admin/`. for example `example.netlify.com/admin/`, You will see login with Github button.

### Managing Blog Posts in Netlify CMS
* Once logged in you will find all the blog post listed here.
* You can create, edit, update and delete like any CMS

### Editing Meta Data
Inside you Netlify CMS admin, `Settings > Config` or you can go to `site-meta-data.json`. Here you can edit following details
* Title
* Description
* Site URL
* Homepage Title
* Homepage Description


### Add Google Analytics
Change `trackingId` in `gatsby-config.js` at `gatsby-plugin-google-analytics` plugin

---

I hope you will build a great website with this starter. If you like it please spread the word, Feel free to contribute and raise a pull request :)

For issues,feedback on enhancement or sharing your new awesome website built with delog. [Create New Issue](https://github.com/W3Layouts/gatsby-starter-delog/issues/new) Here

---

## Roadmap
We are maintaining future task in [Github Project](https://github.com/W3Layouts/gatsby-starter-delog/projects/1), even though most changes are instantaious. We try keep them posted here.

---

## Credits
- Awesome image used in demo is from [Unsplash](https://unsplash.com)
- CSS and SVG Icons by [CSS.gg](https://css.gg)
- Lottie animation [guy](https://lottiefiles.com/27649-lets-chat)
- Rive animation [sun-moon](https://rive.app/community/281-556-dark-mode-buttom/)

---
