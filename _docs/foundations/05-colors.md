---
title: Colors
nav: true
colors:
  theme:
    - name: Brand
      description: The highlights
      hex: '#729900'
    - name: Forest
      description: The actions
      hex: '#03755F'
    - name: White
      description: The canvas
      hex: '#FFFFFF'
    - name: Night
      description: The words
      hex: '#222222'
  accessibility:
    - hex: '#729900'
      text: White on Brand green
      text_color: '#FFFFFF'
    - hex: '#03755F'
      text: White on Forest
      text_color: '#FFFFFF'
    - hex: '#222222'
      text: Light grey on Night
      text_color: '#CCCCCC'
    - hex: '#F1BA30'
      text: Night on Mustard
      text_color: '#222222'
    - hex: '#DEDEDE'
      text: Night on Light grey
      text_color: '#222222'
    - hex: '#737373'
      text: White on grey
      text_color: '#FFFFFF'
    - hex: '#FFFFFF'
      image: '/src/assets/images/foundations/05-colors-image.jpg'
      text: White on picture
      text_color: '#FFFFFF'
    - hex: '#FFFFFF'
      text: Night on White
      text_color: '#222222'
    - hex: '#FFFFFF'
      text: Grey on White
      text_color: '#737373'
    - hex: '#FFFFFF'
      text: Sea blue on White
      text_color: '#006FDA'
    - hex: '#FFFFFF'
      text: Red on White
      text_color: '#F13032'
  secondary:
    - name: Sea blue
      description: Links
      hex: '#006FDA'
    - name: Red
      description: Error
      hex: '#E01F21'
    - name: Mustard
      description: Secondary actions
      hex: '#FFAF00'
    - name: Grey
      description: Secondary texts
      hex: '#737373'
    - name: Light grey
      description: Layout elements
      hex: '#DEDEDE'
  qualitative_scheme:
    - hex: '#41AB5D'
    - hex: '#004529'
    - hex: '#FFCC3E'
    - hex: '#9ED400'
    - hex: '#F5E7A4'
    - hex: '#FF6C2F'
    - hex: '#A01200'
    - hex: '#96E4EF'
    - hex: '#006FDA'
    - hex: '#B69FF4'
    - hex: '#6A51A3'
    - hex: '#F4A3A8'
  sequential_ramps:
    - colors:
      - hex: '#FFC6C4'
      - hex: '#F4A3A8'
      - hex: '#E38191'
      - hex: '#CC607D'
      - hex: '#AD466C'
      - hex: '#8B3058'
      - hex: '#672044'
    - colors:
      - hex: '#F2F0F7'
      - hex: '#DADAEB'
      - hex: '#BCBDDC'
      - hex: '#9E9AC8'
      - hex: '#807DBA'
      - hex: '#6A51A3'
      - hex: '#4A1486'
    - colors:
      - hex: '#FFFFCC'
      - hex: '#C7E9B4'
      - hex: '#7FCDBB'
      - hex: '#41B6C4'
      - hex: '#1D91C0'
      - hex: '#225EA8'
      - hex: '#0C2C84'
    - colors:
      - hex: '#FFFFCC'
      - hex: '#D9F0A3'
      - hex: '#ADDD8E'
      - hex: '#78C679'
      - hex: '#41AB5D'
      - hex: '#238443'
      - hex: '#005A32'
    - colors:
      - hex: '#FFFFD4'
      - hex: '#FEE391'
      - hex: '#FEC44F'
      - hex: '#FE9929'
      - hex: '#EC7014'
      - hex: '#CC4C02'
      - hex: '#8C2D04'
  diverging_ramp:
    - hex: '#41AB5D'
    - hex: '#8BCC60'
    - hex: '#D9EF8B'
    - hex: '#FFFFAE'
    - hex: '#FFC078'
    - hex: '#FF6C2F'
    - hex: '#A01200'
---

## Theme colors

The main colors have been carefully curated to balance the updated visual identity system. The overall defined palette here is meant to allow a consistent relationship between different elements and communicate the sensation of a natural and vivid world worth protecting.

<ul class="c-color-card-sets">
	{% for color in page.colors.theme %}
	<li class="col-3">
		<div class="color" style="background: {{color.hex}};"></div>
		<p><b>{{color.name}}</b></p>
		<p>{{color.description}}</p>
		<p>HEX: {{color.hex}}</p>
	</li>
	{% endfor %}
</ul>

## Accessibility

Color contrast is an important aspect of accessibility. Good contrast makes it easier for people with visual impairments to use products, and helps in imperfect conditions like low-light environments or older screens. The following color combinations demonstrate how our colors should be used together.

When pairing white on brand green, please follow proper guidelines according to Level AA of the **WCAG standard**.

For photography, be sure to darken the photo as needed to ensure legibility.

<ul class="c-color-card-sets">
	{% for color in page.colors.accessibility %}
	<li class="col-6">
		<div class="color" style="background-color: {{color.hex}}; background-image: url('{{ site.baseurl }}{{color.image}}'); color: {{color.text_color}};">
			{{color.text}}
		</div>
	</li>
	{% endfor %}
</ul>

## Secondary colors

The secondary colours meant to cover a need to differentiate types of actions. The following colours will be used to create links, error messages and other highlighted messages.

The grey will be used in secondary texts to differentiate them from the main content. Lines, dividers, backgrounds etc can be designed with the light grey.

<ul class="c-color-card-sets">
	{% for color in page.colors.secondary %}
	<li class="col-3">
		<div class="color" style="background: {{color.hex}};"></div>
		<p><b>{{color.name}}</b></p>
		<p>{{color.description}}</p>
		<p>HEX: {{color.hex}}</p>
	</li>
	{% endfor %}
</ul>

## Visualizations

The following colors will be used in the different visualizations. Please, follow the recommended order of data categories when presenting diferent type of datasets in a graphic. If you are mapping numeric data, use a sequential or diverging color scheme. If you are mapping categorical data, use the qualitative scheme.

### Qualitative scheme

<ul class="c-color-card-sets">
	{% for color in page.colors.qualitative_scheme %}
	<li class="col-2">
		<div class="color" style="background: {{color.hex}};"></div>
		<p>{{color.hex}}</p>
	</li>
	{% endfor %}
</ul>

### Sequential ramps

{% for ramp in page.colors.sequential_ramps %}
<ul class="c-color-card-sets -no-margin">
	{% for color in ramp.colors %}
	<li class="col">
		<div class="color" style="background: {{color.hex}};"></div>
		<p>{{color.hex}}</p>
	</li>
	{% endfor %}
</ul>
<br />
{% endfor %}

### Divergent ramp

<ul class="c-color-card-sets -no-margin">
	{% for color in page.colors.diverging_ramp %}
	<li class="col">
		<div class="color" style="background: {{color.hex}};"></div>
		<p>{{color.hex}}</p>
	</li>
	{% endfor %}
</ul>
