const blue = { r: 0, g: 173, b: 238 };
const green = { r: 140, g: 198, b: 63 };
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const sampleButton = document.getElementById("sample");

/**
 * Activate the user's camera and feed the video into our <video /> element.
 * @param {HTMLMediaElement} destination The media element to send the camera feed.
 */
function activateCamera(destination) {}

/**
 * Renders the source element to a canvas' drawing context.
 * @param {HTMLCanvasElement} canvasElement The canvas to save the video to.
 * @param {HTMLVideoElement} videoElement The video to render to the canvas.
 */
function renderVideo(canvasElement, videoElement) {}

/**
 * Retrieves the average RGB value from the canvas.
 * @param {HTMLCanvasElement} canvasElement The canvas element to retrieve the image from.
 */
function getRGBFromCanvas(canvasElement) {}

/**
 * Set Background color of body to the rgb value passed in.
 * @param {Object} rgb An object with r, g, and b property values.
 */
function setBackgroundColor(rgb) {}

/**
 * Returns the headers needed for the fetch call.
 * @returns {HeadersInit} Headers needed to authorize the call.
 */
function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer INSERT-TOKEN-HERE");
  return headers;
}

/**
 * Contacts the LIFX API
 */
function setLightState(rgb) {
  // Get the headers and build the PUT request to update all Lights
}
