#homework - 1

def number_count(numbers):
    count = 0

    for i in numbers:
        if numbers.count(i) > 1:
            count += 1
    return count

print(number_count([10, 20, 10, 45, 10]))

#homework - 2 

programing_lists = ["html", "css", "java script", "react", "python"]

user_input = input("გინდათ სიაში ელემენტების გასუფთავება (yes or no): ")

if user_input == "yes":
    print(programing_lists.clear())

elif user_input == "no":
    print(programing_lists)

#homework - 3

fruits = ["banana", "mango", "orange", "watermelon"]

remove_input = int(input("შეიყვანეთ ინდექსის ნომერი რათა ამოიშალოს სასურველი ელემენტი: "))

print(fruits.pop(remove_input))

print(fruits)











