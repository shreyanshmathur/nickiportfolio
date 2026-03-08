import os
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

folder_path = r"c:\Users\shrey\nicki portfolio\nicki-portfolio\public\media\images\unedited"
files = [f for f in os.listdir(folder_path) if f.lower().endswith('.heic')]

for f in files:
    heic_path = os.path.join(folder_path, f)
    jpg_path = os.path.join(folder_path, os.path.splitext(f)[0] + '.jpg')
    
    try:
        image = Image.open(heic_path)
        # Convert to RGB (in case of RGBA/transparency issues)
        rgb_im = image.convert('RGB')
        # Save as JPG with decent quality but optimized to save size
        rgb_im.save(jpg_path, "JPEG", optimize=True, quality=80)
        # remove the original heic to save space
        os.remove(heic_path)
        print(f"Converted {f}")
    except Exception as e:
        print(f"Error {f}: {e}")

print("Done")
