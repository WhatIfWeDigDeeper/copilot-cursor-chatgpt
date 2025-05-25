import os
import shutil
from typing import List

def write_file(file_path: str, content: str) -> None:
    with open(file_path, 'w') as f:
        f.write(content)

def append_file(file_path: str, content: str) -> None:
    with open(file_path, 'a') as f:
        f.write(content)

def read_file(file_path: str) -> str:
    with open(file_path, 'r') as f:
        return f.read()

def delete_file(file_path: str) -> None:
    if os.path.exists(file_path):
        os.remove(file_path)
    else:
        print(f"The file {file_path} does not exist.")

def copy_file(source_path: str, destination_path: str) -> None:
    import shutil
    shutil.copy(source_path, destination_path)

def move_file(source_path: str, destination_path: str) -> None:
    import shutil
    shutil.move(source_path, destination_path)

def rename_file(old_name: str, new_name: str) -> None:
    os.rename(old_name, new_name)


def list_files_in_directory(directory_path: str) -> List[str]:
    return os.listdir(directory_path)

def create_directory(directory_path: str) -> None:
    os.makedirs(directory_path, exist_ok=True)

def delete_directory(directory_path: str) -> None:
    shutil.rmtree(directory_path)

def get_file_size(file_path: str) -> int:
    import os
    return os.path.getsize(file_path)

def get_file_extension(file_path: str) -> str:
    return os.path.splitext(file_path)[1]

def get_file_name(file_path: str) -> str:
    return os.path.basename(file_path)

def get_file_creation_time(file_path: str) -> float:
    return os.path.getctime(file_path)

def get_file_modification_time(file_path: str) -> float:
    return os.path.getmtime(file_path)

def get_file_access_time(file_path: str) -> float:
    return os.path.getatime(file_path)

def is_file(file_path: str) -> bool:
    return os.path.isfile(file_path)

def is_directory(directory_path: str) -> bool:
    return os.path.isdir(directory_path)

def is_empty_directory(directory_path: str) -> bool:
    return len(os.listdir(directory_path)) == 0

def parse_input(input_str: str) -> List[str]:
    """
    Splits the input string by whitespace and returns a list of tokens.
    """
    return input_str.strip().split()
def parse_input_with_quotes(input_str: str) -> List[str]:
    """
    Splits the input string by whitespace, respecting quoted strings.
    """
    import shlex
    return shlex.split(input_str)
def parse_input_with_quotes_and_escape(input_str: str) -> List[str]:
    """
    Splits the input string by whitespace, respecting quoted strings and escape characters.
    """
    import shlex
    return shlex.split(input_str.replace("\\", "\\\\").replace('"', '\\"'))
def parse_input_with_quotes_and_escape_and_special_chars(input_str: str) -> List[str]:
    """
    Splits the input string by whitespace, respecting quoted strings, escape characters, and special characters.
    """
    import shlex
    return shlex.split(input_str.replace("\\", "\\\\").replace('"', '\\"').replace("'", "\\'"))

# if __name__ == "__main__":
#     # Example usage
#     write_file("example.txt", "Hello, World!")
#     print(read_file("example.txt"))
#     append_file("example.txt", "\nThis is a test.")
#     print(read_file("example.txt"))
#     delete_file("example.txt")
#     print(list_files_in_directory("."))
#     create_directory("test_dir")
#     print(is_directory("test_dir"))
#     delete_directory("test_dir")
# ```
#     print(is_empty_directory("test_dir"))
#     print(get_file_size("example.txt"))
#     print(get_file_extension("example.txt"))
#     print(get_file_name("example.txt"))
#     print(get_file_creation_time("example.txt"))
#     print(get_file_modification_time("example.txt"))
#     print(get_file_access_time("example.txt"))
#     print(is_file("example.txt"))
#     print(is_directory("test_dir"))
#     print(parse_input("Hello World! This is a test."))
#     print(parse_input_with_quotes('Hello "World!" This is a test.'))
#     print(parse_input_with_quotes_and_escape('Hello "World!" This is a test.'))
#     print(parse_input_with_quotes_and_escape_and_special_chars('Hello "World!" This is a test.'))
#     print(parse_input_with_quotes_and_escape_and_special_chars('Hello "World!" This is a test.'))

if __name__ == "__main__":
    # read user input and store it in a file
  # ask the user for more input until they say "done"
    user_input = input("Enter some text (type 'done' to finish): ")
    while user_input.lower() != "done":
        append_file("user_input.txt", user_input + "\n")
        user_input = input("Enter some text (type 'done' to finish): ")

    # read the file and print its contents
    print("Contents of user_input.txt:")
    print(read_file("user_input.txt"))
