import os

def write_file(file_path: str, content: str):
  """
  Writes the provided content to the file at the specified file path.

  Args:
      file_path (str): The path of the file to write to
      content (str): The content to write to the file

  Raises:
      IOError: If there is an error writing to the file
      Exception: For any other unexpected errors
  """
  try:
    with open(file_path, "w") as file:
      file.write(content)
  except IOError as e:
    raise IOError(f"Failed to write to file {file_path}: {str(e)}")
  except Exception as e:
    raise Exception(f"Unexpected error while writing to file {file_path}: {str(e)}")

def read_file(file_path: str) -> str:
  with open(file_path, "r") as file:
    return file.read()

def append_file(file_path: str, text: str):
  with open(file_path, "a") as file:
    file.write(text)

def create_file(file_path: str):
  """
  Creates a new empty file at the specified file path.

  Args:
      file_path (str): The path where the new file should be created

  Raises:
      IOError: If there is an error creating the file
      Exception: For any other unexpected errors
  """
  try:
    open(file_path, "w").close()
  except IOError as e:
    raise IOError(f"Failed to create file {file_path}: {str(e)}")
  except Exception as e:
    raise Exception(f"Unexpected error while creating file {file_path}: {str(e)}")

def delete_file(file_path: str):
  os.remove(file_path)

def rename_file(file_path: str, new_name: str):
  os.rename(file_path, new_name)

def parse_input(input_str: str) -> list[str]:
    return input_str.strip().split('\n')

def parse_input_to_dict(input_str: str) -> dict[str, str]:
    return {k: v for k, v in [line.split(': ') for line in input_str.strip().split('\n')]}

def parse_input_to_list(input_str: str) -> list[str]:
    return [line.strip() for line in input_str.strip().split('\n')]

# if __name__ == "__main__":
#   print(parse_input_to_dict("name: John\nage: 30\ncity: New York"))
#   print(parse_input_to_list("name: John\nage: 30\ncity: New York"))
#   print(parse_input("name: John\nage: 30\ncity: New York"))
#   print(read_file("test.txt"))
#   print(write_file("test.txt", "Hello, world!"))
#   print(append_file("test.txt", "Hello, world!"))
#   print(create_file("test.txt"))
#   print(delete_file("test.txt"))
#   print(rename_file("test.txt", "test2.txt"))

if __name__ == "__main__":
  # create a file
  file_path = "test.txt"
  create_file(file_path)

   #   # write the input to the file
  #   write_file(file_path, user_input)

  # # ask the user for more input
  # more_input = input("Enter more input: ")

  # # write the more input to the file
  # write_file(file_path, more_input)

  # # ask the user for more input
  # more_input = input("Enter more input: ")

  # # write the more input to the file
  # write_file(file_path, more_input)

  # # ask the user for more input
  # more_input = input("Enter more input: ")

  # # write the more input to the file
  # write_file(file_path, more_input)



## in chat had to type use while loop for lines
  while True:
    # ask the user for input
    user_input = input("Enter your input (or 'done' to finish): ")

    # check if user wants to stop
    if user_input.lower() == 'done':
      break

