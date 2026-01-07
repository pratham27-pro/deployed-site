import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { getPlaceNameFromCoords } from "./tagToPlace.js";

// Load environment variables
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export const uploadToCloudinary = async (
    buffer,
    folder,
    resourceType = "image",
    context = {}
) => {
    return new Promise((resolve, reject) => {
        console.log("🚀 Starting Cloudinary upload:", {
            folder,
            resourceType,
            bufferSize: buffer.length,
            contextKeys: Object.keys(context),
        });

        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: folder,
                resource_type: resourceType,
                context: context,
            },
            (error, result) => {
                if (error) {
                    console.error("❌ Cloudinary upload error:", {
                        message: error.message,
                        http_code: error.http_code,
                        error: error,
                    });
                    reject(error);
                } else if (!result) {
                    console.error("❌ No result returned from Cloudinary");
                    reject(new Error("No result from Cloudinary"));
                } else if (!result.secure_url || !result.public_id) {
                    console.error("❌ Invalid Cloudinary result:", result);
                    reject(new Error("Missing secure_url or public_id"));
                } else {
                    console.log("✅ Cloudinary upload success:", {
                        secure_url: result.secure_url,
                        public_id: result.public_id,
                        width: result.width,
                        height: result.height,
                        format: result.format,
                    });
                    resolve(result);
                }
            }
        );

        // ✅ Handle stream errors
        uploadStream.on("error", (streamError) => {
            console.error("❌ Upload stream error:", streamError);
            reject(streamError);
        });

        uploadStream.end(buffer);
    });
};

export const uploadToCloudinaryWithDetailsOverlay = async (
    buffer,
    folder,
    geotag = {}
) => {
    if (!buffer || buffer.length === 0) {
        throw new Error("Empty buffer provided");
    }

    // ✅ Safe property access
    const lat = geotag.latitude || 0;
    const lng = geotag.longitude || 0;
    const accuracy = geotag.accuracy || 0;
    const timestamp = geotag.timestamp || new Date().toISOString();

    console.log("🔍 Geotag data:", { lat, lng, accuracy, timestamp });

    // ✅ Get place name
    let placeName = "Location Unavailable";
    if (lat !== 0 && lng !== 0) {
        try {
            placeName = await getPlaceNameFromCoords(lat, lng);
            console.log(`📍 Place name: ${placeName}`);
        } catch (error) {
            console.error("Place lookup failed:", error);
        }
    }

    // ✅ Format date/time
    const captureDate = new Date(timestamp).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    // ✅ Shorten place name if too long
    const shortPlace =
        placeName.length > 50 ? placeName.substring(0, 47) + "..." : placeName;

    // ✅ Build context
    const context = {};
    if (lat !== 0) context.geotag_latitude = lat.toString();
    if (lng !== 0) context.geotag_longitude = lng.toString();
    if (accuracy !== 0) context.geotag_accuracy = accuracy.toString();
    context.geotag_place = placeName;
    context.geotag_timestamp = timestamp;

    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
                context, // Metadata (invisible)
                // ✅ TRANSFORMATION: Print text ON image
                transformation: [
                    { width: 1200, height: 1600, crop: "limit" }, // Resize if needed
                    {
                        // Line 1: GPS Coordinates
                        overlay: {
                            font_family: "Arial",
                            font_size: 28,
                            font_weight: "bold",
                            text: `GPS: ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                        },
                        gravity: "south_west",
                        x: 20,
                        y: 120,
                        color: "white",
                    },
                    {
                        // Background for line 1
                        overlay: {
                            font_family: "Arial",
                            font_size: 28,
                            font_weight: "bold",
                            text: `GPS: ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                        },
                        gravity: "south_west",
                        x: 22,
                        y: 122,
                        color: "black",
                        opacity: 0,
                    },
                    {
                        // Line 2: Place Name
                        overlay: {
                            font_family: "Arial",
                            font_size: 24,
                            text: shortPlace,
                        },
                        gravity: "south_west",
                        x: 20,
                        y: 80,
                        color: "white",
                    },
                    {
                        // Background for line 2
                        overlay: {
                            font_family: "Arial",
                            font_size: 24,
                            text: shortPlace,
                        },
                        gravity: "south_west",
                        x: 22,
                        y: 82,
                        color: "black",
                        opacity: 0,
                    },
                    {
                        // Line 3: Date & Time
                        overlay: {
                            font_family: "Arial",
                            font_size: 22,
                            text: captureDate,
                        },
                        gravity: "south_west",
                        x: 20,
                        y: 40,
                        color: "white",
                    },
                    {
                        // Background for line 3
                        overlay: {
                            font_family: "Arial",
                            font_size: 22,
                            text: captureDate,
                        },
                        gravity: "south_west",
                        x: 22,
                        y: 42,
                        color: "black",
                        opacity: 0,
                    },
                    {
                        // Semi-transparent black background box
                        overlay: "black",
                        opacity: 60,
                        width: 1200,
                        height: 150,
                        gravity: "south",
                        crop: "fill",
                    },
                ],
            },
            (error, result) => {
                if (error) {
                    console.error("❌ Cloudinary error:", error);
                    reject(error);
                } else if (!result?.secure_url) {
                    reject(new Error("Invalid Cloudinary result"));
                } else {
                    console.log(
                        "✅ Image with overlay uploaded:",
                        result.secure_url
                    );
                    resolve(result);
                }
            }
        );

        stream.end(buffer);
    });
};

// Helper function to delete from Cloudinary
export const deleteFromCloudinary = async (
    publicId,
    resourceType = "image"
) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
        });
        return result;
    } catch (error) {
        throw error;
    }
};

export default cloudinary;
