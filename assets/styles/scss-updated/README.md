<h1 class="hero__subject--placeholder" align="center">
  <b>MAIN FILE</b>
</h1>

<div class="hero__main--placeholder" align="center">
  <img
  src="../../media/images/vendors/uk__sass-quote.png"
  alt="placeholder main hero image"
  width="800px"
  />
  <br />
  <br />
  <q>
    <i>
    The main file (usually labelled main.scss) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but @import and comments.
    <i/>
  </q>
  <br />
</div>

<br/>
<h2 class="heading__subcat-title--placeholder---v01" align="center">
  <img src="https://image.flaticon.com/icons/png/128/1636/1636053.png" width="24px" /> &nbsp; <b>TABLE OF CONTENTS</b> &nbsp; <img src="https://image.flaticon.com/icons/png/128/1636/1636053.png" width="24px" />
</h2>

- [`base/`](base/)
- [`components/`](components/)
- [`layout/`](layout/)
- [`pages/`](pages/)
- [`themes/`](themes/)
- [`abstracts/`](abstracts/)
- [`vendors/`](vendors/)

<br/>
<h2 class="heading__subcat-title--placeholder---v01" align="center">
  <img src="https://image.flaticon.com/icons/png/128/1636/1636053.png" width="24px" /> &nbsp; <b>DIRECTORY STRUCTURE</b> &nbsp; <img src="https://image.flaticon.com/icons/png/128/1636/1636053.png" width="24px" />
</h2>

```bash
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```

```bash
main.scss/
|
+---`abstracts/`
|       _functions.scss
|       _mixins.scss
|       _utilities.scss
|       _variables.scss
|
+---`base/`
|       _reboot.scss
|       _typography.scss
|
+---`components/`
|   |
|   +---`forms`
|   |       _checkbox.scss
|   |       _file.scss
|   |       _general.scss
|   |       _input.scss
|   |       _radio.scss
|   |       _select.scss
|   |       _textarea.scss
|   |
|   +---`multi-part`
|   |       _breadcrumb.scss
|   |       _card.scss
|   |       _dropdown.scss
|   |       _menu.scss
|   |       _message.scss
|   |       _modal.scss
|   |       _navbar.scss
|   |       _pagination.scss
|   |       _panel.scss
|   |       _tabs.scss
|   |
|   \---`single-part`
|           README.md
|           _block.scss
|           _box.scss
|           _button.scss
|           _content.scss
|           _delete.scss
|           _icon.scss
|           _image.scss
|           _notification.scss
|           _progress-bars.scss
|           _table.scss
|           _tag.scss
|           _title.scss
|
+---`layout/`
|       _article.scss
|       _aside.scss
|       _footer.scss
|       _header.scss
|       _headings.scss
|       _main.scss
|       _nav.scss
|       _section.scss
|
+---`pages/`
|       _home.scss
|       _index.scss
|       _login.scss
|       _profile.scss
|       _storefront.scss
|
+---`themes/`
|       _dark.scss
|       _light.scss
|       _midnight.scss
|
\---`vendors/`
        _buefy.scss
        _bulma.scss


```

<br/>
<h2 class="heading__subcat-title--placeholder---v01" align="center">
  <img src="https://image.flaticon.com/icons/png/128/1636/1636053.png" width="24px" /> &nbsp; <b>REFERENCE</b> &nbsp; <img src="https://image.flaticon.com/icons/png/128/1636/1636053.png" width="24px" />
</h2>

- [base/](http://sass-guidelin.es/#base-folder)
- [components/](http://sass-guidelin.es/#components-folder)
- [layout/](http://sass-guidelin.es/#layout-folder)
- [pages/](http://sass-guidelin.es/#pages-folder)
- [themes/](http://sass-guidelin.es/#themes-folder)
- [abstracts/](http://sass-guidelin.es/#abstracts-folder)
- [vendors/](http://sass-guidelin.es/#vendors-folder)

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)
