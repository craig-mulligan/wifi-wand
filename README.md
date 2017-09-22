# Wifi Wand

### Requirements

* 1 or more mobile phones cable of creating a 2.4ghz hotspot.
* Any number of Raspberry Pis (more the merrier)

### Required Environment variables

* `INTERVAL` : milliseconds between network scans. default: `3000`. Fastest you can go is `1500` otherwise scans start to fail because of resource busy err.

* `INTERFACE` : defaults to `wlan0`

* `SSIDS`: string of comma separated ssids you'd like to monitor and map colours to.

* `COLORS` : string of comma separated colors to map the colourScale. eg: `red, green, blue` (can be hex values too). These colors are mapped to the SSIDs therefore there should be the same number.

## Configure via [environment variables](https://docs.resin.io/management/env-vars/)
Variable Name | Value | Description | Device-specific
------------ | ------------- | ------------- | -------------
**`RESIN_HOST_CONFIG_gpu_mem`** | a value from `64` to `160` | the amount of RAM dedicated to the GPU | Raspberry Pi (all revs)


### URL LAUNCHER config via ENV VARS
*__!!! Please note that since `0.1.0` the `bool`-based env vars dropped `true` / `false` strings in favour of `0` / `1` ones. !!!__*

simply set these [environment varables](http://docs.resin.io/#/pages/management/env-vars.md) in your app via "Environment Variables" panel in the resin dashboard to configure the behaviour of your devices.
*__Please note that the `bool` type definition in the table is meant to accept to either `0` or `1` values.__*

* **`URL_LAUNCHER_URL`** *string* - the URL to be loaded. use `file:////usr/src/app/data/index.html` to load a local electronJS (or any website) app - *defaults to* `file:////usr/src/app/data/index.html`
* **`URL_LAUNCHER_NODE`** *bool* (converted from *string*) - whether or not enable nodejs - *defaults to* `0`
* **`URL_LAUNCHER_KIOSK`** *bool* (converted from *string*) - whether or not enter KIOSK mode - *defaults to* `1`
* **`URL_LAUNCHER_TITLE`** *string* - the title of the window. Seen only with `URL_LAUNCHER_FRAME`=`true` - *defaults to* `RESIN.IO`
* **`URL_LAUNCHER_FRAME`** *bool* (converted from *string*) - set to "true" to display the window frame. Seen only with `URL_LAUNCHER_KIOSK`=`false` - *defaults to*  `0`
* **`URL_LAUNCHER_CONSOLE`** *bool* (converted from *string*) - set to "true" to display the debug console -  *defaults to*  `0`
* **`URL_LAUNCHER_WIDTH`**  *int* (converted from *string*) -  - *defaults to* `1920`
* **`URL_LAUNCHER_HEIGHT`**  *int* (converted from *string*) -  - *defaults to* `1080`
* **`URL_LAUNCHER_TOUCH`** *bool* (converted from *string*) - enables touch events if your device supports them  - *defaults to* `0`
* **`URL_LAUNCHER_TOUCH_SIMULATE`** *bool* (converted from *string*) - simulates touch events - might be useful for touchscreen with partial driver support - be aware this could be a performance hog  - *defaults to* `0`
* **`URL_LAUNCHER_ZOOM`** *float* (converted from *string*) - The default zoom factor of the page, 3.0 represents 300%  - *defaults to* `1.0`
* **`URL_LAUNCHER_OVERLAY_SCROLLBARS`** *bool* (converted from *string*) - enables overlay scrollbars  - *defaults to* `0`
