
#Homework - 1

user_password = input("Please enter password: ")

security_password = "password123"

if user_password == security_password:
    print("access granted.")

else:
    print("access denied.")


#Homework - 2

num = int(input("შეიყვანეთ რიცხვი რომ გავიგოთ კენტია თუ ლუწი: "))

if num % 2 == 0:
    print(f"{num}, არის ლუწი.")

else:
    print(f"{num}, არის კენტი.")


#Homework - 3

number1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
number2 = int(input("შეიყვანეთ მეორე რიცხვი: "))
number3 = int(input("შეიყვანეთ მესამე რიცხვი: "))
number4 = int(input("შეიყვანეთ მეოთხე რიცხვი: "))
number5 = int(input("შეიყვანეთ მეხუთე რიცხვი: "))

numbers = (number1 + number2 + number3 + number4 + number5) / 5

print("საშვალო არითმეტიკული არის:", numbers)


#Homework - 4

celsius = float(input("შეიყვანეთ ტემპერატურა ცელსიუსში: "))

fahrenheit = (celsius * 9/5) + 32

print("ფარენგეიტში ტემპერატურა არის:", fahrenheit)


#Homework - 5

fahrenheit2 = float(input("შეიყვანეთ ტემპერატურა ფარენგეიტში: "))

celsius2 = (fahrenheit2 - 32) * 5/9

print("ცელსიუსში ტემპერატურა არის:", celsius2)

#Homework - 6

print("Sololearn - შესრულებულია.")
