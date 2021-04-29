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
`sass/`
|
+---`abstracts/`
|     _functions.scss         # Sass functions
|     _mixins.scss            # Sass mixins
|     _utilities.scss         # Sass utilities
|     _variables.scss         # Sass variables
|
+---`base/`
|     _custom-normalize.scss  # Custom default HTML tags
|     _typography.scss        # Typography rules (h1-6, p, a, blockquote, etc.)
|
+---`components/`
|   |
|   +---`forms/`
|   |     _checkbox.scss      # All generic form controls
|   |     _file.scss          # Custom file upload input, without JavaScript
|   |     _general.scss       # Generic form controls
|   |     _input.scss         # Text input and its variations
|   |     _radio.scss         # Radio buttons in their native format
|   |     _select.scss        # Browser built-in select dropdown
|   |     _textarea.scss      # Multiline textarea and its variations
|   |
|   +---`multi-part/`
|   |     _breadcrumb.scss    # Component to improve your navigation experience
|   |     _card.scss          # All-around flexible and composable component
|   |     _dropdown.scss      # Interactive dropdown menu for content
|   |     _menu.scss          # Simple menu, for any type of vertical navigation
|   |     _message.scss       # Message blocks, to emphasize part of your page
|   |     _modal.scss         # Classic modal overlay
|   |     _navbar.scss        # Responsive horizontal navbar
|   |     _pagination.scss    # Responsive, usable, and flexible pagination
|   |     _panel.scss         # Composable panel, for compact controls
|   |     _tabs.scss          # Simple responsive horizontal navigation tabs
|   |
|   +---`single-part/`
|         _block.scss         # Most basic spacer block
|         _box.scss           # White box to contain other elements
|         _button.scss        # The classic button
|         _content.scss       # Single class to handle WYSIWYG generated content
|         _delete.scss        # Versatile delete cross
|         _icon.scss          # All icon related scss
|         _image.scss         # Container for responsive images
|         _notification.scss  # Bold notification blocks, to alert your users
|         _progress-bars.scss # Native HTML progress bars
|         _table.scss         # HTML table, with special case cells
|         _tag.scss           # Small tag labels to insert anywhere
|         _title.scss         # Simple headings to add depth to your page
|
+---`layout/`
|     _article.scss           #
|     _aside.scss             #
|     _footer.scss            #
|     _header.scss            #
|     _main.scss              #
|     _nav.scss               #
|     _section.scss           #
|
+---`pages/`
|     _home.scss              #
|     _index.scss             #
|     _login.scss             #
|     _profile.scss           #
|     _storefront.scss        #
|
+---`themes/`
|     _dark.scss              #
|     _light.scss             #
|     _midnight.scss          #
|
+---`vendors/`
|     _buefy.scss             #
|     _bulma.scss             #
|     _reboot.scss             #
|
\– main.scss                  # Main Scss file


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
