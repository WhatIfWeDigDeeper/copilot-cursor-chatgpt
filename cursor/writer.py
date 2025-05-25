import os

def write_file(file_path: str, content: str):
  with open(file_path, "w") as file:
    file.write(text)

def read_file(file_path: str) -> str:
  with open(file_path, "r") as file:
    return file.read()

def append_file(file_path: str, text: str):
  with open(file_path, "a") as file:
    file.write(text)

def create_file(file_path: str):
  open(file_path, "w").close()

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
  # read user input and store it in a file
  # ask the user for more input until they say "done"

  # create a file
  file_path = "test.txt"
  create_file(file_path)

  # ask the user for input
  user_input = input("Enter your input: ")

  # write the input to the file
  write_file(file_path, user_input)

  # ask the user for more input
  more_input = input("Enter more input: ")

  # write the more input to the file
  write_file(file_path, more_input)

  # ask the user for more input
  more_input = input("Enter more input: ")

  # write the more input to the file
  write_file(file_path, more_input)

  # ask the user for more input
  more_input = input("Enter more input: ")

  # write the more input to the file
  write_file(file_path, more_input)

