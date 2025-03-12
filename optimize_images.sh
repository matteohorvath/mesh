#!/bin/bash

# Check if jpegoptim is installed
if ! command -v jpegoptim &> /dev/null; then
    echo "jpegoptim is not installed. Please install it first:"
    echo "On macOS: brew install jpegoptim"
    echo "On Ubuntu/Debian: sudo apt-get install jpegoptim"
    exit 1
fi

# Directory containing the images
IMAGE_DIR="public/images"

# Check if the directory exists
if [ ! -d "$IMAGE_DIR" ]; then
    echo "Error: Directory $IMAGE_DIR does not exist"
    exit 1
fi

echo "Starting image optimization..."

# Find all jpg/jpeg files and optimize them
find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' file; do
    echo "Optimizing: $file"
    jpegoptim --strip-all --preserve --max=85 "$file"
done

echo "Image optimization complete!" 