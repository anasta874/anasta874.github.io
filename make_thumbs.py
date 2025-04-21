from PIL import Image
import os

input_dir = "assets/images"
output_dir = os.path.join(input_dir, "thumbs")
thumb_width = 300  # ширина миниатюры

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for filename in os.listdir(input_dir):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        try:
            filepath = os.path.join(input_dir, filename)
            img = Image.open(filepath)
            w_percent = thumb_width / img.size[0]
            h_size = int(img.size[1] * w_percent)
            img_resized = img.resize((thumb_width, h_size), Image.LANCZOS)

            name, _ = os.path.splitext(filename)
            output_file = os.path.join(output_dir, f"{name}-thumb.webp")
            img_resized.save(output_file, "WEBP", quality=80)
            print(f"✓ {filename} → {output_file}")
        except Exception as e:
            print(f"Ошибка с {filename}: {e}")
