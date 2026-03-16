import os
import re

content = open('src/constants/index.ts', 'r', encoding='utf-8').read()

used_assets = set(re.findall(r'/assets/([a-zA-Z0-9_\-\.]+)', content))
all_assets = set(os.listdir('public/assets'))
unused_assets = all_assets - used_assets

print('UNUSED ASSETS:')
for a in sorted(unused_assets):
    print(a)

used_textures = set(re.findall(r'/textures/project/([a-zA-Z0-9_\-\.]+)', content))
all_textures = set(os.listdir('public/textures/project'))
unused_textures = all_textures - used_textures

print('\nUNUSED TEXTURES:')
for t in sorted(unused_textures):
    print(t)
