# Max8: Adafruit AMG8833 Thermal Camera Heatmap Jitter

This repository contains the Max/MSP/Jitter code, for visualising data from the Adafruit AMG8833 thermal camera. The camera is a heatcamera with an 8 x 8 pixel dimension, that can measure temperatures between 0 to 80 degrees celsius. the sensor is capable of registering a human of up to 7 meters away, acording to Adafruit.

<img src="./media/Max_MSP-heating-camera.gif" alt="Schematic" style="zoom: 100%;" />

## Adafruit AMG8833 Setup

In order to use the max-patch, you must first start by following adafruits guide, in order to setup the camera with an arduino. This involves constructing the circuit below. it is very important that the camera is positioned acording to the schematic, with the name "AMG8833" facing your to your right.

<img src="./media/Adafruit AMG8833 connected to Arduino.png" alt="Schematic" style="zoom: 100%;" />

And downloading the "Adafruit_AMG88xx library", by following this path

![](https://cdn-learn.adafruit.com/assets/assets/000/048/539/large1024/temperature___humidity_managelib.png?1511746137)

Type in **AMG88xx** until you see the Adafruit Library pop up. Click Install!

![](https://cdn-learn.adafruit.com/assets/assets/000/048/540/large1024/temperature___humidity_amglib.png?1511746208)

the final step of setting up the Adafruit AMG8833 is to check if it is working by running the "amg88xx_test" example code, and checking to see that the serial monitor outputs (room temperature). If all here looks good, you are done with the setup.

**File->Examples->Adafruit_AMG88xx->amg88xx_test**

![](https://cdn-learn.adafruit.com/assets/assets/000/043/121/large1024/temperature_serialtest.gif?1498596216)

## Getting Started

Once it is setup then upload the example called "pixel_test" to the arduino.

**File -> Examples -> Adafruit_AMG88 -> pixels_test**

(optional) you can make the refreshrate of the camera sensor faster by changing the delay(1000) in line 61 to delay(100).

![](/Users/Pacour/Developer/L4COUR_Max-Patchers/Max Projects/05_Max8 - Adafruit AMG8833 Thermal Camera Heatmap Jitter/media/pixel_test Mod.png)

when you have uploaded the code **it is important that you do NOT open the serial monitor in the arduino IDE.** Instead you open the Max-patch and press the toggle button in order to initiate the patch.

then you select the corresponding serial port from the drop down menu, and now the code should be running as intended.

## Example

Now that everything is working, we can start to wonder what the opertunities of using this setup could be. At this point I am thinking that some form of machine learning "blob detection" would make the most sense, due to the fact that what we are displaying are essentially blobs of heat on a canvas. If we can detect where on the screen these blobs are detected we can extract blob detection data which can be used to control stuff.

![](/Users/Pacour/Developer/L4COUR_Max-Patchers/Max Projects/05_Max8 - Adafruit AMG8833 Thermal Camera Heatmap Jitter/media/cvjit.png)

In order to do this, we will first need to download Jean-Marc Pelletier's cv.jit package via the Max/MSP package manager. This will enable computer vision for Jitter. 

On Pelletiers website there is a reference for the cv.jit package, and here you will find a section called "Image Segmentation". In this section there are several objects available for doing blob detection.

## Sources:

- https://github.com/DDlabAU/thermal-camera-heatmap
- https://cdn-learn.adafruit.com/downloads/pdf/adafruit-amg8833-8x8-thermal-camera-sensor.pdf
- http://www.electroschematics.com/wp-content/uploads/2013/01/Arduino-Uno-R3-Pinouts.png
- https://jmpelletier.com/cvjit/
- https://vimeo.com/371734747
