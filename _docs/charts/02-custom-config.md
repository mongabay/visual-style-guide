---
title: Custom config
info:
---

The config object is a JSON object that is different from the specification that describes the visualisation. It is used to apply **default styles** to the visualisation, and can be completely overridden by the content of the specification.

It aims to provide a consistent look and identity to the charts. All without preventing any tweaks or further customisations for specific pieces of work.

## How to use it?

If you use Vega's [online editor](https://vega.github.io/editor/) to build your charts, just copy the config below and paste it in the config editor. It is located on the left-hand side of the interface and can be accessed by clicking the tab called “Config”.

Before going forward with building your own charts, please have a read at the rest of the page as it contains important information on the [color ranges](#color-ranges), the [legend](#tweaks-for-the-legend) and [extra care to take when using Vega examples](#note-on-using-vega-examples).

## General config

Note: to quickly copy the code, click the <i class="icon">content_copy</i> icon.

{% highlight json %}
{
  "background:": "white",
  "padding": 20,
  "range": {
    "category": [
      "#41AB5D",
      "#004529",
      "#FFCC3E",
      "#9ED400",
      "#F5E7A4",
      "#FF6C2F",
      "#A01200",
      "#96E4EF",
      "#006FDA",
      "#B69FF4",
      "#6A51A3",
      "#F4A3A8"
    ],
    "diverging": [
      "#41AB5D",
      "#8BCC60",
      "#D9EF8B",
      "#FFFFAE",
      "#FFC078",
      "#FF6C2F",
      "#A01200"
    ],
    "reds": [
      "#ffc6c4",
      "#f4a3a8",
      "#e38191",
      "#cc607d",
      "#ad466c",
      "#8b3058",
      "#672044"
    ],
    "purples": [
      "#f2f0f7",
      "#dadaeb",
      "#bcbddc",
      "#9e9ac8",
      "#807dba",
      "#6a51a3",
      "#4a1486"
    ],
    "blues": [
      "#ffffcc",
      "#c7e9b4",
      "#7fcdbb",
      "#41b6c4",
      "#1d91c0",
      "#225ea8",
      "#0c2c84"
    ],
    "greens": [
      "#ffffcc",
      "#d9f0a3",
      "#addd8e",
      "#78c679",
      "#41ab5d",
      "#238443",
      "#005a32"
    ],
    "oranges": [
      "#ffffd4",
      "#fee391",
      "#fec44f",
      "#fe9929",
      "#ec7014",
      "#cc4c02",
      "#8c2d04"
    ]
  },
  "scale": {
    "padding": 0.2
  },
  "axis": {
    "gridColor": "#cecece",
    "tickColor": "#cecece",
    "domain": false,
    "grid": true,
    "labelColor": "#333333",
    "labelFont": "Open Sans",
    "labelFontWeight": 400,
    "labelFontSize": 12,
    "labelPadding": 5,
    "labelOverlap": true,
    "titleColor": "#333333",
    "titleFont": "Open Sans",
    "titleFontWeight": 700,
    "titleFontSize": 14,
    "titlePadding": 15
  },
  "title": {
    "anchor": "start",
    "orient": "top",
    "offset": 40,
    "color": "#333333",
    "font": "Cardo",
    "fontWeight": 700,
    "fontSize": 18,
    "subtitleColor": "#333333",
    "subtitleFont": "Open Sans",
    "subtitleFontWeight": 700,
    "subtitleFontSize": 14,
    "subtitlePadding": 10
  },
  "legend": {
    "direction": "horizontal",
    "orient": "bottom",
    "offset": 30,
    "columnPadding": 5,
    "labelOffset": 10,
    "labelColor": "#333333",
    "labelFont": "Open Sans",
    "labelFontWeight": 400,
    "labelFontSize": 12,
    "labelPadding": 5,
    "titleColor": "#333333",
    "titleFont": "Open Sans",
    "titleFontWeight": 700,
    "titleFontSize": 14,
    "titlePadding": 5,
    "symbolBaseFillColor": "#41AB5D",
    "symbolBaseStrokeColor": "#41AB5D"
  },
  "rect": {
    "fill": "#41AB5D"
  },
  "area": {
    "fill": "#41AB5D"
  },
  "arc": {
    "fill": "#41AB5D"
  },
  "symbol": {
    "fill": "#41AB5D"
  },
  "line": {
    "stroke": "#41AB5D"
  },
  "text": {
    "color": "#333333",
    "font": "Open Sans",
    "fontWeight": 400,
    "fontSize": 12
  }
}
{% endhighlight %}

## Color ranges

The config contains all the color schemes and ramps defined in the [colors section](/docs/foundations/05-colors.html#visualizations) of the style guide.

Below, you'll find how to choose which scheme or ramp to use and how to apply it to your chart.

### Categorical data

If your data is categorical, or will be displayed on a bar or pie chart, you will most likely use the **qualitative scheme**.

When defining the scale that will determine the color of the marks, make sure its `range` is set to `category`. For example, this is a scale using the qualitative scheme:

{% highlight json %}
{
  "scales": [
   {
     "name": "color",
     "type": "ordinal",
     "domain": { "data": "table", "field": "id" },
     "range": "category"
   }
  ]
}
{% endhighlight %}

### Continuous (numerical) data

If your data is composed of numerical values, the config lets you choose between a large choice of **sequential** or **divergent ramps**.

Below are the names of the ramps:
- `diverging` (divergent ramp)
- `reds`
- `purples`
- `blues`
- `greens`
- `oranges`

To use any of them, this is how you would like to define the scale (here we use `purples`):

{% highlight json %}
{
  "scales": [
   {
     "name": "color",
     "type": "linear",
     "domain": { "data": "table", "field": "temp" },
     "range": "purples"
   }
  ]
}
{% endhighlight %}

## Tweaks for the legend

The legend of your chart will be heavily dependent on your data. That's why we're proposing two layouts:
- One layout where it is at the bottom of the chart
- One where it is on the right side

We’d recommend to use the first layout (at the bottom) when the legend contains very few items, and the other, when it contains more.

In both cases, we would recommend not to add a title to the legend to avoid cluttering the visualisation.

The custom config positions the legend at the bottom of the chart. To place the legend at the side of the visualization, you need to slightly alter the code by replacing the `legend` object by this one:

{% highlight json %}
{
  "legend": {
    "direction": "vertical",
    "orient": "right",
    "offset": 30,
    "rowPadding": 5,
    "labelOffset": 10,
    "labelColor": "#333333",
    "labelFont": "Open Sans",
    "labelFontWeight": 400,
    "labelFontSize": 12,
    "labelPadding": 5,
    "titleColor": "#333333",
    "titleFont": "Open Sans",
    "titleFontWeight": 700,
    "titleFontSize": 14,
    "titlePadding": 5,
    "symbolBaseFillColor": "#41AB5D",
    "symbolBaseStrokeColor": "#41AB5D"
  }
}
{% endhighlight %}

## Note on using Vega examples

While useful to start with, most of Vega's examples override some of the defaults set in the config. This include paddings, colors and opacities. When using one of the them, please consider removing all the styling properties that you don't actually need.


