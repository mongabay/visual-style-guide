---
title: Location 3D map
info: Tell your stories with a new dimension.
---

## Introduction

Through this tutorial, we will create a three-dimensional view of the place in the world you want. In a few simple steps we will obtain high quality satellite images of the place you indicate and then import them into the Blender file, obtaining an incredible three-dimensional representation.

![Equation]({{ site.baseurl }}/src/assets/images/charts/04-location-3d-map-equation.jpg)

For this type of visualization, the usual thing is to distort the elevation of the terrain so that it is distinguishable. When you reduce it, the surface of the earth is less rough than it appears. So we can choose the degree of distortion we want to make it equally suitable for a mountain or a small cliff.

![3D]({{ site.baseurl }}/src/assets/images/charts/04-location-3d-map-equation-3d.jpg)

## How to do it

We have prepared a series of free resources and free software to make this process as fast, simple and accessible as possible. We have reduced the process to these 6 steps:

1. Download and install [Blender](https://www.blender.org/)
2. Download the [Blender templates file]({{ site.baseurl }}/src/assets/misc/charts/04-3d-map-templates.zip)
3. Get the location coordinates
4. Generate the location images
5. Bring your images to the Blender 3D model
6. Render an image, video, or use the 3D model

The first two steps don't even need an explanation. So we can skip to step three!

## Getting the location images

To get the images, we will first need the coordinates of our place of interest. To do this, we will use [geojson.io](http://geojson.io/), a quick, simple tool for creating, viewing, and sharing maps.

![GeoJSON]({{ site.baseurl }}/src/assets/images/charts/04-location-3d-map-geojson.jpg)

Simply draw a box over the area, and copy the coordinates that you will see in the sidebar. We will use them in the next step.

## Generating the location images

We've prepared a [Google Colab document](https://colab.research.google.com/drive/1O6utXLZBH3Y0hGOZNp4wFbqpF22yvZ2a#scrollTo=NmJyvSU33PSW) to extract different aerial images and import them into a folder within your Google Drive account.

![Colab]({{ site.baseurl }}/src/assets/images/charts/04-location-3d-map-colab.jpg)

Follow the steps indicated in the document. You will need to provide a token to enable access to your Drive to save the images when requested. You will also have to paste the coordinates from the previous step, replacing the ones in the document. Finally you can choose a new folder or use the default one.

Depending on the size of the terrain, these images may take several minutes to generate. So don't worry if you don't see them in your Drive folder immediately.

## Generating your 3D model

Install Blender (in case you haven't done it already) and open the model that we will use as a template. We'll replace the images used in that model with the new ones we got in the previous step. If you have image editing software, it is recommended to reduce the size of these images to obtain a better performance manipulating the 3D model in Blender.

![Blender AB]({{ site.baseurl }}/src/assets/images/charts/04-location-3d-map-blender-ab.jpg)

We will simply need to replace two images from the following two locations:

<ol type="A">
	<li>Select the texture layer</li>
	<li>Select the elevation map image</li>
</ol>

If you need to adapt the proportions of the plane, we will select it in the following way:

1. Click on the drawing to select it.
2. Press "S" to change the scale, and "X" or "Y" to restrict the change to one of these two axes.
3. Press "Enter" to apply the change.
4. Repeat steps 2 and 3 if necessary.

And it's all set! You can render the scene and get the image from the camera position. Feel free to modify its position, or even create a video as if a drone were flying over the terrain.

![Blender render]({{ site.baseurl }}/src/assets/images/charts/04-location-3d-map-blender-render.jpg)

Blender is a great free program under open source license. The internet is full of free tutorials in case you want to learn more and expand the possibilities of this introductory tutorial.

![Blender render]({{ site.baseurl }}/src/assets/images/charts/04-location-3d-map-output.jpg)
