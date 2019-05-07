# N-GRID

A grid based on `@angular/cdk`.

The grid is still in early development, API is solid but might change.

---

### If you like this product and want to help, WELCOME

Please see the TODO section at the bottom, help is much appreciated. The
documentation is the KEY

---

## Quick Start

For a quick start see the [documentation site](https://shlomiassaf.github.io/ngrid) that includes code samples.

Or, take a look at the [starter project](https://github.com/shlomiassaf/ngrid-material-starter)

## Setup

```bash
yarn add @pebula/utils @pebula/ngrid @pebula/ngrid-material
```

> Packages include secondary packages / plugins (e.g: `@pebula/ngrid/detail-row`)

> This setup will install ngrid with material design cell pack.

## Structure

N-Grid is built on top of building block taken from `@angular/cdk`. The most obvious is the `CdkTable` but other constructs are used as well (e.g. selection, drag & drop, etc...)

The grid is highly extensible. The design aims to support plugins and extensions, especially for the UI layer.

To support this structure there are several packages, some having secondary
packages inside them:

### @pebula/utils

A small utility library, used by `@pebula/ngrid` but not bound to it.

### @pebula/ngrid

The core package, contains everything you need to build and display the grid.

This package comes with a minimal UI layer, rich UI layer's are implemented
as plugins through other packages.

`@pebula/ngrid` comes with building blocks and features tied to the core of the grid.

Some of the feature are:

- Column & Data Source factories
- Virtual Scrolling (Vertical only at the moment)
- Column: Resize / Reorder / Edit / Hide
- Smart column / cell size management
- Group headers and logical groups.

In addition, there are several secondary packages that **extend** the functionality **only** if you opt-in and use them:

- `@pebula/ngrid/detail-row` - Support for master / detail row structure
- `@pebula/ngrid/drag` - Support for drag and drop (using `@angular/cdk/drag`)
- `@pebula/ngrid/sticky` - Support for sticky rows / columns
- `@pebula/ngrid/target-events` - Support for table events
- `@pebula/ngrid/transpose` - Support for live transpose (switch between rows & columns)

Note that A plugin might just be a UI presentation for a core level feature.  
For example, column resize & reorder will all work programmatically without a plugin but with the `@pebula/ngrid/drag` plugin we add mouse/touch support.

> A plugin might depend on other plugins.

> Currently, `@pebula/ngrid-material` is the only rich UI layer, implementing the UI using `@angular/material`. You can also implemented your own, see how it's done in `@pebula/ngrid-material`.

## TODO

See the [todo list here](TODO.md)
