import os
import re

def extract_sections(jsx_code):
    sections = []
    take_start = re.compile(r'Take\s*([\s\S]*?)\s*Take\s*end', re.DOTALL)
    matches = take_start.finditer(jsx_code)
    for i, match in enumerate(matches, start=1):
        section = match.group(1)
        section = re.sub(r'/\*.*?\*/', '', section, flags=re.DOTALL)  # Remove comments
        sections.append(section.strip())  # Strip leading and trailing whitespace
        jsx_code = jsx_code.replace(match.group(0), f"/* Section {i} */", 1)
    return sections

def create_folders_and_files(sections, file_directory):
    for i, section in enumerate(sections, start=1):
        folder_name = f"Section{i}"
        folder_path = os.path.join(file_directory, folder_name)
        os.makedirs(folder_path, exist_ok=True)
        with open(os.path.join(folder_path, "Index.js"), "w", encoding="utf-8") as f:
            f.write(f'import React from "react";\n\nconst Index = () => {{\n  return (\n    <>\n      {section}\n    </>\n  );\n}};\n\nexport default Index;')

def generate_import_statements(num_sections):
    import_statements = []
    for i in range(1, num_sections + 1):
        import_statements.append(f"import Section{i} from \"./Section{i}/Index\"")
    return import_statements

def generate_component_calls(num_sections):
    component_calls = []
    for i in range(1, num_sections + 1):
        component_calls.append(f"<Section{i} />")
    return component_calls

def main():
    try:
        # Get the absolute path of the directory containing the script
        script_directory = os.path.dirname(os.path.abspath(__file__))
        
        # Assuming the Index.js file is in the same directory as the script
        index_js_path = os.path.join(script_directory, "Index.js")
        
        with open(index_js_path, "r", encoding="utf-8") as file:
            jsx_code = file.read()

        sections = extract_sections(jsx_code)

        if sections:
            create_folders_and_files(sections, script_directory)
            print("Sections extracted and saved into folders successfully.")
            import_statements = generate_import_statements(len(sections))
            component_calls = generate_component_calls(len(sections))
            print("\n".join(import_statements))
            print("\n".join(component_calls))
        else:
            print("No sections marked for extraction in the JSX code.")
    except Exception as e:
        print(f"An error occurred: {e}")

    input("Press Enter to exit...")

if __name__ == "__main__":
    main()
