#homework - 1

guess_num = 49

guess_input = 0

while guess_input != guess_num:
    guess_input = int(input("შეიყვანეთ რიცხვი (1_დან 100_ამდე):"))

print("შენ სწორად გამოიცანი.")

#homework - 2

guess_num2 = 39

guess_input2 = int(input("შეიყვანეთ რიცხვი (1_დან 80_ამდე):"))

if guess_input2 == guess_num2:
    print("შენ სწორად გამოიცანი.")

else:
    print("თქვენს ვერ გამოიცანით სამწუხაროდ.")


#homework - 3

email = "python@gmail.com"
password = "python"

email_input = ""
password_input = ""

while email_input != email and password_input != password:
    email_input = input("Enter email:")
    password_input = input("Enter password:")

print("You have successfully logged in.")
 

#homework - 4

name = "programing"

for index in range(len(name)):
    if index % 2 == 0:
        print(name[index])


#homework - 5

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = 0

for i in range(len(numbers)):
    if i % 2 == 0:
        sum += numbers[i]

print(sum)

































