import urllib.request
import os

icons_to_download = {
    "django": "public/assets/django.svg",
    "docker": "public/assets/docker.svg"
}

for name, output_path in icons_to_download.items():
    req = urllib.request.Request(f"https://cdn.simpleicons.org/{name}", headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = response.read().decode('utf-8')
            data = data.replace('<svg ', '<svg fill="white" ')
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(data)
        print(f"Downloaded {name}.svg")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
