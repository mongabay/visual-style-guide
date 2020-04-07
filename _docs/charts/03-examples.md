---
title: Examples
nav: true
info: The example below are based on Vega's ones but have been slighly modify so they don't override the styles defined in the custom config.
---

## Simple bar chart

![Simple bar chart](/src/assets/images/charts/03-examples-chart-1.svg)

{% highlight json %}
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 400,
  "height": 200,

  "data": [
    {
      "name": "table",
      "values": [
        {"category": "A", "amount": 28},
        {"category": "B", "amount": 55},
        {"category": "C", "amount": 43},
        {"category": "D", "amount": 91},
        {"category": "E", "amount": 81},
        {"category": "F", "amount": 53},
        {"category": "G", "amount": 19},
        {"category": "H", "amount": 87}
      ]
    }
  ],

  "signals": [
    {
      "name": "tooltip",
      "value": {},
      "on": [
        {"events": "rect:mouseover", "update": "datum"},
        {"events": "rect:mouseout",  "update": "{}"}
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "band",
      "domain": {"data": "table", "field": "category"},
      "range": "width",
      "padding": 0.05,
      "round": true
    },
    {
      "name": "yscale",
      "domain": {"data": "table", "field": "amount"},
      "nice": true,
      "range": "height"
    }
  ],

  "axes": [
    { "orient": "bottom", "scale": "xscale" },
    { "orient": "left", "scale": "yscale" }
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data":"table"},
      "encode": {
        "enter": {
          "x": {"scale": "xscale", "field": "category"},
          "width": {"scale": "xscale", "band": 1},
          "y": {"scale": "yscale", "field": "amount"},
          "y2": {"scale": "yscale", "value": 0}
        }
      }
    },
    {
      "type": "text",
      "encode": {
        "enter": {
          "align": {"value": "center"},
          "baseline": {"value": "bottom"},
          "fill": {"value": "#333"}
        },
        "update": {
          "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
          "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -2},
          "text": {"signal": "tooltip.amount"},
          "fillOpacity": [
            {"test": "datum === tooltip", "value": 0},
            {"value": 1}
          ]
        }
      }
    }
  ]
}
{% endhighlight %}

## Stacked bar chart

![Stacked bar chart](/src/assets/images/charts/03-examples-chart-2.svg)

{% highlight json %}
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 500,
  "height": 200,

  "data": [
    {
      "name": "table",
      "values": [
        {"x": 0, "y": 28, "c": 0}, {"x": 0, "y": 55, "c": 1},
        {"x": 1, "y": 43, "c": 0}, {"x": 1, "y": 91, "c": 1},
        {"x": 2, "y": 81, "c": 0}, {"x": 2, "y": 53, "c": 1},
        {"x": 3, "y": 19, "c": 0}, {"x": 3, "y": 87, "c": 1},
        {"x": 4, "y": 52, "c": 0}, {"x": 4, "y": 48, "c": 1},
        {"x": 5, "y": 24, "c": 0}, {"x": 5, "y": 49, "c": 1},
        {"x": 6, "y": 87, "c": 0}, {"x": 6, "y": 66, "c": 1},
        {"x": 7, "y": 17, "c": 0}, {"x": 7, "y": 27, "c": 1},
        {"x": 8, "y": 68, "c": 0}, {"x": 8, "y": 16, "c": 1},
        {"x": 9, "y": 49, "c": 0}, {"x": 9, "y": 15, "c": 1}
      ],
      "transform": [
        {
          "type": "stack",
          "groupby": ["x"],
          "sort": {"field": "c"},
          "field": "y"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "band",
      "range": "width",
      "domain": {"data": "table", "field": "x"}
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "nice": true, "zero": true,
      "domain": {"data": "table", "field": "y1"}
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category",
      "domain": {"data": "table", "field": "c"}
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "x"},
    {"orient": "left", "scale": "y"}
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "x": {"scale": "x", "field": "x"},
          "width": {"scale": "x", "band": 1, "offset": -1},
          "y": {"scale": "y", "field": "y0"},
          "y2": {"scale": "y", "field": "y1"},
          "fill": {"scale": "color", "field": "c"}
        }
      }
    }
  ]
}
{% endhighlight %}

## Pyramid bar chart

![Pyramid bar chart](/src/assets/images/charts/03-examples-chart-3.svg)

{% highlight json %}
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "height": 400,

  "signals": [
    { "name": "chartWidth", "value": 300 },
    { "name": "chartPad", "value": 20 },
    { "name": "width", "update": "2 * chartWidth + chartPad" },
    { "name": "year", "value": 2000,
      "bind": {"input": "range", "min": 1850, "max": 2000, "step": 10} }
  ],

  "data": [
    {
      "name": "population",
      "url": "data/population.json"
    },
    {
      "name": "popYear",
      "source": "population",
      "transform": [
        {"type": "filter", "expr": "datum.year == year"}
      ]
    },
    {
      "name": "males",
      "source": "popYear",
      "transform": [
        {"type": "filter", "expr": "datum.sex == 1"}
      ]
    },
    {
      "name": "females",
      "source": "popYear",
      "transform": [
        {"type": "filter", "expr": "datum.sex == 2"}
      ]
    },
    {
      "name": "ageGroups",
      "source": "population",
      "transform": [
        { "type": "aggregate", "groupby": ["age"] }
      ]
    }
  ],

  "scales": [
    {
      "name": "y",
      "type": "band",
      "range": [{"signal": "height"}, 0],
      "round": true,
      "domain": {"data": "ageGroups", "field": "age"}
    },
    {
      "name": "c",
      "type": "ordinal",
      "domain": [1, 2],
      "range": "category"
    }
  ],

  "marks": [
    {
      "type": "text",
      "interactive": false,
      "from": {"data": "ageGroups"},
      "encode": {
        "enter": {
          "x": {"signal": "chartWidth + chartPad / 2"},
          "y": {"scale": "y", "field": "age", "band": 0.5},
          "text": {"field": "age"},
          "baseline": {"value": "middle"},
          "align": {"value": "center"},
          "fill": {"value": "#000"}
        }
      }
    },
    {
      "type": "group",

      "encode": {
        "update": {
          "x": {"value": 0},
          "height": {"signal": "height"}
        }
      },

      "scales": [
        {
          "name": "x",
          "type": "linear",
          "range": [{"signal": "chartWidth"}, 0],
          "nice": true, "zero": true,
          "domain": {"data": "population", "field": "people"}
        }
      ],

      "axes": [
        {"orient": "bottom", "scale": "x", "format": "s", "title": "Females"}
      ],

      "marks": [
        {
          "type": "rect",
          "from": {"data": "females"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "people"},
              "x2": {"scale": "x", "value": 0},
              "y": {"scale": "y", "field": "age"},
              "height": {"scale": "y", "band": 1, "offset": -1},
              "fill": {"scale": "c", "field": "sex"}
            }
          }
        }
      ]
    },
    {
      "type": "group",

      "encode": {
        "update": {
          "x": {"signal": "chartWidth + chartPad"},
          "height": {"signal": "height"}
        }
      },

      "scales": [
        {
          "name": "x",
          "type": "linear",
          "range": [0, {"signal": "chartWidth"}],
          "nice": true, "zero": true,
          "domain": {"data": "population", "field": "people"}
        }
      ],

      "axes": [
        {"orient": "bottom", "scale": "x", "format": "s", "title": "Males"}
      ],

      "marks": [
        {
          "type": "rect",
          "from": {"data": "males"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "people"},
              "x2": {"scale": "x", "value": 0},
              "y": {"scale": "y", "field": "age"},
              "height": {"scale": "y", "band": 1, "offset": -1},
              "fill": {"scale": "c", "field": "sex"}
            }
          }
        }
      ]
    }
  ]
}
{% endhighlight %}

## Line chart

![Line chart](/src/assets/images/charts/03-examples-chart-4.svg)

{% highlight json %}
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 500,
  "height": 200,

  "signals": [
    {
      "name": "interpolate",
      "value": "linear",
      "bind": {
        "input": "select",
        "options": [
          "basis",
          "cardinal",
          "catmull-rom",
          "linear",
          "monotone",
          "natural",
          "step",
          "step-after",
          "step-before"
        ]
      }
    }
  ],

  "data": [
    {
      "name": "table",
      "values": [
        {"x": 0, "y": 28, "c":0}, {"x": 0, "y": 20, "c":1},
        {"x": 1, "y": 43, "c":0}, {"x": 1, "y": 35, "c":1},
        {"x": 2, "y": 81, "c":0}, {"x": 2, "y": 10, "c":1},
        {"x": 3, "y": 19, "c":0}, {"x": 3, "y": 15, "c":1},
        {"x": 4, "y": 52, "c":0}, {"x": 4, "y": 48, "c":1},
        {"x": 5, "y": 24, "c":0}, {"x": 5, "y": 28, "c":1},
        {"x": 6, "y": 87, "c":0}, {"x": 6, "y": 66, "c":1},
        {"x": 7, "y": 17, "c":0}, {"x": 7, "y": 27, "c":1},
        {"x": 8, "y": 68, "c":0}, {"x": 8, "y": 16, "c":1},
        {"x": 9, "y": 49, "c":0}, {"x": 9, "y": 25, "c":1}
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "point",
      "range": "width",
      "domain": {"data": "table", "field": "x"}
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "nice": true,
      "zero": true,
      "domain": {"data": "table", "field": "y"}
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category",
      "domain": {"data": "table", "field": "c"}
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "x"},
    {"orient": "left", "scale": "y"}
  ],

  "marks": [
    {
      "type": "group",
      "from": {
        "facet": {
          "name": "series",
          "data": "table",
          "groupby": "c"
        }
      },
      "marks": [
        {
          "type": "line",
          "from": {"data": "series"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "x"},
              "y": {"scale": "y", "field": "y"},
              "stroke": {"scale": "color", "field": "c"},
              "strokeWidth": {"value": 2}
            },
            "update": {
              "interpolate": {"signal": "interpolate"},
              "strokeOpacity": {"value": 1}
            },
            "hover": {
              "strokeOpacity": {"value": 0.5}
            }
          }
        }
      ]
    }
  ]
}
{% endhighlight %}

## Pie chart

![Pie chart](/src/assets/images/charts/03-examples-chart-5.svg)

{% highlight json %}
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 200,
  "height": 200,
  "autosize": "none",

  "signals": [
    {
      "name": "startAngle", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
    },
    {
      "name": "endAngle", "value": 6.29,
      "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
    },
    {
      "name": "padAngle", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 0.1}
    },
    {
      "name": "innerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 90, "step": 1}
    },
    {
      "name": "cornerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5}
    },
    {
      "name": "sort", "value": false,
      "bind": {"input": "checkbox"}
    }
  ],

  "data": [
    {
      "name": "table",
      "values": [
        {"id": 1, "field": 4},
        {"id": 2, "field": 6},
        {"id": 3, "field": 10},
        {"id": 4, "field": 3},
        {"id": 5, "field": 7},
        {"id": 6, "field": 8}
      ],
      "transform": [
        {
          "type": "pie",
          "field": "field",
          "startAngle": {"signal": "startAngle"},
          "endAngle": {"signal": "endAngle"},
          "sort": {"signal": "sort"}
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "table", "field": "id"},
      "range": "reds"
    }
  ],

  "marks": [
    {
      "type": "arc",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "fill": {"scale": "color", "field": "id"},
          "x": {"signal": "width / 2"},
          "y": {"signal": "height / 2"}
        },
        "update": {
          "startAngle": {"field": "startAngle"},
          "endAngle": {"field": "endAngle"},
          "padAngle": {"signal": "padAngle"},
          "innerRadius": {"signal": "innerRadius"},
          "outerRadius": {"signal": "width / 2"},
          "cornerRadius": {"signal": "cornerRadius"}
        }
      }
    }
  ]
}
{% endhighlight %}

## Scatter plot (with legend at the bottom)

![Scatter plot (with legend at the bottom)](/src/assets/images/charts/03-examples-chart-6.svg)

{% highlight json %}
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "A basic scatter plot example depicting automobile statistics.",
  "width": 500,
  "height": 300,

  "data": [
    {
      "name": "source",
      "url": "data/cars.json",
      "transform": [
        {
          "type": "filter",
          "expr": "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Acceleration'] != null"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {"data": "source", "field": "Horsepower"},
      "range": "width"
    },
    {
      "name": "y",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {"data": "source", "field": "Miles_per_Gallon"},
      "range": "height"
    },
    {
      "name": "size",
      "type": "linear",
      "round": true,
      "nice": false,
      "zero": true,
      "domain": {"data": "source", "field": "Acceleration"},
      "range": [4,361]
    }
  ],

  "axes": [
    {
      "scale": "x",
      "grid": true,
      "domain": false,
      "orient": "bottom",
      "tickCount": 5,
      "title": "Horsepower"
    },
    {
      "scale": "y",
      "grid": true,
      "domain": false,
      "orient": "left",
      "title": "Miles_per_Gallon"
    }
  ],

  "legends": [
    {
      "size": "size",
      "title": "Acceleration",
      "format": "s",
      "symbolStrokeWidth": 0,
      "symbolOpacity": 0.5,
      "symbolType": "circle"
    }
  ],

  "marks": [
    {
      "name": "marks",
      "type": "symbol",
      "from": {"data": "source"},
      "encode": {
        "update": {
          "x": {"scale": "x", "field": "Horsepower"},
          "y": {"scale": "y", "field": "Miles_per_Gallon"},
          "size": {"scale": "size", "field": "Acceleration"},
          "shape": {"value": "circle"},
          "strokeWidth": {"value": 0},
          "opacity": {"value": 0.5}
        }
      }
    }
  ]
}
{% endhighlight%}

## Scatter plot (with legend at the side)

![Scatter plot (with legend at the side)](/src/assets/images/charts/03-examples-chart-7.svg)

The code is the same as the one of the previous example because only the config changed.

## Heatmap

![Heatmap](/src/assets/images/charts/03-examples-chart-8.svg)

{% highlight json %}
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 800,
  "height": 500,

  "title": {
    "text": "Seattle Annual Temperatures"
  },

  "data": [
    {
      "name": "temperature",
      "url": "data/seattle-temps.csv",
      "format": {"type": "csv", "parse": {"temp": "number", "date": "date"}},
      "transform": [
        {"type": "formula", "as": "hour", "expr": "hours(datum.date)"},
        { "type": "formula", "as": "day",
          "expr": "datetime(year(datum.date), month(datum.date), date(datum.date))"}
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "time",
      "domain": {"data": "temperature", "field": "day"},
      "range": "width"
    },
    {
      "name": "y",
      "type": "band",
      "domain": [
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        0, 1, 2, 3, 4, 5
      ],
      "range": "height"
    },
    {
      "name": "color",
      "type": "linear",
      "range": "diverging",
      "domain": {"data": "temperature", "field": "temp"},
      "zero": false, "nice": true
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "x", "domain": false, "title": "Month", "format": "%b"},
    {
      "orient": "left", "scale": "y", "domain": false, "title": "Hour",
      "encode": {
        "labels": {
          "update": {
            "text": {"signal": "datum.value === 0 ? 'Midnight' : datum.value === 12 ? 'Noon' : datum.value < 12 ? datum.value + ':00 am' : (datum.value - 12) + ':00 pm'"}
          }
        }
      }
    }
  ],

  "legends": [
    {
      "fill": "color",
      "type": "gradient",
      "title": "Avg. Temp (°F)",
      "gradientLength": {"signal": "height - 16"}
    }
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data": "temperature"},
      "encode": {
        "enter": {
          "x": {"scale": "x", "field": "day"},
          "y": {"scale": "y", "field": "hour"},
          "width": {"value": 5},
          "height": {"scale": "y", "band": 1},
          "tooltip": {"signal": "timeFormat(datum.date, '%b %d %I:00 %p') + ': ' + datum.temp + '°'"}
        },
        "update": {
          "fill": {"scale": "color", "field": "temp"}
        }
      }
    }
  ]
}
{% endhighlight %}
