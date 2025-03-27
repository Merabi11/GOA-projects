#homework - 1

first_name = "მერაბი"

print(first_name[1],first_name[3],first_name[5])


#homework - 2

#True or False? Strings are mutable, Lists are immutable - მცდარია ის რომ ჩვენ არ შეგვიძლია string-შეცვლა და list-არა? პირიქით ჩვენ ლისტებში შეგვიძლია ელემენტები წავშალოთ,ჩავამატოთ,შევიტანოთ მაგრამ მსგავსი ჩვენ სტრიქონზე არ შეგვიძლია მაგ:

name = "python"

# name[0] = "m" #ჩვენ სტრიქონზე ისე ვერ ვიმუშავებთ როგორც ლისტებზე ესეთი მიდგომა ჩვენ ერორს გამოგვიტანს.

name2 = [1, 2, 3, 4, 5] 

name2[0] = 2 #ჩვენ ამ ლისტში ვცვლით 0-ინდექსზე მყოფ ელემენტს სადაც იმყოფება 1-იანი იქ დავაყენებთ 2-იანს ასეთ მიდგომით ჩვენ ლისტებზე ესე ვიმუშავებთ.

print(name2)


#homework - 3

#list - სისტში ჩვენ შეგვიძლია ნებისმიერი ელემენტი შევცვალოთ,შევიტანოთ, წავშალოთ
#string - ჩვენ სტრიქონზე იგივეს ვერ ვიზამთ რასაც ლისტზე ვშვებით სტრიქონში ჩვენ არ შეგვიძლია სიმბოლოს შეცვლა ჩვენ მხოლოდ ახალი სტრინგის შექმნით მოვახდენთ ცვლილებას ჩვენ თუ ლისტში ვცვლიდით კონკრეტულ სიმბოლოს სტრინგის შემთხვევაში ახალი სტრინგის შექმნის შემთხვევაში მოვახდენტ ცვლილებას ოღონდ პითონის მას მიიჩნევს ახალ სტრინგად არა იმას რო ის აღიქვას ცვლილებად.


#homework - 4

user_list = []

for i in range(8):
    user_input = input("Enter your information: ")
    user_list.append(user_input)

print(f"your infotmation {user_list}")


#homework - 5

number_list = []

for i in range(10):
    number_input = int(input("Please enter numbers:"))
    number_list.append(number_input)


for i in number_list:
    if i % 2 == 0:
        print(f"ლუწია: {i}")

    else:
        print(f"კენტია: {i}")


#homework - 6

names_list = []

for i in range(5):
    names_input = input("Please enter names: ")
    names_list.append(names_input)

for name in names_list:
    if len(name) > 5:
        print("the name consists of more than five letters.")
    
    else:
        print(f"The name is: {name}")


#homework - 7

healthy_food = ["orange", "banana", "apple", "mango", "melon"]

healthy_food.pop(0)
healthy_food.pop(-1)

print(healthy_food)


#homework - 8

numers = [10, 10, 5, 10, 10]

numers.sort()

if numers[0] == numers[1]:
    print(numers[-1])

else:
    print(numers[0])


#homework - 9

print("Sololearn - შესრულებულია.")
