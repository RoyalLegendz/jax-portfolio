import os
import re

# Folder containing your HTML files
project_folder = './'  # Change if your HTML files are in a subfolder

# Pattern to find <button> tags without class
button_pattern = re.compile(r'(<button)(?![^>]*class)([^>]*>)', re.IGNORECASE)
# Pattern to find <a> tags that look like buttons and don't have class
link_pattern = re.compile(r'(<a\s+href="[^"]*")(?![^>]*class)([^>]*>)', re.IGNORECASE)

# Add class="cta" to matching tags
def update_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()

    new_content = button_pattern.sub(r'\1 class="cta"\2', content)
    new_content = link_pattern.sub(r'\1 class="cta"\2', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f'Updated: {filepath}')
    else:
        print(f'No change: {filepath}')

# Walk through files in the folder
for root, dirs, files in os.walk(project_folder):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            update_html_file(filepath)
